import * as React from 'react';
import { LocationEntityVm } from './location-collection.vm';
import { LocationCard } from './components/location-card.component';
import * as classes from './location-collection.styles';

interface Props {
  locationCollection: LocationEntityVm[];
}

export const LocationCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { locationCollection } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {locationCollection.map((location) => (
          <li key={location.id}>
            <LocationCard location={location}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
