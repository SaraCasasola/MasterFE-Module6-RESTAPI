import crypto from 'crypto';
import { createDefaultComment, mockComments } from './mock-data';
import { Comment } from './models';

let comments = [...mockComments];

export const getComment = async (characterId: number): Promise<Comment> => {
    const comment = comments.find((comment) => comment.characterId === characterId);
    return comment ? comment : createDefaultComment();
}

export const insertComment = async (commentToInsert: Comment) => {
  const newId = crypto.randomBytes(16).toString('hex');
  comments = [
    ...comments,
    {
      ...createDefaultComment(),
      ...commentToInsert,
      id: newId,
    },
  ];
  return newId;
};

export const updateComment = async (commentToEdit: Comment): Promise<boolean> => {
  comments = comments.map((comment) =>
    comment.id === commentToEdit.id
      ? {
          ...comment,
          ...commentToEdit,
        }
      : comment
  );

  return true;
};