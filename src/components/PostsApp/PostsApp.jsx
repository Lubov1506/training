import { useEffect, useState } from "react"
import { List } from "./List"
import { fetchPosts } from "../../services/api"
import { Button } from "../Button"
import { useInView } from "react-intersection-observer"
export const PostsApp = () => {
  const [posts, setPosts] = useState(
    () => JSON.parse(window.localStorage.getItem("posts")) || []
  )
  const [skip, setSkip] = useState(() =>
    JSON.parse(window.localStorage.getItem("skip") || 0)
  )
  const [limit, setLimit] = useState(5)
  const [isInfinity, setIsInfinity] = useState(false)

  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { posts } = await fetchPosts({
          limit,
          skip,
        })
        console.log(posts, limit, skip)
        setPosts((prev) => [...prev, ...posts])
        // setPosts([...posts])
      } catch (err) {
        console.log(err)
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
      <List items={posts} />
      {/* <Button onClick={handleDecreasePage} disabled={skip < limit}>
        Prev page
      </Button>
      <Button onClick={handleIncreasePage}>Next page</Button> */}
      <div ref={ref}>
        <Button
          onClick={handleChangeSkip}
          cn={isInfinity && "invisible"}
        >
          Load more
        </Button>
      </div>
    </div>
  )
}
