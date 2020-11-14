export interface EpisodeCollectionApi {
  info: {
    pages: number;
  };
  results: EpisodeApi[];
}

export interface EpisodeApi {
  id: number;
  name: string;
  air_date: Date;
  episode: string;  
}