import { gql } from  'graphql-request';
import { EpisodeCollectionApi } from './episode-collection.api-model';
import { graphqlClient } from 'core/api';

interface GetEpisodeCollection {
  episodes: EpisodeCollectionApi;
}

export const getEpisodeCollection = async (pageNumber: number): Promise<EpisodeCollectionApi> => {
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
  const { episodes } = await graphqlClient.request<GetEpisodeCollection>(query);
  return episodes;
};

export const getEpisodeCollectionFilteredByName = async (pageNumber: number, name: string): Promise<EpisodeCollectionApi> => {
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
  const { episodes } = await graphqlClient.request<GetEpisodeCollection>(query);
  return episodes;
}