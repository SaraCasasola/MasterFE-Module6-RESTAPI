import * as api from './api';
import * as viewModel from './episode.vm';

export const mapEpisodeFromApiToVm = async ( episode: api.EpisodeApi ): Promise<viewModel.Episode> => ({
    id: episode.id,
    name: episode.name,
    air_date: episode.air_date,
    episode: episode.episode,
    charactersNames: await api.getCharactersByEpisode(episode)
});
