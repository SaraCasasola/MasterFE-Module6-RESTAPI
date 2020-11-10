import * as React from 'react';
import { useCharacterCollection, totalPagesNumber } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import {
  Button,
  TextField
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import * as classes from './character-collection.styles';

export const CharacterCollectionContainer = () => {
  const initialPageNumber = 1;
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const [ pageNumber, setPageNumber ] = React.useState<number>(initialPageNumber);
  const [ characterName, setCharacterName] = React.useState<string>();
  let characterNameInputValue: string = characterName;

  React.useEffect(() => {
    loadCharacterCollection(pageNumber);
  }, []);

  React.useEffect(() => {
    loadCharacterCollection(pageNumber, characterName);
  }, [pageNumber]);

  React.useEffect(() => {
    if(pageNumber === initialPageNumber) {
      loadCharacterCollection(pageNumber, characterName);
      return;
    }
    setPageNumber(initialPageNumber);
  }, [characterName]);

  const handleSearch = () => {
    setCharacterName(characterNameInputValue);
  };

  const handleGoPrev = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleGoNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    characterNameInputValue = e.target.value;
  };

  return <>
        <div className={classes.search}> 
          <TextField label="Search character" onChange={handleTextFieldChange} className={classes.searchInput}/>
          <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
        </div>
        {characterCollection.length > 0 ?
          <>
            <CharacterCollectionComponent
              characterCollection={characterCollection}
            />
            <div className={classes.pagination}> 
              <Button variant="contained" onClick={handleGoPrev} disabled={pageNumber === 1}>Prev</Button>
              <span>{pageNumber}/{totalPagesNumber}</span>
              <Button variant="contained" onClick={handleGoNext} disabled={pageNumber === totalPagesNumber}>Next</Button>
            </div>
          </>
          : 
          <Alert severity="warning">Sorry! We don't have any character with that name</Alert>
        }
      </>;      
};
