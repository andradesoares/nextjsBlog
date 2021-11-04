import { Fragment } from 'react'
import Head from  'next/head'
import PostContent from "../../components/Posts/PostDetail/PostContent"
import { getPostData } from "../../helpers/PostsUtil"

const SinglePostPage = ({ post }) => {
  return (
    <Fragment>
      <PostContent post={post}/>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt}/>
      </Head>
    </Fragment>
  )
}

const getStaticProps = ({ params }) => {
  const { slug } = params

  const post = getPostData(slug)

  return {
    props: {
      post
    },
    revalidate: 600
  }
}

const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export {
  getStaticProps,
  getStaticPaths
}

export default SinglePostPage