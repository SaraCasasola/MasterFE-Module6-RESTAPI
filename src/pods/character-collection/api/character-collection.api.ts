import { gql } from  'graphql-request';
import { CharacterCollectionApi } from './character-collection.api-model';
import { graphqlClient } from 'core/api';

interface GetCharacterCollection {
  characters: CharacterCollectionApi;
}

export const getCharacterCollection = async (pageNumber: number): Promise<CharacterCollectionApi> => {
  const query = gql`
    query {
      characters(page: ${pageNumber}) {
        info {
          pages
        }
        results {
          id
          image,
          name,
          status,
          species
        }
      }
    }
  `;
  const { characters } = await graphqlClient.request<GetCharacterCollection>(query);
  return characters;
};

export const getCharacterCollectionFilteredByName = async (pageNumber: number, name: string): Promise<CharacterCollectionApi> => {
  const query = gql`
    query {
      characters(page: ${pageNumber}, filter: {name: "${name}"}) {
        info {
          pages
        }
        results {
          id
          image,
          name,
          status,
          species
        }
      }
    }
  `;
  const { characters } = await graphqlClient.request<GetCharacterCollection>(query);
  return characters;
}
  
