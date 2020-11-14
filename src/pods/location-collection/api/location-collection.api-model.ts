export interface LocationCollectionApi {
  info: {
    pages: number;
  };
  results: LocationApi[];
}

export interface LocationApi {
  id: number;
  name: string;
  type: string;º
  dimension: string;
}