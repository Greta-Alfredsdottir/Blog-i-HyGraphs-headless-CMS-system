import { useGraphQuery } from "../utils/hook";
import { myFirstQuery } from "../utils/myfirstQuery";
import { BlogCard } from "./cards";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

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
    const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: (theme.vars ?? theme).palette.text.secondary,
            ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
  }),
}));
    return (
      <section>
        <Typography variant="h2" gutterBottom align="center"> Blog Post </Typography>
        <Grid container rowSpacing={4} columns={2*2}>
        <Grid size={2}>
        {blogs.map((blog, index) => 
        (<BlogCard key={index} blog={blog}/>
        ))}
        </Grid>
        </Grid>
      </section>
    )
}