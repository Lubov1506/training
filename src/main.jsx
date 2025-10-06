import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "modern-normalize"
import "./index.css"
import { UserProvider } from "./store/UserProvider.jsx"

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
)
