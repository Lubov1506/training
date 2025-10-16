import axios from "axios"

axios.defaults.baseURL = "https://dummyjson.com/"

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get("users")

    return data.users
  } catch (e) {
    console.log(e)
  }
}
export const fetchOneUser = async (id) => {
  try {
    const { data } = await axios.get(`users/${id}`)
    return data
  } catch (e) {
    console.log(e)
  }
}
export const fetchOneUserPosts = async (id) => {
  try {
    const { data } = await axios.get(`users/${id}/posts`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    })
    console.log(data.posts)

    return [...data.posts]
  } catch (e) {
    console.log(e)
  }
}
export const fetchUserPostById = async (postId) => {
  try {
    const { data } = await axios.get(`posts/${postId}`)
    console.log(data)

    return data
  } catch (e) {
    console.log(e)
  }
}
