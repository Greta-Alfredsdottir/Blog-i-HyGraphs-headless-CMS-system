import { useGraphQuery } from "../utils/hook";
import { myFirstQuery } from "../utils/myfirstQuery";
import { BlogCard } from "./cards";
import { Box, Grid, Typography} from "@mui/material";

// error handle and Loading Handle

// her opretter vi komponenten
export const BlogList =() => {
  // Henter data med en hook
    const {data, isLoading, error}= useGraphQuery(myFirstQuery);
    const blogs = data?.blogs ?? []; //“Hvis data findes, så hent blogs.”
    //Her kaldes useGraphQuery.
    // Den returnerer typisk et object som indeholder:
    // data → data fra API'et
    // isLoading → om data stadig hentes
    // error → hvis noget gik galt
    if (isLoading){
        return <div>Indlæse Blogpost</div>;
    }
    if (error) {
        return <div>Fejl ved indlæsning {error.message}</div>
    }
   const [featuredBlog, ...restBlog] = blogs;
  // Det som sker 
  //Komponent starter
  //     ↓
  //useGraphQuery henter data
  //     ↓
  //isLoading = true
  //     ↓
  //"Indlæse Blogpost" vises
  //     ↓
  //Data kommer tilbage
  //     ↓
  //blogs array oprettes
  //     ↓
  //Første blog gemmes som featuredBlog
  //       ↓
  //Resten gemmes i restBlog
  //     ↓
  //Komponenten renderer bloglisten

    return (
      <Box component = "section">
        <Typography variant="h3" component="h1" align="center" sx={{mb: 4, fontWeight: 700}}>Blog Posts</Typography>
        {featuredBlog ? <BlogCard blog={featuredBlog} featured />: null}
        {restBlog.length > 0 ?(
          <Grid container spacing={3} sx={{mt: featuredBlog ? 1 : 0}}>
            {restBlog.map((blog, index) => (
              <Grid item size={6, {xs: 12, sm:6}} key={`${blog.title}-${index}`}>
                <BlogCard blog={blog}/>
              </Grid>
            ))}
            </Grid>
        ):null}
      </Box>
    );
};