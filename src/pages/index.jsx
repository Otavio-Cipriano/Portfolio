import Head from 'next/head'

import Header from '../components/Header/Header'
import About from '../components/About/About'
import Works from '../components/Works/Works'

export default function Home({userID}) {
  return (
    <div>
      <Head>
        <title>Otávio Cipriano | Portfolio</title>
        <meta name="description" content="Otavio Cipriano's Portfolio" />
      </Head>
      <Header id="header"/>
      <Works id="works"/> 
      <About id='aboutme'/>
    </div>
  )
}

//test