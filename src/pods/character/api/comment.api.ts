import { gql } from  'graphql-request';
import { CommentApi } from './comment.api-model';
import { graphqlLocalClient } from 'core/api';

interface GetComment {
  comment: CommentApi;
}

interface SaveCommentResponse {
  commentUpdated: CommentApi;
}

export const getCommentByCharacterId = (characterId: string): Promise<GetComment> => {
  const query = gql`
    query {
      comment(characterId: ${characterId}) {       
        id
        characterId
        comment  
      }
    }
  `;
  
  return graphqlLocalClient.request<GetComment>(query);
};

export const addComment = (comment: CommentApi): Promise<SaveCommentResponse> => {
  const query = gql`
    mutation($comment: CommentInput) {
      saveComment(comment: $comment)
    }
  `;
  
  return graphqlLocalClient.request<SaveCommentResponse>(query, {comment});
};

export const updateComment = (comment: CommentApi): Promise<SaveCommentResponse> => {
  const query = gql`
    mutation($comment: CommentInput) {
      saveComment(comment: $comment)
    }
  `;
  
  return graphqlLocalClient.request<SaveCommentResponse>(query, {comment});
};