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
      const { data } = await getEpisodeCollection(pageNumber);
      totalPagesNumber = data.info.pages;
      setEpisodeCollection(mapToCollection(data.results, mapFromApiToVm));
    } catch(e) {
      resetCollection();
    }
  };

  const loadEpisodeCollectionFilteredByName = async (pageNumber: number, name: string) => {
    try {
      const { data } = await getEpisodeCollectionFilteredByName(pageNumber, name);
      totalPagesNumber = data.info.pages;
      setEpisodeCollection(mapToCollection(data.results, mapFromApiToVm));
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
