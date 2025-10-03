import { useEffect, useState } from "react"
import { List } from "./List"
import { fetchPosts } from "../../services/api"
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
  console.log(posts)

  const [query, setQuery] = useState(
    () => JSON.parse(window.localStorage.getItem("query-posts")) || ""
  )
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(5)
  const [isInfinity, setIsInfinity] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0,
  })
  // useEffect(() => {
  //   window.localStorage.setItem("posts", JSON.stringify(posts))
  // }, [posts])
  useEffect(() => {
    window.localStorage.setItem("query-posts", JSON.stringify(query))
  }, [query])

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true)
        const { posts } = await fetchPosts({
          limit,
          skip,
        })
        console.log(posts, limit, skip)
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
  }, [limit, skip])

  const handleChangeSkip = () => {
    setSkip((prev) => prev + limit)
  }
  useEffect(() => {
    isInfinity && setSkip((prev) => prev + limit)
  }, [inView, isInfinity, limit])

  const getSearchedPosts = (posts) => {
    return (
      posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      ) ||
      posts.filter((post) =>
        post.body.toLowerCase().includes(query.toLowerCase())
      )
    )
  }
  return (
    <div>
      <span>Infinity scroll</span>
      <Button onClick={() => setIsInfinity(!isInfinity)}>
        {isInfinity ? "Disable" : "Enable"}
      </Button>
      <SearchBar query={query} setQuery={setQuery} />
      <List items={getSearchedPosts(posts)} />
      {isLoading && <Loader />}
      {isError && <span>Something went wrong</span>}
      <div ref={ref}>
        <Button onClick={handleChangeSkip} cn={isInfinity && "invisible"}>
          Load more
        </Button>
      </div>
    </div>
  )
}
