import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <img
        src={
          user.avatarURL.includes('gravatar')
            ? user.avatarURL
            : 'http://localhost:4400/' + user.avatarURL
        }
        alt="avatar"
        width={'50px'}
      />
      <Link to={'update'}>Update profile</Link>
    </div>
  );
};

export default Profile;
