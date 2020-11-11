import Axios from 'axios'
import { EpisodeCollectionApi } from './episode-collection.api-model';

const episodesURLbase = 'https://rickandmortyapi.com/api/episode/';

export const getEpisodeCollection = async (pageNumber: number, name?: string): Promise<EpisodeCollectionApi> => {
  const url = name ? `${episodesURLbase}?page=${pageNumber}&name=${name}` : `${episodesURLbase}?page=${pageNumber}`;
  const { data } = await Axios.get<EpisodeCollectionApi>(url);
  return data;
};


