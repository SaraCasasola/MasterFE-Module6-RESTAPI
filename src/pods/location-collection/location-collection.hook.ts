import * as React from 'react';
import { LocationEntityVm } from './location-collection.vm';
import { getLocationCollection, LocationCollectionApi } from './api';
import { mapFromApiToVm } from './location-collection.mapper';
import { mapToCollection } from 'common/mappers';

export let totalPagesNumber: number;

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<LocationEntityVm[]>([]);  

  const loadLocationCollection = (pageNumber: number, name?: string) => {
    getLocationCollection(pageNumber, name).then((location: LocationCollectionApi) => {
      totalPagesNumber = location.info.pages;
      setLocationCollection(mapToCollection(location.results, mapFromApiToVm));
    }).catch(() => {
      totalPagesNumber = 0;
      setLocationCollection([]);
    });
  };

  return { locationCollection, loadLocationCollection };
};
