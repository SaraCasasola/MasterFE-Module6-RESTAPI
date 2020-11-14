export interface CharacterCollectionApi {
  info: {
    pages: number;
  };
  results: CharacterApi[];
}
export interface CharacterApi {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;   
}
