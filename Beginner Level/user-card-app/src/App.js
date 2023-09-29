import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
  }
`;

const UserCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar fetchUsers={fetchUsers} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <UserCardGrid>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </UserCardGrid>
      )}
    </div>
  );
}

export default App;
