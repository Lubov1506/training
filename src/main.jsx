import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "modern-normalize"
import "./index.css"
import { UserProvider } from "./store/UserProvider.jsx"
import { TodosProvider } from "./store/TodosProvider.jsx"
import { GalleryProvider } from "./store/GalleryProvider.jsx"

createRoot(document.getElementById("root")).render(
  <GalleryProvider>
    <TodosProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </TodosProvider>
  </GalleryProvider>
)
