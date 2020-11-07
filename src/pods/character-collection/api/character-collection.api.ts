import Axios from 'axios'
import { CharacterCollectionApi } from './character-collection.api-model';

const getCharactersURL = 'https://rickandmortyapi.com/api/character/';

export const getCharacterCollection = async (): Promise<CharacterCollectionApi> => {
  const { data } = await Axios.get<CharacterCollectionApi>(getCharactersURL);
  return data;
};
