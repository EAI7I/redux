import React from 'react';
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FetchedPosts from './components/FetchedPosts'


const App = () => {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Добавление поста</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Серверные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}


export default App;
