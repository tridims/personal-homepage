import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I$apos;m a student in Brawijaya University!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dimas Tri Mustakim
          </Heading>
          <p>IT Enthusiast / Student / Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
