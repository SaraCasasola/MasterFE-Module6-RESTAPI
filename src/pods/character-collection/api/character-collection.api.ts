import Axios from 'axios'
import { CharacterCollectionApi } from './character-collection.api-model';

const charactersURLbase = 'https://rickandmortyapi.com/api/character/';

export const getCharacterCollection = async (pageNumber: number, name?: string): Promise<CharacterCollectionApi> => {
  const url = name ? `${charactersURLbase}?page=${pageNumber}&name=${name}` : `${charactersURLbase}?page=${pageNumber}`;
  const { data } = await Axios.get<CharacterCollectionApi>(url);
  return data;
};

