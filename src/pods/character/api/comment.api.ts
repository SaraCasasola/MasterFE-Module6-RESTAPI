import Axios from 'axios'
import { CommentApi } from './comment.api-model';

const characterURLbase = 'http://localhost:3080/comments';

export const getCommentByCharacterId = async (id: string): Promise<CommentApi[]> => {
  const { data } = await Axios.get<CommentApi[]>(`${characterURLbase}?characterId=${id}`);
  return data;
};

export const addComment = async (comment: CommentApi): Promise<CommentApi> => {
  const { data } = await Axios.post<CommentApi>(characterURLbase, { characterId: comment.characterId, comment: comment.comment});
  return data;
};

export const updateComment = async (comment: CommentApi): Promise<CommentApi> => {
  const { data } = await Axios.put<CommentApi>(`${characterURLbase}/${comment.id}`, { characterId: comment.characterId, comment: comment.comment});
  return data;
};
