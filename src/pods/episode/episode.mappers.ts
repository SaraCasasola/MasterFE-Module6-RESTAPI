import * as api from './api';
import * as viewModel from './episode.vm';

export const mapEpisodeFromApiToVm = ( episode: api.EpisodeApi ): viewModel.Episode => ({
    id: episode.id,
    name: episode.name,
    air_date: episode.air_date,
    episode: episode.episode,
    charactersNames: episode.characters.map(character => character.name)
});
