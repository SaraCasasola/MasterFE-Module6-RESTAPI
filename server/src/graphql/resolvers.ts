import { Comment, getComment } from '../../db';

export const resolvers = {
  Query: {
    comment: async (parent, args): Promise<Comment> => await getComment(args.characterId)
  }
}