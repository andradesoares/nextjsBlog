import Link from 'next/link'
import Image from 'next/image'
import classes from './PostItem.module.css'

const PostItem = ({ post }) => {
  const{ title, image, excerpt, date, slug } = post

  const imagePath = `/images/posts/${image}`

  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const linkPath = `/posts/${slug}`

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image 
              src={imagePath}
              alt={title}
              width={500} 
              height={300}
              layotu='responsive'
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formatedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem