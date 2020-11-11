import * as React from 'react';
import { useEpisodeCollection, totalPagesNumber } from './episode-collection.hook';
import { EpisodeCollectionComponent } from './episode-collection.component';
import {
  Button,
  TextField
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import * as classes from './episode-collection.styles';

export const EpisodeCollectionContainer = () => {
  const initialPageNumber = 1;
  const { episodeCollection, loadEpisodeCollection } = useEpisodeCollection();
  const [ pageNumber, setPageNumber ] = React.useState<number>(initialPageNumber);
  const [ episodeName, setEpisodeName] = React.useState<string>();
  let episodeNameInputValue: string = episodeName;

  React.useEffect(() => {
    loadEpisodeCollection(pageNumber);
  }, []);

  React.useEffect(() => {
    loadEpisodeCollection(pageNumber, episodeName);
  }, [pageNumber]);

  React.useEffect(() => {
    if(pageNumber === initialPageNumber) {
      loadEpisodeCollection(pageNumber, episodeName);
      return;
    }
    setPageNumber(initialPageNumber);
  }, [episodeName]);

  const handleSearch = () => {
    setEpisodeName(episodeNameInputValue);
  };

  const handleGoPrev = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleGoNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    episodeNameInputValue = e.target.value;
  };

  return <>
        <div className={classes.search}> 
          <TextField label="Search episode" onChange={handleTextFieldChange} className={classes.searchInput}/>
          <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
        </div>
        {episodeCollection.length > 0 ?
          <>
            <EpisodeCollectionComponent
              episodeCollection={episodeCollection}
            />
            <div className={classes.pagination}> 
              <Button variant="contained" onClick={handleGoPrev} disabled={pageNumber === 1}>Prev</Button>
              <span>{pageNumber}/{totalPagesNumber}</span>
              <Button variant="contained" onClick={handleGoNext} disabled={pageNumber === totalPagesNumber}>Next</Button>
            </div>
          </>
          : 
          <Alert severity="warning">Sorry! We don't have any episode with that name</Alert>
        }
      </>;      
};
