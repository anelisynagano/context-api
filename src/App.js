import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList';
import UserContextComponent from './contexts/UserContext';

function App() {
  return (
    <UserContextComponent>
      <UsersList />
    </UserContextComponent>

  );
}

export default App;
