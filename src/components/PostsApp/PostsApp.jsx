import { useEffect, useState } from "react"
import { List } from "./List"
import { fetchPosts } from "../../services/api"

export const PostsApp = () => {
  const [posts, setPosts] = useState(
    () => JSON.parse(window.localStorage.getItem("posts")) || []
  )

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { posts, limit } = await fetchPosts()
        console.log(posts, limit)
        setPosts((prev) => [...prev, ...posts])
      } catch (err) {
        console.log(err)
      }
    }
    getPosts()
  }, [])
  fetchPosts()
  return (
    <div>
      <List items={posts} />
    </div>
  )
}
