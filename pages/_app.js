import { Fragment } from 'react'
import Head from  'next/head'
import MainNavigation from "../components/Layout/MainNavigation"
import '../styles/globals.css'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation/>
      <main>{children}</main>
    </Fragment>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
