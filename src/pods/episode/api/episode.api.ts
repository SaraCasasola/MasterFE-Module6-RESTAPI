import { gql } from  'graphql-request';
import { EpisodeApi } from './episode.api-model';
import { graphqlClient } from 'core/api';

interface GetEpisode {
  episode: EpisodeApi;
}

export const getEpisode = async (id: string): Promise<EpisodeApi> => {
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
  
  const { episode } = await graphqlClient.request<GetEpisode>(query);
  return episode;
};