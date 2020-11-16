import * as React from 'react';
import { LocationEntityVm } from './location-collection.vm';
import { getLocationCollection, getLocationCollectionFilteredByName } from './api';
import { mapFromApiToVm } from './location-collection.mapper';
import { mapToCollection } from 'common/mappers';

export let totalPagesNumber: number;

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<LocationEntityVm[]>([]);  

  const loadLocationCollection = async (pageNumber: number) => {
    try {
      const { locations } = await getLocationCollection(pageNumber);
      totalPagesNumber = locations.info.pages;
      setLocationCollection(mapToCollection(locations.results, mapFromApiToVm));
    } catch(e) {
      resetCollection();
    }
  };

  const loadLocationCollectionFilteredByName = async (pageNumber: number, name: string) => {
    try {
      const { locations } = await getLocationCollectionFilteredByName(pageNumber, name);
      totalPagesNumber = locations.info.pages;
      setLocationCollection(mapToCollection(locations.results, mapFromApiToVm));
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
