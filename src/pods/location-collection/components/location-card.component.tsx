import * as React from 'react';
import { LocationEntityVm } from '../location-collection.vm';
import { Card, CardHeader, CardContent, List, ListItem, ListItemText } from '@material-ui/core';
import * as classes from './location-card.styles';

interface Props {
  location: LocationEntityVm;
}

export const LocationCard: React.FunctionComponent<Props> = (props) => {
  const { location } = props;

  return (
    <Card>
      <CardHeader        
        title={location.name}
      />
      <CardContent>
        <List>
          <ListItem>
            <h4 className={classes.title}>Type</h4>
            <ListItemText primary={location.type}/>
          </ListItem>
          <ListItem>
            <h4 className={classes.title}>Dimension</h4>
            <ListItemText primary={location.dimension}/>
          </ListItem>          
        </List>
      </CardContent>      
    </Card>
  );
};
