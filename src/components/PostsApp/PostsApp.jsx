import { useEffect, useState } from "react"
import { List } from "./List"
import { fetchPosts, fetchPostsByQuery } from "../../services/api"
import { Button } from "../Button"
import { useInView } from "react-intersection-observer"
import { Loader } from "./Loader"
import { SearchBar } from "./SearchBar"
import { Modal } from "../Modal/Modal"
import { PostModal } from "./PostModal"

export const PostsApp = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = window.localStorage.getItem("posts")
    if (savedPosts !== null) {
      return JSON.parse(savedPosts)
    }
    return []
  })
  const [content, setContent] = useState(null)
  const [query, setQuery] = useState("")
  const [skip, setSkip] = useState(
    () => JSON.parse(window.localStorage.getItem("skip")) || 0
  )
  const [limit, setLimit] = useState(
    () => JSON.parse(window.localStorage.getItem("limit")) || 5
  )
  const [total, setTotal] = useState(0)
  const [isInfinity, setIsInfinity] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  const handleOpenModal = (item) => {
    setIsOpen(true)
    setContent(item)
  }
  const handleCloseModal = () => setIsOpen(false)

  const { ref, inView } = useInView({
    threshold: 0,
  })
  useEffect(() => {
    window.localStorage.setItem("limit", JSON.stringify(limit))
    window.localStorage.setItem("skip", JSON.stringify(skip))
  }, [limit, posts, skip])

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true)
        const { posts, total } = query
          ? await fetchPostsByQuery({ limit, skip, q: query })
          : await fetchPosts({
              limit,
              skip,
            })
        setPosts((prev) => [...prev, ...posts])
        setTotal(total)
        // setPosts(posts)
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
    setSkip(0)
  }
  return (
    <div className='flex flex-col items-center'>
      {/* <span>Infinity scroll</span>
      <Button onClick={() => setIsInfinity(!isInfinity)}>
        {isInfinity ? "Disable" : "Enable"}
      </Button> */}
      <SearchBar setQuery={handleSetQuery} />
      {query && !posts.length && <span>Posts were not found</span>}
      <List items={posts} query={query} openModal={handleOpenModal} />
      {isLoading && <Loader />}
      {isError && <span>Something went wrong</span>}
      <div ref={ref}>
        {posts.length && posts.length < total ? (
          <Button
            onClick={handleChangeSkip}
            cn={isInfinity && "invisible"}
            cnButton='items-center'
          >
            Load more
          </Button>
        ) : null}
      </div>
      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <PostModal {...content} />
        </Modal>
      )}
    </div>
  )
}
