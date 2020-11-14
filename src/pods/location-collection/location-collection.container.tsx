import * as React from 'react';
import { useLocationCollection, totalPagesNumber } from './location-collection.hook';
import { LocationCollectionComponent } from './location-collection.component';
import {
  Button,
  TextField
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import * as classes from './location-collection.styles';

export const LocationCollectionContainer = () => {
  const initialPageNumber = 1;
  const { locationCollection, loadLocationCollection, loadLocationCollectionFilteredByName } = useLocationCollection();
  const [ pageNumber, setPageNumber ] = React.useState<number>(initialPageNumber);
  const [ locationName, setLocationName] = React.useState<string>();
  const [ isFirstRendering, setIsFirstRendering] = React.useState<boolean>(true);
  let locationNameInputValue: string = locationName;

  React.useEffect(() => {
    loadLocations();
    setIsFirstRendering(false);
  }, [pageNumber]);

  React.useEffect(() => {
    if(pageNumber === initialPageNumber && !isFirstRendering) {
      loadLocations();
      return;
    }
    setPageNumber(initialPageNumber);
  }, [locationName]);

  const handleSearch = () => {
    setLocationName(locationNameInputValue);
  };

  const handleGoPrev = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleGoNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    locationNameInputValue = e.target.value;
  };

  const loadLocations = () => {
    if(locationName && locationName !== "") loadLocationCollectionFilteredByName(pageNumber, locationName);
    else loadLocationCollection(pageNumber);
  };

  return <>
        <div className={classes.search}> 
          <TextField label="Search location" onChange={handleTextFieldChange} className={classes.searchInput}/>
          <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
        </div>
        {locationCollection.length > 0 ?
          <>
            <LocationCollectionComponent
              locationCollection={locationCollection}
            />
            <div className={classes.pagination}> 
              <Button variant="contained" onClick={handleGoPrev} disabled={pageNumber === 1}>Prev</Button>
              <span>{pageNumber}/{totalPagesNumber}</span>
              <Button variant="contained" onClick={handleGoNext} disabled={pageNumber === totalPagesNumber}>Next</Button>
            </div>
          </>
          : 
          <Alert severity="warning">Sorry! We don't have any location with that name</Alert>
        }
      </>;      
};
