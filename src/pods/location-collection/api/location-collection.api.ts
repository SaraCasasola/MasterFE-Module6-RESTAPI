import Axios from 'axios'
import { LocationCollectionApi } from './location-collection.api-model';

const locationsURLbase = 'https://rickandmortyapi.com/api/location/';

export const getLocationCollection = async (pageNumber: number): Promise<LocationCollectionApi> => {
  const url = `${locationsURLbase}?page=${pageNumber}`;
  const { data } = await Axios.get<LocationCollectionApi>(url);
  return data;
};

export const getLocationCollectionFilteredByName = async (pageNumber: number, name: string): Promise<LocationCollectionApi> => {
  const url = `${locationsURLbase}?page=${pageNumber}&name=${name}`;
  const { data } = await Axios.get<LocationCollectionApi>(url);
  return data;
};


