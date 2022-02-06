import React, { useContext, useRef, useState } from 'react';
import { API } from '../config/api';
import { UserContext } from '../context/userContext';

function EditProfile() {
  const [state, dispatch] = useContext(UserContext);
  const photoRef = useRef(null);
  const [data, setData] = useState({
    name: state.user.name,
    username: state.user.username,
    description: state.user.bio,
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name.toLowerCase()]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let response;
      if (photoRef.current.files[0]) {
        const formData = new FormData();
        formData.set('media', photoRef.current.files[0]);
        formData.set('name', data.name);
        formData.set('username', data.username);
        formData.set('description', data.description);
        response = await API.patch('/user-img', formData);
      } else {
        response = await API.patch('/user', { ...data });
      }
      dispatch({
        type: 'CHECK_AUTH',
        payload: response.data.new_data,
      });
    } catch (error) {}
  };
  return (
    <div className="edit_profile">
      <h1 className="h1_content_title">Edit Profile</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="edit_profile_content">
        <input
          ref={photoRef}
          hidden
          type="file"
          name="profile_picture"
          id="profile_picture"
        />
        <label className="btnRainbow btn18" htmlFor="profile_picture">
          Upload Photos
        </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          className="input"
          value={data.name}
          name="name"
          placeholder="Name"
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          className="input"
          value={data.username}
          name="username"
          placeholder="Username"
        />
        <textarea
          onChange={(e) => handleChange(e)}
          className="textarea"
          cols="30"
          rows="6"
          value={data.description !== 'null' ? data.description : ''}
          name="description"
          placeholder="Bio"
          spellCheck="false"
        ></textarea>
        <button
          type="submit"
          style={{ padding: '7px 3rem', float: 'right' }}
          className="btnRainbow btn18"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
