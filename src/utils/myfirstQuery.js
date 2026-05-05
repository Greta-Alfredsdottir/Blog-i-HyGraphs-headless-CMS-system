import { gql } from "graphql-request";

export const myFirstQuery = gql `
query {
  blogs {
    title
    text{text}
    dato
    author{text}
  }
}`