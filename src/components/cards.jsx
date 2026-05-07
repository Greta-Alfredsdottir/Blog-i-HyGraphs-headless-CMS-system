import { react } from "react";
import { blogs } from "../utils/blog";
import { Typography, Card, CardContent } from "@mui/material";

export const BlogCard = ({blog, featured = false}) => {
  return (
        <Card component = "article" sx={{mb: featured ? 4 : 0, borderRadius: 3, boxShadow: featured ? 4 : 2, height: '100%'}}>
            <CardContent sx={{ p: 3}}>
                <Typography variant={featured ? 'h4' : 'h5'} component="h2" align="center" sx={{mb: 1.5, fontWeight: 700}}>
                    {blog.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" align="center">
                    {blog.text.text}
                </Typography>
            </CardContent>
        </Card>
  );
};
