import { useEffect, useState } from "react"
import { fetchUserPostById } from "../../services/usersPosts/api"
import { useParams } from "react-router-dom"
import { Loader } from "../Loader"

export const PostInfo = () => {
  const {postId} = useParams()

  const [post, setPost] = useState(null)

  useEffect(() => {
    const getUserPostById = async () => {
      try {
        const data = await fetchUserPostById(postId)
        setPost(data );
        
      } catch (e) {
        console.log(e)
      }
    }
    getUserPostById()
  }, [postId])
if(!post) return <Loader/>
  return <div>{post.body}</div>
}
