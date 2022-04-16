import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

// Import thumbnail here
import thumbArticle1 from '../public/images/image1.jpg'
import thumbArticle2 from '../public/images/image2.jpg'
//

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Articles that I wrote.
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Creating Github Pages with Jekyll"
            thumbnail={thumbArticle1}
            href="https://www.dimastri.online/2021/08/14/Creating-Github-Pages-using-Jekyll.html"
          />
          <GridItem
            title="Creating Path Finding Agent with Q-Learning"
            thumbnail={thumbArticle2}
            href="https://www.dimastri.online/2021/08/16/Creating-Path-Finding-Agent-with-Q-Learning.html"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
