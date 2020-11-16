import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection, getCharacterCollectionFilteredByName } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export let totalPagesNumber: number;

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );  

  const loadCharacterCollection = async(pageNumber: number) => {
    try {
      const { data } = await getCharacterCollection(pageNumber);
      totalPagesNumber = data.info.pages;
      setCharacterCollection(mapToCollection(data.results, mapFromApiToVm));
    } catch(e) {
      resetCollection();
    }    
  };

  const loadCharacterCollectionFilteredByName = async(pageNumber: number, name: string) => {
    try {
      const { data } = await getCharacterCollectionFilteredByName(pageNumber, name);
      totalPagesNumber = data.info.pages;
      setCharacterCollection(mapToCollection(data.results, mapFromApiToVm));
    } catch(e) {
      resetCollection();
    }
  };

  const resetCollection = () => {
    totalPagesNumber = 0;
    setCharacterCollection([]);
  };

  return { characterCollection, loadCharacterCollection, loadCharacterCollectionFilteredByName };
};
