import { useState } from 'react'
import { useGraphQuery } from "./utils/hook";
import { myFirstQuery } from './utils/myfirstQuery';
import { BlogCard } from "./components/cards";
import { BlogList } from './components/blogListe';
import {themeProvider, createTheme} from '@mui/material';

const theme = createTheme ({
  palette: {
    background: {
      default: '#f5f7fb'
    },
    primary: {
      main: '#1f4b99'
    },
  },
  typography: {
    fontFamily: 'Roboto, ariel, sans-serif'
  },
});

function App() {
  const [count, setCount] = useState(0)
  const { data, isLoading, error } = useGraphQuery(myFirstQuery)
  console.log(data, isLoading, error)

  return (
    <>
    <themeProvider theme = {theme}>
      <box component = "main" sx = {{py: 6}}>
        <container maxWidth = "lg">
          <BlogList/>
        </container>
      </box>
    </themeProvider>
    
     
    </>
  )
}

export default App
