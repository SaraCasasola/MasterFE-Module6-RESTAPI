import * as React from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar, 
  Toolbar, 
  IconButton, 
  Menu,
  MenuItem,
  Fade
} from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import * as classes from './app.layout.styles';
import { linkRoutes } from 'core/router';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const [menu, setMenu] = React.useState<null | HTMLElement>(null);
  const open = Boolean(menu);
  const history = useHistory();

  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };

  const handleGoTo = (route: string) => {
    history.push(route);
    handleClose();
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">               
            <IconButton
              aria-label="more"
              aria-controls="menu"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClickMenu}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={menu}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => handleGoTo(linkRoutes.characterCollection)}>Characters</MenuItem>
              <MenuItem onClick={() => handleGoTo(linkRoutes.locationCollection)}>Locations</MenuItem>
              <MenuItem onClick={() => handleGoTo(linkRoutes.episodeCollection)}>Episodes</MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
