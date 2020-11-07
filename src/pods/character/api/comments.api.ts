import Axios from 'axios'
import { CommentsApi } from './comments.api-model';

const getCharacterURLbase = 'http://localhost:3080/comments';

export const getComments = async (id: string): Promise<CommentsApi> => {
  const { data } = await Axios.get<CommentsApi>(`${getCharacterURLbase}?characterId=${id}`);
  return data;
};