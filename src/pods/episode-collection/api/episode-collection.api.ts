import Axios from 'axios'
import { EpisodeCollectionApi } from './episode-collection.api-model';

const episodesURLbase = 'https://rickandmortyapi.com/api/episode/';

export const getEpisodeCollection = async (pageNumber: number): Promise<EpisodeCollectionApi> => {
  const url = `${episodesURLbase}?page=${pageNumber}`;
  const { data } = await Axios.get<EpisodeCollectionApi>(url);
  return data;
};

export const getEpisodeCollectionFilteredByName = async (pageNumber: number, name: string): Promise<EpisodeCollectionApi> => {
  const url = `${episodesURLbase}?page=${pageNumber}&name=${name}`;
  const { data } = await Axios.get<EpisodeCollectionApi>(url);
  return data;
};


