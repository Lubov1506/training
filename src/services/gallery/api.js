import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com/"
const ACCESS_KEY = "_X_nAN-1CU1vws6A_XtRAPcrpgzhG63VLRNpbiYn1Lo"

export const fetchImgs = async (configureParams) => {
  try {
    const { data } = await axios.get("photos", {
      params: {
        client_id: ACCESS_KEY,
        ...configureParams,
      },
    })
    return { data }
  } catch (e) {
    console.log(e)
  }
}
export const fetchImgsByQuery = async (configureParams) => {
  try {
    const {
      data: { results, total_pages },
    } = await axios.get("search/photos", {
      params: {
        client_id: ACCESS_KEY,
        ...configureParams,
      },
    })

    console.log(results, total_pages)

    return { results, total_pages }
  } catch (e) {
    console.log(e)
  }
}
