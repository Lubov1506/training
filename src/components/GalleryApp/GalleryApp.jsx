import { useEffect, useState } from "react"
import { fetchImgs, fetchImgsByQuery } from "../../services/gallery/api"
import { useGallery } from "../../store/hooks"
import { SearchBar } from "./SearchBar"
import { ImageGallery } from "./ImageGallery"
import { LoadMoreBtn } from "./LoadMoreBtn"
import { Loader } from "../PostsApp/Loader"
import { ImageModal } from "./ImageModal"

export const GalleryApp = () => {
  const { imgs, setImgs, chosenPhoto, isOpenModal, setIsOpenModal } =
    useGallery([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("car")
  const [totalPages, setTotalPages] = useState("")

  useEffect(() => {
    const getImgs = async () => {
      try {
        setIsLoading(true)

        const { results, total, total_pages } =
          query && (await fetchImgsByQuery({ page, query }))
        console.log(results)

        results.length &&
          setImgs((prev) => {
            const combined = [...prev, ...results]
            const unique = combined.filter(
              (img, index, self) =>
                index === self.findIndex((i) => i.id === img.id)
            )
            return unique
          })
        setTotalPages(total_pages)
      } catch (e) {
        setIsError(true)
        console.log(e)
      } finally {
        setIsError(false)
        setIsLoading(false)
      }
    }
    getImgs()
  }, [page, query, setImgs])
  console.log(imgs, "page", page)
  const handleChangePage = () => setPage((prev) => prev + 1)
  const handleSetQuery = (query) => {
    setImgs([])
    setQuery(query)
    setPage(1)
  }
  console.log(isOpenModal, chosenPhoto)

  return (
    <div className='text-black w-full flex flex-col gap-2 justify-start items-center '>
      <SearchBar query={query} setQuery={handleSetQuery} />
      {isLoading && <Loader />}
      {!query && !imgs.length && (
        <span className='text-2xl text-center'>Start searching!</span>
      )}
      {!!imgs.length && (
        <>
          <ImageGallery onOpenModal={() => setIsOpenModal(true)} />
          {page < totalPages && <LoadMoreBtn onClick={handleChangePage} />}
        </>
      )}

      {isOpenModal && (
        <ImageModal
          isOpenModal={isOpenModal}
          chosenPhoto={chosenPhoto}
          closeModal={() => setIsOpenModal(false)}
        />
      )}
    </div>
  )
}
