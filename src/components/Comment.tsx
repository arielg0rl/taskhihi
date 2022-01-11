import React, { DOMAttributes, MouseEventHandler, useState } from 'react';
import heart from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';

export interface CommentType {
    "userId": number,
    "id": number,
    "title": string,
    "body": string,
}

interface Props {
    comment: CommentType;
}

export const Comment: React.FC<Props> = ({ comment }) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    }

    return (
        <div className="Comment">
            <div>{comment.title}</div>
            <div className="Comment__body">{comment.body}</div>
            <div className="Comment__like-button-wrapper" onClick={handleLike}>
                {
                    liked ?
                        <img className="Comment__like-button" src={heartSolid} alt="like button" />
                        :
                        <img className="Comment__like-button" src={heart} alt="like button" />
                }
            </div>

        </div>

    )
}