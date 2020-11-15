import { gql } from  'graphql-request';
import { CommentApi } from './comment.api-model';
import { graphqlLocalClient } from 'core/api';

interface GetComment {
  comment: CommentApi;
}

interface SaveCommentResponse {
  commentUpdated: CommentApi;
}

export const getCommentByCharacterId = async (characterId: string): Promise<CommentApi> => {
  const query = gql`
    query {
      comment(characterId: ${characterId}) {       
        id
        characterId
        comment  
      }
    }
  `;
  
  const { comment } = await graphqlLocalClient.request<GetComment>(query);
  return comment;
};

export const addComment = async (comment: CommentApi): Promise<CommentApi> => {
  const query = gql`
    mutation($comment: CommentInput) {
      saveComment(comment: $comment)
    }
  `;
  
  const { commentUpdated } = await graphqlLocalClient.request<SaveCommentResponse>(query, {comment});
  return comment;
};

export const updateComment = async (comment: CommentApi): Promise<CommentApi> => {
  const query = gql`
    mutation($comment: CommentInput) {
      saveComment(comment: $comment)
    }
  `;
  
  const { commentUpdated } = await graphqlLocalClient.request<SaveCommentResponse>(query, {comment});
  return comment;
};