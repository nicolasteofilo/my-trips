import NextNProgress from 'nextjs-progressbar'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyles } from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My trips</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="A simple project to show my favorites spots in the word"
        />
      </Head>
      <NextNProgress
        color="#FFF"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
