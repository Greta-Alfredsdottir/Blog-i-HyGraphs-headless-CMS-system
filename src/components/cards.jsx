import { react } from "react";
import { blogs } from "../utils/blog";


export const BlogCard =({blog}) => {
  
     
    return (
        <article>
            <h2>{blog.title}</h2>
            <p>{blog.text.text}</p>
        </article>
    )
}