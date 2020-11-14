import * as React from 'react';
import { LocationEntityVm } from './location-collection.vm';
import { getLocationCollection, getLocationCollectionFilteredByName, LocationCollectionApi } from './api';
import { mapFromApiToVm } from './location-collection.mapper';
import { mapToCollection } from 'common/mappers';

export let totalPagesNumber: number;

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<LocationEntityVm[]>([]);  

  const loadLocationCollection = (pageNumber: number) => {
    getLocationCollection(pageNumber).then((location: LocationCollectionApi) => {
      totalPagesNumber = location.info.pages;
      setLocationCollection(mapToCollection(location.results, mapFromApiToVm));
    }).catch(() => resetCollection());
  };

  const loadLocationCollectionFilteredByName = (pageNumber: number, name: string) => {
    getLocationCollectionFilteredByName(pageNumber, name).then((location: LocationCollectionApi) => {
      totalPagesNumber = location.info.pages;
      setLocationCollection(mapToCollection(location.results, mapFromApiToVm));
    }).catch(() => resetCollection());
  };

  const resetCollection = () => {
    totalPagesNumber = 0;
    setLocationCollection([]);
  };

  return { locationCollection, loadLocationCollection, loadLocationCollectionFilteredByName };
};
