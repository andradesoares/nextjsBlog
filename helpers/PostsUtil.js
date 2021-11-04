import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

const getPostData = (postIdentifier) => {

  const postSlug = postIdentifier.replace(/\.md$/, '')
  const fileContent = fs.readFileSync(path.join(postsDirectory, `${postSlug}.md`), 'utf-8')
  const { data, content } = matter(fileContent)

  const postData = {
    slug: postSlug,
    ...data,
    content
  }

  return postData
}

const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory)

  const allPosts = postFiles.map(postFile => getPostData(postFile))

  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

  return sortedPosts
}


const getFeaturedPosts = () => {
  const allPosts = getAllPosts()

  const featuredPosts = allPosts.filter(post => post.isFeatured)

  return featuredPosts
}

export {
  getPostData,
  getAllPosts,
  getFeaturedPosts
}