import { gql } from  'graphql-request';
import { CharacterApi } from './character.api-model';
import { graphqlClient } from 'core/api';

interface GetCharacter {
  character: CharacterApi;
}

export const getCharacter = async (id: string): Promise<CharacterApi> => {
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
  
  const { character } = await graphqlClient.request<GetCharacter>(query);
  return character;
};