import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  character: string;
  episodeCollection: string;
  episode: string;
  locationCollection: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  character: '/character/:id',
  episodeCollection: '/episodes',
  episode: '/episode/:id',
  locationCollection: '/locations'
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'character'|'episode'> {
  character: NavigationFunction;
  episode: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  character: (id) => generatePath(switchRoutes.character, { id }),
  episode: (id) => generatePath(switchRoutes.episode, { id })
};
