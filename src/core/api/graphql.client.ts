import { GraphQLClient } from 'graphql-request';

const url = 'https://rickandmortyapi.com/graphql/';
export const graphqlClient = new GraphQLClient(url);
