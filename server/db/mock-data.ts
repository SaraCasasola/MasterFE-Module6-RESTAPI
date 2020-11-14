import { Comment } from './models';

export const createDefaultComment = (): Comment => ({
  id: null,
  characterId: null,
  comment: null
});

export const mockComments: Comment[] = [
  {
    id: 1,
    characterId: 1,
    comment: "Hola"
  }
];