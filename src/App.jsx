import { useState } from 'react'
import { useGraphQuery } from "./utils/hook";
import { myFirstQuery } from './utils/myfirstQuery';
import { BlogCard } from "./components/cards";
import { BlogList } from './components/blogListe';


function App() {
  const [count, setCount] = useState(0)
  const { data, isLoading, error } = useGraphQuery(myFirstQuery)
  console.log(data, isLoading, error)

  return (
    <>
    
     <BlogList/>
    </>
  )
}

export default App
