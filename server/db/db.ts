import crypto from 'crypto';
import { createDefaultComment } from './mock-data';
import { Comment } from './models';
import * as fs from 'fs';
import * as path from 'path';

const mockFileName = 'mocks.json' ;

export const getComment = async (characterId: number): Promise<Comment> => {
    const rawdata = fs.readFileSync(path.join(__dirname, mockFileName ), 'utf8');
    const mockComments = JSON.parse(rawdata.toString()).comments;
    const comment = mockComments.find((comment) => comment.characterId == characterId);
    return comment ? comment : createDefaultComment();
}

export const insertComment = async (commentToInsert: Comment) => {
  const newId = crypto.randomBytes(16).toString('hex');
  const rawdata = fs.readFileSync(path.join(__dirname, mockFileName ), 'utf8');
  let mockComments = rawdata?.toString().length > 0 ? JSON.parse(rawdata.toString()).comments : [];
  mockComments = [
    ...mockComments,
    {
      ...createDefaultComment(),
      ...commentToInsert,
      id: newId,
    },
  ];
  const json = JSON.stringify({ comments: mockComments});
  fs.writeFileSync(path.join(__dirname, mockFileName ), json);
  return newId;
};

export const updateComment = async (commentToEdit: Comment): Promise<boolean> => {
  const newId = crypto.randomBytes(16).toString('hex');
  const rawdata = fs.readFileSync(path.join(__dirname, mockFileName ), 'utf8');
  let mockComments = JSON.parse(rawdata.toString()).comments;
  mockComments = mockComments.map((comment) =>
  comment.id === commentToEdit.id
    ? {
        ...comment,
        ...commentToEdit,
      }
    : comment
  );
  const json = JSON.stringify({ comments: mockComments});
  fs.writeFileSync(path.join(__dirname, mockFileName ), json);

  return true;
};