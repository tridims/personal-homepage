import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbJFrameApp from '../public/images/works/ThumbJFrameApp.png'
import thumbSimpleApp from '../public/images/works/simpleAppCollection.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="JFrame App"
            title="JFrame App for managing cow sales"
            thumbnail={thumbJFrameApp}
          >
            A simple Java GUI Application to keep track of cow sales.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="Simple App"
            title="A Collection of Simple App"
            thumbnail={thumbSimpleApp}
          >
            A collection of simple project that i wrote.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
