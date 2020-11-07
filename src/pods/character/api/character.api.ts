import Axios from 'axios'
import { CharacterApi } from './character.api-model';

const getCharacterURLbase = 'https://rickandmortyapi.com/api/character/';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const { data } = await Axios.get<CharacterApi>(`${getCharacterURLbase}${id}`);
  return data;
};