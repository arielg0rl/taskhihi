import './App.scss';
import React, { useState, useEffect } from 'react';
import { NewComment } from './components/NewComment';
import { CommentsList } from './components/CommentsList';
import { getComments } from './api';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then(loadedComments => setComments(loadedComments))
  }, []);



  return (
    <div className="App">
      <div className="App-wrapper">
        <div>Home</div>
        <NewComment />
        <CommentsList comments={comments} />
      </div>

    </div>
  );
}

export default App;
