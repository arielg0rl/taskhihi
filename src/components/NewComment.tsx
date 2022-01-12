import React, { useState, useEffect } from 'react';
import { createStore } from 'redux'

export interface CommentType {
    title: string,
    comment: string,
}

export interface Props {
    addComment: (comment: CommentType) => void;
}

export const NewComment: React.FC<Props> = ({ addComment }) => {
    const [newTitle, setNewTitle] = useState('')
    const [newComment, setNewComment] = useState('');

    const handleCommentInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment(event.target.value);
    }

    const handleTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.target.value);
    }

    const handleSending = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        addComment({ title: newTitle, comment: newComment })
        setNewTitle('');
        setNewComment('');
    }


    return (
        <div className="newComment">
            <input
                type="text"
                placeholder="title here"
                className="newTitle__input"
                value={newTitle}
                onChange={handleTitleInputChange}
            />
            <input
                placeholder="What's up?"
                className="newComment__input"
                type="text"
                value={newComment}
                onChange={handleCommentInputChange}
            />
            <div>
                <button className="newComment__button" type="submit" onClick={handleSending}>send</button>
            </div>
        </div>
    )

}