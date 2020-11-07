import Axios from 'axios'
import { CharacterCollectionApi } from './character-collection.api-model';

const getCharactersURL = 'https://rickandmortyapi.com/api/character/?page=';

export const getCharacterCollection = async (pageNumber: number): Promise<CharacterCollectionApi> => {
  const { data } = await Axios.get<CharacterCollectionApi>(`${getCharactersURL}${pageNumber}`);
  return data;
};
