import React from 'react';
import './UserCard.css'; // Import the CSS file

const UserCard = ({ user }) => {
  return (
    <div className="user-card"> {/* Add the 'user-card' class here */}
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard;
