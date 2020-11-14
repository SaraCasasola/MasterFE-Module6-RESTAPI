import { GraphQLClient } from 'graphql-request';

const url = 'http://localhost:3080/graphQl';
export const graphqlLocalClient = new GraphQLClient(url);
