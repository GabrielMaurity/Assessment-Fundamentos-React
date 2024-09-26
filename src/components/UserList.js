import React, { useEffect, useState } from 'react';
import FetchData from './FetchData';
import UserCard from './UserCard'; 

const UserList = ({ onSelectUser, isGridView }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    FetchData('https://jsonplaceholder.typicode.com/users', setUsers);
  }, []);

  return (
    <div className={isGridView ? 'user-grid' : 'user-list'}>
      {users.map(user => (
        <div key={user.id} onClick={() => onSelectUser(user)}>
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
