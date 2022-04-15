import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Link,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a student in Brawijaya University!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dimas Tri Mustakim
          </Heading>
          <p>IT Enthusiast / Student / Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/dimas.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a student in Brawijaya University in my second year. Currently I
          have interest in Software Engineering, Full-Stack Development, Machine
          Learning, and Security. Not yet to decide which one i would really
          want, but i belive that learning all of those will be helpful in
          building good stuff in the future. Pls chekout my website in{' '}
          <NextLink href="https://www.dimastri.online">
            <Link>here.</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portofolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Batu, Jawa Timur.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started education in informatics at Brawijaya University.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbys ❤️
        </Heading>
        <Paragraph>Exploring tech related stuff, reading manga.</Paragraph>
      </Section>
    </Container>
  )
}

export default Page
