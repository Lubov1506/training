import { useContext } from "react"
import { UserContext } from "./UserProvider"
import { TodosContext } from "./TodosProvider"
import { GalleryContext } from "./GalleryProvider"

export const useUser = () => useContext(UserContext)
export const useTodos = () => useContext(TodosContext)
export const useGallery = () => useContext(GalleryContext)
