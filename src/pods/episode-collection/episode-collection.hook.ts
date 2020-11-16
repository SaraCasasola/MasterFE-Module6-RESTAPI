import * as React from 'react';
import { EpisodeEntityVm } from './episode-collection.vm';
import { getEpisodeCollection, getEpisodeCollectionFilteredByName } from './api';
import { mapFromApiToVm } from './episode-collection.mapper';
import { mapToCollection } from 'common/mappers';

export let totalPagesNumber: number;

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<EpisodeEntityVm[]>([]);  

  const loadEpisodeCollection = async (pageNumber: number) => {
    try {
      const { episodes } = await getEpisodeCollection(pageNumber);
      totalPagesNumber = episodes.info.pages;
      setEpisodeCollection(mapToCollection(episodes.results, mapFromApiToVm));
    } catch(e) {
      resetCollection();
    }
  };

  const loadEpisodeCollectionFilteredByName = async (pageNumber: number, name: string) => {
    try {
      const { episodes } = await getEpisodeCollectionFilteredByName(pageNumber, name);
      totalPagesNumber = episodes.info.pages;
      setEpisodeCollection(mapToCollection(episodes.results, mapFromApiToVm));
    } catch(e) {
      resetCollection();
    }
  };

  const resetCollection = () => {
    totalPagesNumber = 0;
    setEpisodeCollection([]);
  };

  return { episodeCollection, loadEpisodeCollection, loadEpisodeCollectionFilteredByName };
};
