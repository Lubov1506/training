import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({name:'Fedir'})
  const contextValue = { user }
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
