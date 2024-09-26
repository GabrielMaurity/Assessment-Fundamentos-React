import React from 'react';
import '../Styles/UserCard.css'; 

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p><strong>Company Slogan:</strong> {user.company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;
