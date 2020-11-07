import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection, CharacterCollectionApi } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = () => {
    getCharacterCollection().then((characters: CharacterCollectionApi) =>
      setCharacterCollection(mapToCollection(characters.results, mapFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection };
};
