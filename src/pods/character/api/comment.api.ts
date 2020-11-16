import Axios, { AxiosResponse } from 'axios';
import { CommentApi } from './comment.api-model';

const characterURLbase = 'http://localhost:3080/comments';

export const getCommentByCharacterId = (id: string): Promise<AxiosResponse<CommentApi[]>> => {
  return Axios.get<CommentApi[]>(`${characterURLbase}?characterId=${id}`);
};

export const addComment = (comment: CommentApi): Promise<AxiosResponse<CommentApi>> => {
  return Axios.post<CommentApi>(characterURLbase, { characterId: comment.characterId, comment: comment.comment});
};

export const updateComment = (comment: CommentApi): Promise<AxiosResponse<CommentApi>> => {
  return Axios.put<CommentApi>(`${characterURLbase}/${comment.id}`, { characterId: comment.characterId, comment: comment.comment});
};
