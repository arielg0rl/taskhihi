import React, { useState } from 'react';
import { Comment } from './Comment';

export interface CommentType {
  "userId": number,
  "id": number,
  "title": string,
  "body": string,
}

interface Props {
  comments: CommentType[];
}

export const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <div>
      {
        comments.map(comment => <Comment key={comment.id} comment={comment} />)
      }
    </div>
  )
}