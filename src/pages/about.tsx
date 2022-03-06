import AboutTemplate from 'templates/About'
import { GetStaticProps } from 'next'
import { client } from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps: GetStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {
      title: 'About'
    }
  }
}
