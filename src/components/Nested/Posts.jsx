import { Suspense, useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { fetchOneUserPosts } from "../../services/usersPosts/api"
import { Loader } from "../Loader"
import SinglePost from "./SinglePost"
import { useHttp } from "../../hooks/useHttp"

const Posts = () => {
  const { userId } = useParams()
  const [posts, setPosts] = useState(null)

  const [loading, error, data] = useHttp(fetchOneUserPosts, userId)

  useEffect(() => {
    if (data) {
      setPosts(data)
    }
  }, [data])

  if (loading) return <Loader />
  return (
    <div className='max-w-[500px] flex flex-col sm:flex-row '>
      <div>
        <h2 className='text-xl font-semibold'>Posts</h2>
        {posts && posts.length ? (
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
export default Posts
