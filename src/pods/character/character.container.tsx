import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import * as api from './api';
import { Character, Comment } from './character.vm';
import { mapCharacterFromApiToVm, mapCommentsFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';
import { LinearProgress, Button, List, ListItem, ListItemText } from '@material-ui/core';
import * as classes from './character.styles';
import { mapToCollection } from 'common/mappers';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(null);
  const [comments, setComments] = React.useState<Comment[]>([]);
  const { id } = useParams();  
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  const handleLoadComments = async () => {
    const apiComments = await api.getComments(id);
    setComments(mapToCollection(apiComments[0].comments, mapCommentsFromApiToVm));
  };

  const handleGoBack = () => {
    history.push(linkRoutes.characterCollection);
  };

  React.useEffect(() => {
    handleLoadCharacter();
    handleLoadComments();
  }, []);

  return <>  
    {character ? 
    <>
      <CharacterComponent character={character}/> 
      <List>
        { comments.map((comment) => {
            return <ListItem>
              <ListItemText primary={comment.comment}/>
            </ListItem>;
          })
        }   
      </List>
    </>: <LinearProgress/>}
    <Button variant="contained" className={classes.goBackButton} onClick={handleGoBack}>Go back</Button>
  </>;
};
