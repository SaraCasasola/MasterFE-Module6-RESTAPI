import Axios, { AxiosResponse } from 'axios';
import { EpisodeCollectionApi } from './episode-collection.api-model';

const episodesURLbase = 'https://rickandmortyapi.com/api/episode/';

export const getEpisodeCollection = (pageNumber: number): Promise<AxiosResponse<EpisodeCollectionApi>> => {
  const url = `${episodesURLbase}?page=${pageNumber}`;
  return Axios.get<EpisodeCollectionApi>(url);
};

export const getEpisodeCollectionFilteredByName = (pageNumber: number, name: string): Promise<AxiosResponse<EpisodeCollectionApi>> => {
  const url = `${episodesURLbase}?page=${pageNumber}&name=${name}`;
  return Axios.get<EpisodeCollectionApi>(url);
};


