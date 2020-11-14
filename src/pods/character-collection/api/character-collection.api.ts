import Axios from 'axios'
import { CharacterCollectionApi } from './character-collection.api-model';

const charactersURLbase = 'https://rickandmortyapi.com/api/character/';

export const getCharacterCollection = async (pageNumber: number): Promise<CharacterCollectionApi> => {
  const url =  `${charactersURLbase}?page=${pageNumber}`;
  const { data } = await Axios.get<CharacterCollectionApi>(url);
  return data;
};

export const getCharacterCollectionFilteredByName = async (pageNumber: number, name: string): Promise<CharacterCollectionApi> => {
  const url = `${charactersURLbase}?page=${pageNumber}&name=${name}`;
  const { data } = await Axios.get<CharacterCollectionApi>(url);
  return data;
};

