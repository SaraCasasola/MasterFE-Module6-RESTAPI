import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography
} from '@material-ui/core';
import { Episode } from './episode.vm';
import * as classes from './episode.styles';

interface Props {
  episode: Episode;
}

export const EpisodeComponent: React.FunctionComponent<Props> = (props) => {
  const { episode } = props;

  return (
    <Card className={classes.card}>      
      <CardContent>
        <Typography gutterBottom variant="h6" component="h1">
          {episode.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          Episode: {episode.episode}
        </Typography> 
        <Typography variant="subtitle1" color="textSecondary" component="p">
          Air Date: {episode.air_date }
        </Typography> 
        <Typography variant="subtitle1" color="textSecondary" component="p">
          Characters: {episode.charactersNames.join(', ') }
        </Typography>        
      </CardContent>      
    </Card>
  );
};
