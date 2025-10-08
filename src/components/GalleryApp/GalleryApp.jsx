import { useEffect, useState } from "react"
import { fetchImgs } from "../../services/gallery/api"

export const GalleryApp = () => {
  const [imgs, setImgs] = useState([])
  const [isLoading, setIsLoading]= useState(false)
  const [isError, setIsError]= useState(false)
  useEffect(() => {
    const getImgs = async () => {
      try {
        setIsLoading(true)
        const { data } = await fetchImgs()
        console.log(data);
        
        setImgs(data)
      } catch (e) {
        setIsError(true)
        console.log(e)
      }
      finally{
        setIsError(false)
        setIsLoading(false)
      }
    }
    getImgs()
  }, [])
console.log(imgs);

  return <div className='text-black'>
    
  </div>
}
