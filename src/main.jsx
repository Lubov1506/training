import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "modern-normalize"
import "./index.css"
import { UserProvider } from "./store/UserProvider.jsx"
import { TodosProvider } from "./store/TodosProvider.jsx"
import { GalleryProvider } from "./store/GalleryProvider.jsx"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { UsersProvider } from "./store/UsersProvider.jsx"
import { AuthProvider } from "./store/AuthProvider.jsx"
import { Provider } from "react-redux"
import { store } from "./redux/store.js"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <UsersProvider>
          <GalleryProvider>
            <TodosProvider>
              <UserProvider>
                <App />
              </UserProvider>
            </TodosProvider>
          </GalleryProvider>
        </UsersProvider>
      </AuthProvider>
      <ToastContainer autoClose={1500} />
    </BrowserRouter>
  </Provider>
)
