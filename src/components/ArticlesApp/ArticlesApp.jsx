import { useEffect, useState } from "react"
import { List } from "./List"
import { SideBar } from "./SideBar"
import { nanoid } from "nanoid"
import { Outlet } from "./Outlet"
import { Modal } from "../Modal/Modal"
import { AddArticleForm } from "./AddArticleForm"
import articlesList from "../../assets/articles.json"

export const ArticlesApp = () => {
  const [articles, setArticles] = useState(() => {
    const savedArts = window.localStorage.getItem("articles")
    if (savedArts !== null && JSON.parse(savedArts).length) {
      return JSON.parse(savedArts)
    }
    return articlesList
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
  const [searchStr, setSearchStr] = useState(() => {
    const saveSearchStr = window.localStorage.getItem("search")
    if (saveSearchStr !== null) {
      return JSON.parse(saveSearchStr)
    }
    return ""
  })
  const [isOpen, setIsOpen] = useState(false)
  const [sortType, setSortType] = useState("")

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  useEffect(() => {
    window.localStorage.setItem("fav-arts", JSON.stringify(favs))
    window.localStorage.setItem("articles", JSON.stringify(articles))
  }, [articles, favs])
  useEffect(() => {
    window.localStorage.setItem("tab", JSON.stringify(selectedTab))
    window.localStorage.setItem("search", JSON.stringify(searchStr))
  }, [searchStr, selectedTab])

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
    setArticles((prev) => [
      ...prev,
      { ...data, id: nanoid(), createdAt: Date.now() },
    ])
  }

  const filteredArticles = (arts) =>
    arts.filter(
      (item) =>
        item.title.toLowerCase().includes(searchStr.toLowerCase()) ||
        item.body.toLowerCase().includes(searchStr.toLowerCase())
    )

  const sortedArticles = (arts) => {
    switch (sortType) {
      case "newest":
        return filteredArticles(arts).sort((a, b) => b.createdAt - a.createdAt)
      case "oldest":
        return filteredArticles(arts).sort((a, b) => a.createdAt - b.createdAt)
      case "a-z":
        return filteredArticles(arts).sort((a, b) =>
          a.title.localeCompare(b.title)
        )
      case "z-a":
        return filteredArticles(arts).sort((a, b) =>
          b.title.localeCompare(a.title)
        )
      default:
        return filteredArticles(arts)
    }
  }
  return (
    <div className='grid  grid-cols-[300px_1fr] h-screen'>
      <SideBar onChangeTab={setSelectedTab} openModal={openModal} />
      <Outlet
        articles={sortedArticles(articles)}
        selectedTab={selectedTab}
        onAddToFav={handleAddToFav}
        onDelete={handleDeleteArt}
        favs={sortedArticles(favs)}
        isEmptyFav={!favs.length}
        onDeleteFav={handleDelFav}
        searchValue={searchStr}
        onChangeSearchStr={setSearchStr}
        setSortType={setSortType}
      />
      {isOpen && (
        <Modal onClose={closeModal}>
          <AddArticleForm onAdd={handleAddArticle} onClose={closeModal} />
        </Modal>
      )}
    </div>
  )
}
