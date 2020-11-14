import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection, getCharacterCollectionFilteredByName, CharacterCollectionApi } from './api';
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
    }).catch(() => resetCollection());
  };

  const loadCharacterCollectionFilteredByName = (pageNumber: number, name: string) => {
    getCharacterCollectionFilteredByName(pageNumber, name).then((characters: CharacterCollectionApi) => {
      totalPagesNumber = characters.info.pages;
      setCharacterCollection(mapToCollection(characters.results, mapFromApiToVm));
    }).catch(() => resetCollection());
  };

  const resetCollection = () => {
    totalPagesNumber = 0;
    setCharacterCollection([]);
  };

  return { characterCollection, loadCharacterCollection, loadCharacterCollectionFilteredByName };
};
