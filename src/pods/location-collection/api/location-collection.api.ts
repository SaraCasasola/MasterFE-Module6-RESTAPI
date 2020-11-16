import Axios, { AxiosResponse } from 'axios';
import { LocationCollectionApi } from './location-collection.api-model';

const locationsURLbase = 'https://rickandmortyapi.com/api/location/';

export const getLocationCollection = (pageNumber: number): Promise<AxiosResponse<LocationCollectionApi>> => {
  const url = `${locationsURLbase}?page=${pageNumber}`;
  return Axios.get<LocationCollectionApi>(url);
};

export const getLocationCollectionFilteredByName = (pageNumber: number, name: string): Promise<AxiosResponse<LocationCollectionApi>> => {
  const url = `${locationsURLbase}?page=${pageNumber}&name=${name}`;
  return Axios.get<LocationCollectionApi>(url);
};


