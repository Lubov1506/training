import { Link, Route, Routes } from "react-router-dom"
import { About, Home, NotFound } from "./pages"
import { Layout } from "./components/Layout"

function App() {
  return (
    <div className='flex flex-col gap-2 w-full min-h-screen text-black items-center bg-gray-200'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
          <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
