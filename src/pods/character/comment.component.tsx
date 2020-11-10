import React from 'react';
import { 
  List,
  ListItem,
  ListItemText,
  TextField,
  Button
} from '@material-ui/core';
import { Comment } from './character.vm';
import * as classes from './character.styles';

interface Props {
  comment: Comment;
  handleSaveComment: (comment: Comment) => void;
}

export const CommentComponent: React.FunctionComponent<Props> = (props) => {
  const { comment, handleSaveComment } = props;
  const [ editMode, setEditMode ] = React.useState<boolean>(false);
  const [ updateComment, setUpdateComment ] = React.useState<string>("");

  const onHandleEditComment = () => {
    setUpdateComment(comment.comment);
    setEditMode(true);
  };

  const onHandleSaveComment = () => {
    handleSaveComment({...comment, comment: updateComment});
    setEditMode(false);
  };

  const onHandleCancelComment = () => {
    setEditMode(false);
  };

  const characterHasComment = (): boolean => {
    return comment?.comment?.length > 0;
  }

  return ( editMode ? 
    <div className={classes.editModeContainer}> 
      <TextField
          label="Comment"
          multiline
          rows={4}
          variant="outlined"
          defaultValue={updateComment}
          className={classes.commentTextArea}
          onChange={(e) => setUpdateComment(e.target.value)}
      />
      <div className={classes.commentButtons}>
        <Button className={classes.commentButton} variant="contained" color="primary" onClick={() => onHandleSaveComment()}>Save</Button>
        <Button className={classes.commentButton} variant="contained" color="primary" onClick={() => onHandleCancelComment()}>Cancel</Button>
      </div>
    </div>
    :
    <List className={classes.commentsList}>
      <ListItem>
        <ListItemText className={classes.commentsTitle} primary="Comment"/>
        <Button variant="contained" size="small" color="primary" onClick={onHandleEditComment}>{characterHasComment() ? 'Edit ' : 'Add ' } Comment</Button>
      </ListItem>
      <ListItem>
        <ListItemText primary={comment.comment}/>
      </ListItem>        
    </List>
  );
};
