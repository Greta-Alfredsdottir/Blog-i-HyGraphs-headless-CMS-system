import { GraphQLClient } from 'graphql-request'

export const graphClient = new GraphQLClient(import.meta.env.VITE_PUBLIC_GRAPH_ENDPOINT)