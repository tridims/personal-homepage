import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Simple JFrame GUI App for managing cow sales">
    <Container>
      <Title>
        GUI App Manajemen Sapi Qurban <Badge>2021</Badge>
      </Title>
      <Paragraph>
        My first ever GUI app written in Java using JFrame. It is used to manage
        cow sales for qurban. It stores the data to a file using Serializable.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code On Github</Meta>
          <Link href="https://github.com/tridims/Aplikasi-Manajemen-Penjualan-Sapi-Qurban">
            https://github.com/tridims/Aplikasi-Manajemen-Penjualan-Sapi-Qurban{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, OOP, JFrame</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ThumbJFrameApp.png" alt="JFrameApp" />
    </Container>
  </Layout>
)

export default Work
