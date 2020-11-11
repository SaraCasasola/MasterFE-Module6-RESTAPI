import Axios from 'axios'
import { LocationCollectionApi } from './location-collection.api-model';

const locationsURLbase = 'https://rickandmortyapi.com/api/location/';

export const getLocationCollection = async (pageNumber: number, name?: string): Promise<LocationCollectionApi> => {
  const url = name ? `${locationsURLbase}?page=${pageNumber}&name=${name}` : `${locationsURLbase}?page=${pageNumber}`;
  const { data } = await Axios.get<LocationCollectionApi>(url);
  return data;
};


