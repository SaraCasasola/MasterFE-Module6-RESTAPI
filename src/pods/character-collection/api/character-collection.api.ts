import Axios from 'axios'
import { CharacterCollectionApi } from './character-collection.api-model';

const getCharactersURLbase = 'https://rickandmortyapi.com/api/character/';

export const getCharacterCollection = async (pageNumber: number, name?: string): Promise<CharacterCollectionApi> => {
  const url = name ? `${getCharactersURLbase}?page=${pageNumber}&name=${name}` : `${getCharactersURLbase}?page=${pageNumber}`;
  const { data } = await Axios.get<CharacterCollectionApi>(url);
  return data;
};

