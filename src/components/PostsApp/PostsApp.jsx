import { useEffect, useState } from "react"
import { List } from "./List"
import { fetchPosts } from "../../services/api"
import { Button } from "../Button"
import { useInView } from "react-intersection-observer"
import { Loader } from "./Loader"
import { SearchBar } from "./SearchBar"
export const PostsApp = () => {
  const [posts, setPosts] = useState(
    () => JSON.parse(window.localStorage.getItem("posts")) || []
  )
  const [skip, setSkip] = useState(() =>
    JSON.parse(window.localStorage.getItem("skip") || 0)
  )
  const [limit, setLimit] = useState(5)
  const [isInfinity, setIsInfinity] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true)
        const { posts } = await fetchPosts({
          limit,
          skip,
        })
        console.log(posts, limit, skip)
        setPosts((prev) => [...prev, ...posts])
        // setPosts([...posts])
      } catch (err) {
        console.log(err)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getPosts()
  }, [limit, skip])
  fetchPosts()
  //   const handleIncreasePage = () => setSkip((prev) => prev + limit)
  //   console.log(skip)
  //   const handleDecreasePage = () => setSkip((prev) => prev - limit)
  const handleChangeSkip = () => {
    setSkip((prev) => prev + limit)
  }
  useEffect(() => {
    isInfinity && setSkip((prev) => prev + limit)
  }, [inView, isInfinity, limit])
  return (
    <div>
      <span>Infinity scroll</span>
      <Button onClick={() => setIsInfinity(!isInfinity)}>
        {isInfinity ? "Disable" : "Enable"}
      </Button>
      <SearchBar />
      <List items={posts} />
      {isLoading && <Loader />}
      {isError && <span>Something went wrong</span>}
      {/* <Button onClick={handleDecreasePage} disabled={skip < limit}>
        Prev page
      </Button>
      <Button onClick={handleIncreasePage}>Next page</Button> */}
      <div ref={ref}>
        <Button onClick={handleChangeSkip} cn={isInfinity && "invisible"}>
          Load more
        </Button>
      </div>
    </div>
  )
}
