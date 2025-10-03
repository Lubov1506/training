import { ArticlesApp, PhoneBookApp, PostsApp } from "./components/"

function App() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center py-2 w-full">
      <PostsApp />  
      {/* <ArticlesApp/> */}
    </div>
  )
}

export default App
