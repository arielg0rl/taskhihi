import React, { useState, useEffect } from 'react';
import { postNewComment } from '../api';

export const NewComment = ({ }) => {
    const [newComment, setNewComment] = useState('');
    const [commentAdded, setCommentAdded] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment(event.target.value);
    }

    const handleSending = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();

        postNewComment(newComment).then(() => setCommentAdded(true))
    }


    return (
        <div className="newComment">
            <input
                placeholder="What's up?"
                className="newComment__input"
                type="text" value={newComment}
                onChange={handleInputChange}
            />
            <div className="newComment__buttons">
                <button>Add Media</button>
                <button type="submit" onClick={handleSending}>send</button>
            </div>
        </div>
    )

}