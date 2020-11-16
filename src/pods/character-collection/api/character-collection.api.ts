import { gql } from  'graphql-request';
import { CharacterCollectionApi } from './character-collection.api-model';
import { graphqlClient } from 'core/api';

interface GetCharacterCollection {
  characters: CharacterCollectionApi;
}

export const getCharacterCollection = (pageNumber: number): Promise<GetCharacterCollection> => {
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
  return graphqlClient.request<GetCharacterCollection>(query);
};

export const getCharacterCollectionFilteredByName = (pageNumber: number, name: string): Promise<GetCharacterCollection> => {
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
  return graphqlClient.request<GetCharacterCollection>(query);
}
  
