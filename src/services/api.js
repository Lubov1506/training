import axios from "axios"

axios.defaults.baseURL = "https://dummyjson.com/"

export const fetchPosts = async (configureParams) => {
  const { data } = await axios.get("posts", {
    params: {
      ...configureParams,
    },
  })
  console.log(data)

  return data
}
export const fetchPostsByQuery = async (configureParams) => {
  const { data } = await axios.get("posts/search", {
    params: {
      ...configureParams,
    },
  })
  
  return data
}
