import React, { useState } from 'react';

const Profile = ({ userType }) => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [danceStyle, setDanceStyle] = useState(''); // Only for teachers

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = userType === 'teacher' ? { name, bio, danceStyle } : { name, bio };
    console.log("Profile Data:", profileData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio"></textarea>
      {userType === 'teacher' && (
        <input type="text" value={danceStyle} onChange={(e) => setDanceStyle(e.target.value)} placeholder="Dance Style" />
      )}
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default Profile;
