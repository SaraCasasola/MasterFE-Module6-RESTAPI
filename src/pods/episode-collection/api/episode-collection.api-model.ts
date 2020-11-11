export interface EpisodeCollectionApi {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: EpisodeApi[];
}

export interface EpisodeApi {
  id: number;
  name: string;
  air_date: Date;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}