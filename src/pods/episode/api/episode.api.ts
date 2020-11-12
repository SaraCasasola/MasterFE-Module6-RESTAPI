import Axios from 'axios'
import { EpisodeApi } from './episode.api-model';

const episodeURLbase = 'https://rickandmortyapi.com/api/episode/';

export const getEpisode = async (id: string): Promise<EpisodeApi> => {
  const { data } = await Axios.get<EpisodeApi>(`${episodeURLbase}${id}`);
  return data;
};

export const getCharactersByEpisode = async (episode: EpisodeApi): Promise<string[]> => {
  let charactersNames = [];

  await Promise.all(episode.characters.map(async (characterURL) => {
    const { data } = await Axios.get(characterURL);
    charactersNames.push(data.name);
  }));

  return charactersNames;
};