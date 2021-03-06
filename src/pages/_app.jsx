import '../sass/main.scss'
import 'react-toastify/dist/ReactToastify.css';

import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
