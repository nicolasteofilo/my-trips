import { PageTemplate } from 'templates/Pages'
import { GetStaticProps } from 'next'
import { client } from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import { useRouter } from 'next/router'

interface PageProps {
  slug: string
}

export default function AboutPage() {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return <PageTemplate />
}

// generate static props for this page (only runs on the server)
export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }: PageProps) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'About'
    }
  }
}
