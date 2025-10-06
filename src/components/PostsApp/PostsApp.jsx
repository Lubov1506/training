import { useEffect, useState } from "react"
import { List } from "./List"
import { fetchPosts, fetchPostsByQuery } from "../../services/api"
import { Button } from "../Button"
import { useInView } from "react-intersection-observer"
import { Loader } from "./Loader"
import { SearchBar } from "./SearchBar"

export const PostsApp = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = window.localStorage.getItem("posts")
    if (savedPosts !== null) {
      return JSON.parse(savedPosts)
    }
    return []
  })


  const [query, setQuery] = useState("")

  const [skip, setSkip] = useState(
    () => JSON.parse(window.localStorage.getItem("skip")) || 0
  )
  const [limit, setLimit] = useState(
    () => JSON.parse(window.localStorage.getItem("limit")) || 5
  )
  const [isInfinity, setIsInfinity] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0,
  })
  useEffect(() => {
    window.localStorage.setItem("posts", JSON.stringify(posts))
    window.localStorage.setItem("limit", JSON.stringify(limit))
    window.localStorage.setItem("skip", JSON.stringify(skip))
  }, [limit, posts, skip])

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true)
        const { posts } = query
          ? await fetchPostsByQuery({ limit, skip, q: query })
          : await fetchPostsByQuery({
              limit,
              skip,
            })
        // setPosts((prev) => [...prev, ...posts])
        setPosts(posts)
      } catch (err) {
        console.log(err)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getPosts()
  }, [limit, query, skip])

  const handleChangeSkip = () => {
    setSkip((prev) => prev + limit)
  }
  // useEffect(() => {
  //   isInfinity && setSkip((prev) => prev + limit)
  // }, [inView, isInfinity, skip])

  const handleSetQuery = (query) => {
    setQuery(query)
    setPosts([])
  }
  return (
    <div className="flex flex-col items-center">
      {/* <span>Infinity scroll</span>
      <Button onClick={() => setIsInfinity(!isInfinity)}>
        {isInfinity ? "Disable" : "Enable"}
      </Button> */}
      <SearchBar setQuery={handleSetQuery} />
      <List items={posts} query={query} />
      {isLoading && <Loader />}
      {isError && <span>Something went wrong</span>}
      <div ref={ref}>
        <Button onClick={handleChangeSkip} cn={isInfinity && "invisible"} cnButton='items-center'>
          Load more
        </Button>
      </div>
    </div>
  )
}
