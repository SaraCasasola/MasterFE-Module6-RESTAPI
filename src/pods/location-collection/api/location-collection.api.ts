import { gql } from  'graphql-request';
import { LocationCollectionApi } from './location-collection.api-model';
import { graphqlClient } from 'core/api';

interface GetLocationCollection {
  locations: LocationCollectionApi;
}

export const getLocationCollection = async (pageNumber: number): Promise<LocationCollectionApi> => {
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
  const { locations } = await graphqlClient.request<GetLocationCollection>(query);
  return locations;
};

export const getLocationCollectionFilteredByName = async (pageNumber: number, name: string): Promise<LocationCollectionApi> => {
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
  const { locations } = await graphqlClient.request<GetLocationCollection>(query);
  return locations;
}