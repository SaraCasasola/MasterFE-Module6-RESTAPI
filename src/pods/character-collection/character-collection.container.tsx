import * as React from 'react';
import { useCharacterCollection, totalPagesNumber } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import Button from '@material-ui/core/Button';
import * as classes from './character-collection.styles';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const [ pageNumber, setPageNumber ] = React.useState<number>(1);

  React.useEffect(() => {
    loadCharacterCollection(pageNumber);
  }, []);

  React.useEffect(() => {
    loadCharacterCollection(pageNumber);
  }, [pageNumber]);

  const handleGoPrev = () => {
    setPageNumber(pageNumber - 1);
  };
  const handleGoNext = () => {
    setPageNumber(pageNumber + 1);
  };

  return <>
    <CharacterCollectionComponent
      characterCollection={characterCollection}
    />
    <div className={classes.pagination}> 
      <Button variant="contained" onClick={handleGoPrev} disabled={pageNumber === 1}>Prev</Button>
      <span>{pageNumber}/{totalPagesNumber}</span>
      <Button variant="contained" onClick={handleGoNext} disabled={pageNumber === totalPagesNumber}>Next</Button>
    </div>
  </>;
};
