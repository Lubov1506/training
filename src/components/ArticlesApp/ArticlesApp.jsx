import { useEffect, useState } from "react"
import { List } from "./List"
import { SideBar } from "./SideBar"
import { nanoid } from "nanoid"
import { Outlet } from "./Outlet"
import { Modal } from "../Modal/Modal"
import { AddArticleForm } from "./AddArticleForm"

export const ArticlesApp = () => {
  const [articles, setArticles] = useState(() => {
    const savedArts = window.localStorage.getItem("articles")
    if (savedArts !== null && JSON.parse(savedArts).length) {
      return JSON.parse(savedArts)
    }
    return [
      {
        id: nanoid(),
        title: "JS",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ex vitae ullam voluptatem asperiores, animi ratione culpa doloremque voluptas? Dolor, eligendi sunt? Iste ad omnis deleniti natus officia a reprehenderit?",
        createdAt: Date.now(),
        author: "Genry",
      },
      {
        id: nanoid(),
        title: "CSS",
        body: "consectetur adipisicing elit. Explicabo ex vitae ullam voluptatem asperiores, animi ratione culpa doloremque voluptas? Dolor, eligendi sunt? Iste ad omnis deleniti natus officia a reprehenderit?",
        createdAt: Date.now(),
        author: "Penry",
      },
      {
        id: nanoid(),
        title: "React",
        body: "consectetur adipisicingconsectetur adipisicing  elit. Explicabo ex vitae ullam voluptatem asperiores, animi ratione culpa doloremque voluptas? Dolor, eligendi sunt? Iste ad omnis deleniti natus officia a reprehenderit?",
        createdAt: Date.now(),
        author: "Hank",
      },
    ]
  })
  const [favs, setFavs] = useState(() => {
    const savedFavs = window.localStorage.getItem("fav-arts")
    if (savedFavs !== null) {
      return JSON.parse(savedFavs)
    }
    return []
  })
  const [selectedTab, setSelectedTab] = useState(() => {
    if (window.localStorage.getItem("tab") !== null) {
      return JSON.parse(window.localStorage.getItem("tab"))
    }
    return "home"
  })
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  useEffect(() => {
    window.localStorage.setItem("fav-arts", JSON.stringify(favs))
    window.localStorage.setItem("articles", JSON.stringify(articles))
  }, [articles, favs])
  useEffect(() => {
    window.localStorage.setItem("tab", JSON.stringify(selectedTab))
  }, [selectedTab])

  const handleAddToFav = (art) => {
    const isExist = favs.some((item) => item.id === art.id)
    if (isExist) {
      return console.log("Article is already in a favs ")
    }
    setFavs((prev) => [...prev, art])
  }
  const handleDelFav = (id) => {
    setFavs((prev) => prev.filter((item) => item.id !== id))
  }
  const handleDeleteArt = (id) => {
    setArticles((prev) => prev.filter((item) => item.id !== id))
    if (favs.some((item) => item.id === id)) {
      handleDelFav(id)
    }
  }
  const handleAddArticle = (data) => {
    console.log(data)

    setArticles((prev) => [
      ...prev,
      { ...data, id: nanoid(), createdAt: Date.now() },
    ])
  }
  return (
    <div className='grid  grid-cols-[300px_1fr] h-screen'>
      <SideBar onChangeTab={setSelectedTab} openModal={openModal} />
      <Outlet
        articles={articles}
        selectedTab={selectedTab}
        onAddToFav={handleAddToFav}
        onDelete={handleDeleteArt}
        favs={favs}
        onDeleteFav={handleDelFav}
      />
      {isOpen && (
        <Modal onClose={closeModal}>
          <AddArticleForm onAdd={handleAddArticle} onClose={closeModal} />
        </Modal>
      )}
    </div>
  )
}
