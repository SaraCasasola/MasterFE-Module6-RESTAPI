import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import * as api from './api';
import { Character, Comment } from './character.vm';
import { mapCharacterFromApiToVm, mapCommentFromApiToVm, mapCommentFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';
import { LinearProgress, Button } from '@material-ui/core';
import * as classes from './character.styles';
import { CommentComponent } from './comment.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(null);
  const [comment, setComment] = React.useState<Comment>({id: null, comment: ""});
  const { id } = useParams();  
  const history = useHistory();

  const handleLoadCharacter = async () => {
    try {
      const { data } = await api.getCharacter(id);
      setCharacter(mapCharacterFromApiToVm(data));
    } catch (e) {
      setCharacter(null);
    } 
  };

  const handleLoadComments = async () => {
    try {
      const { data } = await api.getCommentByCharacterId(id);
      setComment(mapCommentFromApiToVm(data[0]));
    } catch {
      setComment({id: null, comment: ""});
    }
  };

  const handleGoBack = () => {
    history.push(linkRoutes.characterCollection);
  };

  const handleSaveComment = (comment: Comment) => {
    if (comment.id) {
      updateComment(comment);
    } else {
      saveNewComment(comment);
    }
  };

  const updateComment = async(comment: Comment) => {
    try {
      const { data } = await api.updateComment(mapCommentFromVmToApi(comment, id));
      setComment(mapCommentFromApiToVm(data));
    } catch (e) {
      setComment({id: null, comment: ""});
    } 
  }

  const saveNewComment = async(comment: Comment) => {
    try {
      const { data } = await api.addComment(mapCommentFromVmToApi(comment, id));
      setComment(mapCommentFromApiToVm(data));
    } catch (e) {
      setComment({id: null, comment: ""});
    } 
  }

  React.useEffect(() => {
    handleLoadCharacter();
    handleLoadComments();
  }, []);

  return <>  
    {character ? 
    <>
      <CharacterComponent character={character}/> 
      <CommentComponent comment={comment} handleSaveComment={handleSaveComment}/>
    </>: <LinearProgress/>}
    <Button variant="contained" className={classes.goBackButton} onClick={handleGoBack}>Go back</Button>
  </>;
};
