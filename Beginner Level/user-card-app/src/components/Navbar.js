import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white; /* Change the color to your preferred special color */
`;

const Button = styled.button`
  background-color: #0074d9;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3; /* Change the hover color to your preferred special color */
  }
`;

const Navbar = ({ fetchUsers }) => {
  return (
    <Nav>
      <Brand>Satvik Screen</Brand>
      <Button onClick={fetchUsers}>Get Users</Button>
    </Nav>
  );
};

export default Navbar;
