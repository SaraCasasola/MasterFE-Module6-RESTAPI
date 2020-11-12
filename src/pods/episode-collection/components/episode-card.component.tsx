import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { EpisodeEntityVm } from '../episode-collection.vm';
import { Card, CardHeader, CardContent, List, ListItem, ListItemText } from '@material-ui/core';

import * as classes from './episode-card.styles';

interface Props {
  episode: EpisodeEntityVm;
}

export const EpisodeCard: React.FunctionComponent<Props> = (props) => {
  const { episode } = props;  
  const history = useHistory();

  const handleGoCardInfo = () => {
    history.push(linkRoutes.episode(episode.id));
  };

  return (
    <Card className={classes.card} onClick={handleGoCardInfo}>
      <CardHeader        
        title={episode.name}
      />
      <CardContent>
        <List>
          <ListItem>
            <h4 className={classes.title}>Air Date</h4>
            <ListItemText primary={episode.air_date}/>
          </ListItem>
          <ListItem>
            <h4 className={classes.title}>Episode</h4>
            <ListItemText primary={episode.episode}/>
          </ListItem>          
        </List>
      </CardContent>      
    </Card>
  );
};
