import Axios, { AxiosResponse } from 'axios';
import { CharacterCollectionApi } from './character-collection.api-model';

const charactersURLbase = 'https://rickandmortyapi.com/api/character/';

export const getCharacterCollection = (pageNumber: number): Promise<AxiosResponse<CharacterCollectionApi>> => {
  const url =  `${charactersURLbase}?page=${pageNumber}`;
  return Axios.get<CharacterCollectionApi>(url);
};

export const getCharacterCollectionFilteredByName = (pageNumber: number, name: string): Promise<AxiosResponse<CharacterCollectionApi>> => {
  const url = `${charactersURLbase}?page=${pageNumber}&name=${name}`;
  return Axios.get<CharacterCollectionApi>(url);
};

