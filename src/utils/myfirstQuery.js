import { gql } from "graphql-request";
// inde imellem `` er det man skal skrive i graphql, på hygraph siden i api playground
export const myFirstQuery = gql `
query {
  blogs {
    title
    text{text}
    dato
    author{text}
  }
}`
