import Head from 'next/head'

import Header from '../Components/Header'
import About from '../Components/About'
import Sidebar from '../Components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Otávio Cipriano | Portfolio</title>
        <meta name="description" content="Otavio Cipriano's Portfolio" />
      </Head>
      <Header />
      {/* <Works/> */}
      <About/>
      <Sidebar/>
    </div>
  )
}
