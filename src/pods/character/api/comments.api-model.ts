export interface CommentsApi {  
    characterId: number,
    comments: CommentApi[];    
}

export interface CommentApi {
  id: number;
  comment:string;
}
