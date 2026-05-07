import { useGraphQuery } from "../utils/hook";
import { myFirstQuery } from "../utils/myfirstQuery";
import { BlogCard } from "./cards";
import { Box, Grid, Typography} from "@mui/material";

// error handle and Loading

export const BlogList =() => {
    const {data, isLoading, error}= useGraphQuery(myFirstQuery);
    const blogs = data?.blogs ?? [];
    if (isLoading){
        return <div>Indlæse Blogpost</div>;
    }
    if (error) {
        return <div>Fejl ved indlæsning {error.message}</div>
    }
   const [featuredBlog, ...restBlog] = blogs;

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