import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection, CharacterCollectionApi } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export let totalPagesNumber: number;

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );  

  const loadCharacterCollection = (pageNumber: number) => {
    getCharacterCollection(pageNumber).then((characters: CharacterCollectionApi) => {
      totalPagesNumber = characters.info.pages;
      setCharacterCollection(mapToCollection(characters.results, mapFromApiToVm));
    });
  };

  return { characterCollection, loadCharacterCollection };
};
