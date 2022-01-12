import React, { useState } from 'react';
import { Comment } from './Comment';

export interface CommentType {
  "title": string,
  "text": string,
}

interface Props {
  comments: CommentType[];
}

export const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <div>
      {
        comments.map(comment => <Comment key={comment.title} comment={comment} />)
      }
    </div>
  )
}