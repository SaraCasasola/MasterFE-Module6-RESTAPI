import { gql } from  'graphql-request';
import { EpisodeCollectionApi } from './episode-collection.api-model';
import { graphqlClient } from 'core/api';

interface GetEpisodeCollection {
  episodes: EpisodeCollectionApi;
}

export const getEpisodeCollection = (pageNumber: number): Promise<GetEpisodeCollection> => {
  const query = gql`
    query {
      episodes(page: ${pageNumber}) {
        info {
          pages
        }
        results {
          id
          name
          air_date
          episode
        }
      }
    }
  `;
  return graphqlClient.request<GetEpisodeCollection>(query);
};

export const getEpisodeCollectionFilteredByName = (pageNumber: number, name: string): Promise<GetEpisodeCollection> => {
  const query = gql`
    query {
      episodes(page: ${pageNumber}, filter: {name: "${name}"}) {
        info {
          pages
        }
        results {
          id
          name
          air_date
          episode
        }
      }
    }
  `;
  return graphqlClient.request<GetEpisodeCollection>(query);
}