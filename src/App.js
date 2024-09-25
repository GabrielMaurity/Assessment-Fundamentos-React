// App.js
import React, { useState } from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList';
import CommentList from './components/CommentList';
import Navbar from './components/Navbar';
import './App.css';
import gridImage from './assets/grid_view_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png';  // Importando a imagem de grade
import listImage from './assets/list_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png';  // Importando a imagem de lista

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [isGridView, setIsGridView] = useState(true); // Estado para controlar o layout

  const goToHome = () => {
    setSelectedUser(null);
    setSelectedPost(null);
  };

  const toggleLayout = () => {
    setIsGridView(prevState => !prevState); // Alterna entre grid e lista
  };

  return (
    <div className="App">
      <header>
        <Navbar goToHome={goToHome} />
      </header>

      <main>
        <button onClick={toggleLayout} className="toggle-button">
          <img src={isGridView ? gridImage : listImage} alt={isGridView ? 'Grid View' : 'List View'} style={{ width: '24px', height: '24px' }} />
        </button>

        {!selectedUser && <UserList onSelectUser={setSelectedUser} isGridView={isGridView} />}

        {selectedUser && !selectedPost && (
          <PostList userId={selectedUser.id} onSelectPost={setSelectedPost} isGridView={isGridView} />
        )}

        {selectedPost && <CommentList postId={selectedPost.id} isGridView={isGridView} />}
      </main>

      <footer>
        <p>© 2024 My Data Viewer App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
