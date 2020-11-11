import * as apiModel from './api/location-collection.api-model';
import * as viewModel from './location-collection.vm';

export const mapFromApiToVm = (
  location: apiModel.LocationApi
): viewModel.LocationEntityVm => ({
  id: location.id,
  name: location.name,
  dimension: location.dimension,
  type: location.type
});
