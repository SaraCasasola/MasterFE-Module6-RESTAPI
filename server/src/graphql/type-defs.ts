import { gql } from 'graphql-request';

export const typeDefs = gql`
    type Query {
        comment(characterId: Int!): Comment
    }
    type Comment {      
        id: ID
        characterId: Int,
        comment: String
    }
`;