import * as characterApiModel from './api/character.api-model';
import * as commentsApiModel from './api/comments.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: characterApiModel.CharacterApi
): viewModel.Character => ({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: character.origin.name,
    location: character.location.name,
    picture: character.image
});

export const mapCommentsFromApiToVm = (
  comment: commentsApiModel.CommentApi
): viewModel.Comment => ({
    id: comment.id,
    comment: comment.comment
});