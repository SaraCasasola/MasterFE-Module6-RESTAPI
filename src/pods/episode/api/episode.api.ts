import { gql } from  'graphql-request';
import { EpisodeApi } from './episode.api-model';
import { graphqlClient } from 'core/api';

interface GetEpisode {
  episode: EpisodeApi;
}

export const getEpisode = (id: string): Promise<GetEpisode> => {
  const query = gql`
    query {
      episode(id: "${id}") {       
        id
        name
        air_date
        episode
        characters {
          name
        }
      }
    }
  `;
  
  return graphqlClient.request<GetEpisode>(query);
};