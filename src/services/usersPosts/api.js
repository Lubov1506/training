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
