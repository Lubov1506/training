import { Link, Route, Routes } from "react-router-dom"
import { About, Home, NotFound, UserPage, Users } from "./pages"
import { Layout } from "./components/Layout"
import { Company, Mission, Team } from "./components/Nested"
import { Posts } from "./components/Nested/Posts"
import { PostInfo } from "./components/Nested/PostInfo"

function App() {
  return (
    <div className='flex flex-col gap-2 w-full min-h-screen  text-black items-center bg-gray-200'>
      <Routes>
        <Route path='/' element={<Layout />}>
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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
