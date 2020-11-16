import * as React from 'react';
import { LocationEntityVm } from './location-collection.vm';
import { getLocationCollection, getLocationCollectionFilteredByName, LocationCollectionApi } from './api';
import { mapFromApiToVm } from './location-collection.mapper';
import { mapToCollection } from 'common/mappers';

export let totalPagesNumber: number;

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<LocationEntityVm[]>([]);  

  const loadLocationCollection = async (pageNumber: number) => {
    try {
      const { data } = await getLocationCollection(pageNumber);
      totalPagesNumber = data.info.pages;
      setLocationCollection(mapToCollection(data.results, mapFromApiToVm));
    } catch(e) {
      resetCollection();
    }
  };

  const loadLocationCollectionFilteredByName = async (pageNumber: number, name: string) => {
    try {
      const { data } = await getLocationCollectionFilteredByName(pageNumber, name);
      totalPagesNumber = data.info.pages;
      setLocationCollection(mapToCollection(data.results, mapFromApiToVm));
    } catch(e) {
      resetCollection();
    }
  };

  const resetCollection = () => {
    totalPagesNumber = 0;
    setLocationCollection([]);
  };

  return { locationCollection, loadLocationCollection, loadLocationCollectionFilteredByName };
};
