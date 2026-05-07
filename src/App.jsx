import { useState } from 'react'
import { useGraphQuery } from "./utils/hook";
import { myFirstQuery } from './utils/myfirstQuery';
import { BlogCard } from "./components/cards";
import { BlogList } from './components/blogListe';
import {ThemeProvider, createTheme, Box, Container, CssBaseline} from '@mui/material';

const theme = createTheme({
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
  
  const { data, isLoading, error } = useGraphQuery(myFirstQuery)
  console.log(data, isLoading, error)

  return (
    <>
    <ThemeProvider theme = {theme}>
      <Box component = "main" sx = {{py: 6}}>
        <Container maxWidth = "lg">
          <BlogList/>
        </Container>
      </Box>
    </ThemeProvider>
    
     
    </>
  )
}

export default App
