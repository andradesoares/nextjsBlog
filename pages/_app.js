import Head from  'next/head'
import '../styles/globals.css'

import { Fragment } from "react"
import MainNavigation from "../components/layout/MainNavigation"

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
