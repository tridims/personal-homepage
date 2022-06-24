import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Object3d = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(0, 0.5, 0))
  const [initialCameraPosition] = useState(new THREE.Vector3(5, 4, 10))

  const [scene] = useState(new THREE.Scene())
  const [clock] = useState(new THREE.Clock())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      _camera.aspect = scW / scH
      _camera.updateProjectionMatrix()
      renderer.setSize(scW, scH)
    }
  }, [renderer, _camera])

  useEffect(() => {
    const { current: container } = refContainer

    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      // creating the renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      renderer.physicallyCorrectLights = true
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // setting up pemremgenerator
      const pmremGenerator = new THREE.PMREMGenerator(renderer)
      // scene.background = new THREE.Color(0xbfe3dd)
      scene.environment = pmremGenerator.fromScene(
        new RoomEnvironment(),
        0.04
      ).texture

      // setting camera
      const camera = new THREE.PerspectiveCamera(40, scW / scH, 1, 100)
      camera.position.set(5, 2, 8)
      setCamera(camera)

      // lighting
      const ambientLight = new THREE.AmbientLight(0xcccccc, 2)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xcccccc, 3)
      directionalLight.position.set(0.5, 0.5, 0.5)
      scene.add(directionalLight)

      // setting controls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.target = target
      controls.update()
      controls.enablePan = false
      controls.enableDamping = true
      controls.autoRotate = true
      setControls(controls)

      // loading model
      const dracoloader = new DRACOLoader()
      dracoloader.setDecoderPath('/draco3d/')

      const loader = new GLTFLoader()
      loader.setDRACOLoader(dracoloader)

      let mixer
      loader.load(
        '/LittlestTokyo.glb',
        function (gltf) {
          const model = gltf.scene
          model.position.set(1, 1, 0)
          model.scale.set(0.007, 0.007, 0.007)
          scene.add(model)

          model.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = true
              child.receiveShadow = true
            }
          })

          mixer = new THREE.AnimationMixer(model)
          mixer.clipAction(gltf.animations[0]).play()

          animate()
          setLoading(false)
        },
        undefined,
        function (error) {
          console.error(error)
        }
      )

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = initialCameraPosition.y
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        const delta = clock.getDelta()
        mixer.update(delta)
        controls.update()
        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [renderer, scene, target, clock])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <Box
      ref={refContainer}
      className="3d-object"
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  )
}

export default Object3d
