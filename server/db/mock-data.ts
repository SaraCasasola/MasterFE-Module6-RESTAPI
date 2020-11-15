import { Comment } from './models';

export const createDefaultComment = (): Comment => ({
  id: null,
  characterId: null,
  comment: null
});
