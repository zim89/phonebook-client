import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const ProfileUpdate = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setFile(e.target.files[0]);
  };
  const handleUpload = () => {
    dispatch(updateAvatar(file));
    navigate('/profile');
  };
  return (
    <div>
      <h2>Update Avatar</h2>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Update</button>
    </div>
  );
};

export default ProfileUpdate;
