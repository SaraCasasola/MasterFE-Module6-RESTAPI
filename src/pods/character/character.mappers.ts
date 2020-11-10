import * as characterApiModel from './api/character.api-model';
import * as commentsApiModel from './api/comment.api-model';
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

export const mapCommentFromApiToVm = (
  comment: commentsApiModel.CommentApi
): viewModel.Comment => ({
    id: comment?.id,
    comment: comment?.comment
});

export const mapCommentFromVmToApi = (
  comment: viewModel.Comment, characterId: number
): commentsApiModel.CommentApi => ({
    id: comment.id,
    characterId: characterId,
    comment: comment.comment
});