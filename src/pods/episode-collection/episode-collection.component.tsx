import * as React from 'react';
import { EpisodeEntityVm } from './episode-collection.vm';
import { EpisodeCard } from './components/episode-card.component';
import * as classes from './episode-collection.styles';

interface Props {
  episodeCollection: EpisodeEntityVm[];
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { episodeCollection } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {episodeCollection.map((episode) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
