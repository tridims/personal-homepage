import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SimpleAppCollection">
    <Container>
      <Title>
        SimpleAppCollection <Badge>2022-</Badge>
      </Title>
      <Paragraph>
        A Collection of simple program that i wrote to usually experimenting
        with certain Tech Stack.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/tridims/simple-app">
            https://github.com/tridims/simple-app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Anything i want to experiment with.</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
