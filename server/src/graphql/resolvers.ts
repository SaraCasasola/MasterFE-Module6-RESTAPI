import { Comment, getComment, updateComment, insertComment } from '../../db';

interface SaveCommentArgs { 
  comment: Comment;
}

export const resolvers = {
  Query: {
    comment: async (parent, args): Promise<Comment> => await getComment(args.characterId)
  },
  Mutation: {
    saveComment: async (parent, args: SaveCommentArgs): Promise<Comment> => {
      if(args.comment.id) await updateComment(args.comment);
      else insertComment(args.comment);
      return args.comment;
    }
  }
}