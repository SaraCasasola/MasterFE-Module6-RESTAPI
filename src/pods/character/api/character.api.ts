import { gql } from  'graphql-request';
import { CharacterApi } from './character.api-model';
import { graphqlClient } from 'core/api';

interface GetCharacter {
  character: CharacterApi;
}

export const getCharacter = (id: string): Promise<GetCharacter> => {
  const query = gql`
    query {
      character(id: ${id}) {       
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image        
      }
    }
  `;
  
  return graphqlClient.request<GetCharacter>(query);
};