import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { PrivateRoute } from "./routes/PrivateRoute"
import { Counter } from "./components/Counter/Counter"
import { TodoApp } from "./components/TodoApp/TodoApp"
import { TodosApp } from "./components/TodosApp/TodosApp"

const Home = lazy(() => import("./pages/UsersPosts/Home"))
const About = lazy(() => import("./pages/UsersPosts/About"))
const UserPage = lazy(() => import("./pages/UsersPosts/UserPage"))
const Users = lazy(() => import("./pages/UsersPosts/Users"))
const Login = lazy(() => import("./pages/UsersPosts/Login"))
const Company = lazy(() => import("./components/Nested/Company"))
const Mission = lazy(() => import("./components/Nested/Mission"))
const Team = lazy(() => import("./components/Nested/Team"))
const Posts = lazy(() => import("./components/Nested/Posts"))
const PostInfo = lazy(() => import("./components/Nested/PostInfo"))

function App() {
  return (
    <div className='flex flex-col gap-2 w-full min-h-screen  items-center bg-gray-200'>
      <TodosApp/>
      {/* <Routes>
        <Route  
          path='/'
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path='about' element={<About />}>
            <Route index path='team' element={<Team />} />
            <Route path='mission' element={<Mission />} />
            <Route path='company' element={<Company />} />
          </Route>
          <Route path='users' element={<Users />} />

          <Route path='users/:userId' element={<UserPage />}>
            <Route
              path='info'
              element={
                <>
                  <p className='text-xl font-semibold'>User info</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, expedita dignissimos magnam eveniet id dolor ducimus
                    odit quibusdam deleniti laudantium ad, voluptatum natus
                    aliquam enim saepe eius beatae architecto minus?
                  </p>
                </>
              }
            />
            <Route path='posts' element={<Posts />}>
              <Route path='details/:postId' element={<PostInfo />} />
            </Route>
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes> */}
    </div>
  )
}

export default App
