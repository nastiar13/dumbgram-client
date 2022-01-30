import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../components/Navigation';
import UserPost from '../components/UserPost';
import UserProfile from '../components/UsersProfile';
import { API } from '../config/api';

export default function Users() {
  const [feed, setFeed] = useState(true);
  const [data, setData] = useState({
    user: {},
    posts: [],
    followers: [],
    following: [],
  });

  const { id } = useParams();
  const getPosts = async () => {
    try {
      setData({
        user: (await API.get('/user/' + id)).data.user,
        posts: (await API.get('/feeds/' + id)).data.posts,
        followers: await (await API.get('followers/' + id)).data.followers,
        following: await (await API.get('following/' + id)).data.following,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="body" style={{ display: 'flex' }}>
      <div className="profile">
        <UserProfile
          data={data.user}
          followers={data.followers?.length}
          following={data.following?.length}
          posts={data.posts.length}
          feed={feed}
          setFeed={(value) => setFeed(value)}
        />
      </div>
      <div className="vertical-line"></div>
      <div className="content">
        <Navigation />
        <UserPost data={data.posts} />
      </div>
    </div>
  );
}
