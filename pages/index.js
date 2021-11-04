import { Fragment } from "react"
import Head from  'next/head'
import FeaturedPosts from "../components/Home/FeaturedPosts"
import Hero from "../components/Home/Hero"
import { getFeaturedPosts } from '../helpers/PostsUtil'

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Blog</title>
        <meta name="description" content="blog" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts}/>
    </Fragment>
  )
}

const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export {
  getStaticProps
}

export default HomePage