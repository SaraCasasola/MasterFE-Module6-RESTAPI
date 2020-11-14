import * as React from 'react';
import { EpisodeEntityVm } from './episode-collection.vm';
import { getEpisodeCollection, getEpisodeCollectionFilteredByName, EpisodeCollectionApi } from './api';
import { mapFromApiToVm } from './episode-collection.mapper';
import { mapToCollection } from 'common/mappers';

export let totalPagesNumber: number;

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<EpisodeEntityVm[]>([]);  

  const loadEpisodeCollection = (pageNumber: number) => {
    getEpisodeCollection(pageNumber).then((episode: EpisodeCollectionApi) => {
      totalPagesNumber = episode.info.pages;
      setEpisodeCollection(mapToCollection(episode.results, mapFromApiToVm));
    }).catch(() => resetCollection());
  };

  const loadEpisodeCollectionFilteredByName = (pageNumber: number, name: string) => {
    getEpisodeCollectionFilteredByName(pageNumber, name).then((episode: EpisodeCollectionApi) => {
      totalPagesNumber = episode.info.pages;
      setEpisodeCollection(mapToCollection(episode.results, mapFromApiToVm));
    }).catch(() => resetCollection());
  };

  const resetCollection = () => {
    totalPagesNumber = 0;
    setEpisodeCollection([]);
  };

  return { episodeCollection, loadEpisodeCollection, loadEpisodeCollectionFilteredByName };
};
