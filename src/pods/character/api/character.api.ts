import Axios, { AxiosResponse } from 'axios';
import { CharacterApi } from './character.api-model';

const characterURLbase = 'https://rickandmortyapi.com/api/character/';

export const getCharacter = (id: string): Promise<AxiosResponse<CharacterApi>> => {
  return Axios.get<CharacterApi>(`${characterURLbase}${id}`);
};