import { useContext } from "react"
import { UserContext } from "./UserProvider"
import { TodosContext } from "./TodosProvider"
import { GalleryContext } from "./GalleryProvider"
import { UsersContext } from "./UsersProvider"

export const useUser = () => useContext(UserContext)
export const useTodos = () => useContext(TodosContext)
export const useGallery = () => useContext(GalleryContext)
export const useUsers = () => useContext(UsersContext)
