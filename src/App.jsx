import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./routes/PrivateRoute"
import { PublicRoute } from "./routes/PublicRoute"
const Statistics = lazy(() => import("./pages/Tracker/Statistics"))
const Layout = lazy(() => import("./components/Layout"))
const Dashboard = lazy(() => import("./pages/Tracker/Dashboard"))
const Login = lazy(() => import("./pages/Tracker/Login"))
const Register = lazy(() => import("./pages/Tracker/Register"))
const NotFound = lazy(() => import("./pages/Tracker/NotFound"))
const AddTransaction = lazy(() => import("./pages/Tracker/AddTransaction"))

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path='statistics' element={<Statistics />} />
        <Route path='add-transaction' element={<AddTransaction />} />
      </Route>
      <Route
        path='/login'
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path='/register'
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
