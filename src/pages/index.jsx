import Head from 'next/head'

import Header from '../Components/Header/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Otávio Cipriano | Portfolio</title>
        <meta name="description" content="Otavio Cipriano's Portfolio" />
      </Head>
      <Header/>
    </div>
  )
}
