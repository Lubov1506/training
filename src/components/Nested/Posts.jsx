import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { fetchOneUserPosts } from "../../services/usersPosts/api"
import { SinglePost } from "./SinglePost"
import { Loader } from "../Loader"

export const Posts = () => {
  const { userId } = useParams()
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const getUserPosts = async () => {
      try {
        const { posts } = await fetchOneUserPosts(userId)

        setPosts(posts)
      } catch (e) {
        console.log(e)
      }
    }
    getUserPosts()
  }, [userId])

  if (!posts) return <Loader />
  return (
    <div className='max-w-[500px]'>
      <div>
        <h2 className='text-xl font-semibold'>Posts</h2>
        {posts.length ? (
          <ul className='flex flex-col gap-4 '>
            {posts.map((post) => {
              return <SinglePost key={post.id} {...post} />
            })}
          </ul>
        ) : (
          <p>User hasn't published any posts yet.</p>
        )}
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
