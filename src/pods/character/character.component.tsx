import React from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography
} from '@material-ui/core';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const notInfo = "Unknown";

  return (
    <Card className={classes.card}>      
      <CardContent>
        <CardMedia
          className={classes.cardMedia}
          image={character.picture}
          title={character.name}
        />
        <Typography gutterBottom variant="h4" component="h1">
          {character.name}
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          Species: {character.species ? character.species : notInfo }
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          Status: {character.status ? character.status : notInfo }
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          Type: {character.type ? character.type : notInfo }
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          Gender: {character.gender ? character.gender : notInfo }
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          Origin: {character.origin ? character.origin : notInfo }
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          Location: {character.location ? character.location : notInfo }
        </Typography>
      </CardContent>      
    </Card>
  );
};
