import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import * as api from './api';
import { Episode } from './episode.vm';
import { mapEpisodeFromApiToVm } from './episode.mappers';
import { EpisodeComponent } from './episode.component';
import { LinearProgress, Button } from '@material-ui/core';
import * as classes from './episode.styles';

export const EpisodeContainer: React.FunctionComponent = (props) => {
  const [episode, setEpisode] = React.useState<Episode>(null);
  const { id } = useParams();  
  const history = useHistory();

  const handleLoadEpisode = async () => {
    const apiEpisode = await api.getEpisode(id);
    const mappedEpisode = await mapEpisodeFromApiToVm(apiEpisode);
    setEpisode(mappedEpisode);
  };  

  const handleGoBack = () => {
    history.push(linkRoutes.episodeCollection);
  };
  
  React.useEffect(() => {
    handleLoadEpisode();
  }, []);

  return <>  
    {episode ? 
      <EpisodeComponent episode={episode}/> 
    : <LinearProgress/>}
    <Button variant="contained" className={classes.goBackButton} onClick={handleGoBack}>Go back</Button>
  </>;
};
