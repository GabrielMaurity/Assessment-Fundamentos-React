// PostList.js
import React, { useEffect, useState } from 'react';
import FetchData from './FetchData';
import '../Styles/PostList.css'; 

const PostList = ({ userId, onSelectPost, isGridView }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    FetchData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, setPosts);
  }, [userId]);

  return (
    <div className={isGridView ? 'post-grid' : 'post-list'}> 
      <h2>Posts</h2>
      {posts.map(post => (
        <div 
          key={post.id} 
          className="post-card" 
          onClick={() => onSelectPost(post)}
        >
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default PostList;
