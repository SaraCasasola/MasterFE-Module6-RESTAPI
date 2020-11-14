import crypto from 'crypto';
import { createDefaultComment, mockComments } from './mock-data';
import { Comment } from './models';

let comments = [...mockComments];

export const getComment = async (characterId: number): Promise<Comment> => comments.find((comment) => comment.characterId === characterId);


// export const insertHotel = async (hotelEdit: HotelEdit) => {
//   const newId = crypto.randomBytes(16).toString('hex');
//   hotels = [
//     ...hotels,
//     {
//       ...createDefaultHotel(),
//       ...hotelEdit,
//       id: newId,
//     },
//   ];
//   return newId;
// };

// export const updateHotel = async (hotelEdit: HotelEdit): Promise<boolean> => {
//   hotels = hotels.map((h) =>
//     h.id === hotelEdit.id
//       ? {
//           ...h,
//           ...hotelEdit,
//         }
//       : h
//   );

//   return true;
// };