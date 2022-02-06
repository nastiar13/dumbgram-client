import React, { useContext, useEffect, useState } from 'react';
import EditProfile from '../components/EditProfile';
import MyProfile from '../components/MyProfile';
import Navigation from '../components/Navigation';
import { API } from '../config/api';
import { UserContext } from '../context/userContext';

function EditProfilePage() {
  const [state] = useContext(UserContext);
  const [userData, setUserData] = useState({
    post: [],
    following: [],
    followers: [],
  });
  const getUserData = async () => {
    try {
      const post = await API.get('/feeds/' + state.user.id);
      const following = await API.get('/following');
      const followers = await API.get('/followers');
      setUserData({
        post: post.data.posts,
        following: following.data.following,
        followers: followers.data.followers,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="body" style={{ display: 'flex' }}>
      <div className="profile">
        <MyProfile
          data={{
            post: userData.post.length,
            following: userData.following.length,
            followers: userData.followers.length,
          }}
        />
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
