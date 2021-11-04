import { Fragment } from 'react'
import Head from  'next/head'
import AllPosts from "../../components/Posts/AllPosts"
import { getAllPosts } from '../../helpers/PostsUtil'

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="posts" />
      </Head>
      <AllPosts posts={posts}/>
    </Fragment>
  )
}

const getStaticProps = () => {
  const posts = getAllPosts()

  return {
    props: {
      posts: posts
    }
  }
}

export {
  getStaticProps
}

export default AllPostsPage