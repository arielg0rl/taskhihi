import './App.scss';
import React, { useState, useEffect } from 'react';
import { NewComment } from './components/NewComment';
import { CommentsList } from './components/CommentsList';
import { createStore } from 'redux';
import { CommentType } from './components/NewComment';
import { useDispatch, useSelector } from 'react-redux';
import store, { RootState } from './store/store';

function App() {
  const dispatch = useDispatch();
  const addComment = (comment: CommentType) => {
    dispatch({ type: 'ADD_COMMENT', title: comment.title, comment: comment.comment })
  }

  const comments = useSelector((state: RootState) => state.comments);

  return (
    <div className="App">
      <div className="App-wrapper">
        <NewComment addComment={addComment} />
        <CommentsList comments={comments} />
      </div>

    </div>
  );
}

export default App;
