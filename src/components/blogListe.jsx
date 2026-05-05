import { useGraphQuery } from "../utils/hook";
import { myFirstQuery } from "../utils/myfirstQuery";
import { BlogCard } from "./cards";

// error handling, skal være på 0, ellers ingen error

export const BlogList =() => {
    const {data, isLoading, error}= useGraphQuery(myFirstQuery);
    const blogs = data?.blogs ?? [];
    if (isLoading){
        return <div>Indlæse Blogpost</div>;
    }
    if (error) {
        return <div>Fejl ved indlæsning {error.message}</div>
    }
    return (
      <section>
        <h1>Blog Post </h1>
        <div>{blogs.map((blog, index) => 
        (<BlogCard key={index} blog={blog}/>
        ))}
        </div>
      </section>
    )
}