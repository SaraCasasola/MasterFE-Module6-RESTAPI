import { gql } from  'graphql-request';
import { LocationCollectionApi } from './location-collection.api-model';
import { graphqlClient } from 'core/api';

interface GetLocationCollection {
  locations: LocationCollectionApi;
}

export const getLocationCollection = (pageNumber: number): Promise<GetLocationCollection> => {
  const query = gql`
    query {
      locations(page: ${pageNumber}) {
        info {
          pages
        }
        results {
          id
          name
          type
          dimension
        }
      }
    }
  `;
  return graphqlClient.request<GetLocationCollection>(query);
};

export const getLocationCollectionFilteredByName = (pageNumber: number, name: string): Promise<GetLocationCollection> => {
  const query = gql`
    query {
      locations(page: ${pageNumber}, filter: {name: "${name}"}) {
        info {
          pages
        }
        results {
          id
          name
          type
          dimension
        }
      }
    }
  `;
  return graphqlClient.request<GetLocationCollection>(query);
}