import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com/"
const ACCESS_KEY = "_X_nAN-1CU1vws6A_XtRAPcrpgzhG63VLRNpbiYn1Lo"

export const fetchImgs = async () => {
  try {
    const { data } = await axios.get('photos', {
      params: {
        client_id: ACCESS_KEY,
      },
    })
    
    return {data}
  } catch (e) {
    console.log(e)
  }
}
