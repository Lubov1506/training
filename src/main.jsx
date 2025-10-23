import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "modern-normalize"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Provider } from "react-redux"
import { store, persistor } from "./redux/store.js"
import { PersistGate } from "redux-persist/integration/react"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      
                  <App />
            
        <ToastContainer autoClose={1500} />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
