// CommentList.js
import React, { useEffect, useState } from 'react';
import FetchData from './FetchData';
import '../Styles/CommentList.css'; 

const CommentList = ({ postId, isGridView }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    FetchData(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, setComments);
  }, [postId]);

  const formatEmail = (email) => {
    const username = email.split('@')[0];
    return `@${username}`;
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Você tem certeza que deseja excluir este comentário?");
    if (confirmDelete) {
      setComments(prevComments => prevComments.filter(comment => comment.id !== id));
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <div className={isGridView ? 'comment-grid' : 'comment-list'}> 
        {comments.map(comment => (
          <div className="comment-card" key={comment.id}>
            <p>{comment.body}</p>
            <small>By: {formatEmail(comment.email)}</small>
            <button 
              onClick={() => handleDelete(comment.id)} 
              className="delete-button"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
