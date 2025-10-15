import { useEffect, useState } from "react"

export const useHttp = (fetchDataFn, param) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true)
        const data = await fetchDataFn(param)
        setData(data)
      } catch (e) {
        setError(true)
        console.log(e)
      } finally {
        setLoading(false)
        setError(false)
      }
    }
    getUsers()
  }, [fetchDataFn, param])
  return [loading, error, data]
}
