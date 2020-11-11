export interface LocationCollectionApi {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: LocationApi[];
}

export interface LocationApi {
  id: number;
  name: string;
  type: string;º
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}