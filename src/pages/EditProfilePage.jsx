import React from 'react';
import EditProfile from '../components/EditProfile';
import MyProfile from '../components/MyProfile';
import Navigation from '../components/Navigation';

function EditProfilePage() {
  return (
    <div className="body" style={{ display: 'flex' }}>
      <div className="profile">
        <MyProfile />
      </div>
      <div className="vertical-line"></div>
      <div className="content">
        <Navigation />
        <EditProfile />
      </div>
    </div>
  );
}

export default EditProfilePage;
