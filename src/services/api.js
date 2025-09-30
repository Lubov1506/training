import axios from "axios"

axios.defaults.baseURL = "https://dummyjson.com/"

export const fetchPosts = async () => {
  const { data } = await axios.get("posts")
  console.log(data)

  return data
}
