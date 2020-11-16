import Axios, { AxiosResponse } from 'axios';
import { EpisodeApi } from './episode.api-model';

const episodeURLbase = 'https://rickandmortyapi.com/api/episode/';

export const getEpisode = (id: string): Promise<AxiosResponse<EpisodeApi>> => {
  return Axios.get<EpisodeApi>(`${episodeURLbase}${id}`);
};

export const getCharactersByEpisode = async (episode: EpisodeApi): Promise<string[]> => {
  let charactersNames = [];

  await Promise.all(episode.characters.map(async (characterURL) => {
    try {
      const { data } = await Axios.get(characterURL);
      charactersNames.push(data.name);
    } catch {
      console.error("Some character names missing");
    }

  }));

  return charactersNames;
};