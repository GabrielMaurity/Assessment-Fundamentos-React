import React from 'react';
import './Post.css'; // Estilos do Post

const Post = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
