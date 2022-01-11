import Head from 'next/head'

import Header from '../Components/Header/Header'
import About from '../Components/About/About'
import Works from '../Components/Works/Works'
import Contact from '../Components/Contact/Contact'

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
      <Contact id='contact'/>
    </div>
  )
}