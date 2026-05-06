import { react } from "react";
import { blogs } from "../utils/blog";
import Typography from '@mui/material/Typography';


export const BlogCard =({blog}) => {
  
     
    return (
        <article>
            <Typography variant="h5" component="div" align="center">{blog.title}</Typography>
             <Typography variant="body2" align="center">{blog.text.text}</Typography>
        </article>
    )
}