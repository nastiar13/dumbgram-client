import React from 'react';

function EditProfile() {
  return (
    <div className="edit_profile">
      <h1 className="h1_content_title">Edit Profile</h1>
      <div className="edit_profile_content">
        <input hidden type="file" name="profile_picture" id="profile_picture" />
        <label className="btnRainbow btn18" htmlFor="profile_picture">
          Upload Photos
        </label>
        <input type="text" className="input" placeholder="Name" />
        <input type="text" className="input" placeholder="Username" />
        <textarea
          className="textarea"
          cols="30"
          rows="6"
          placeholder="Bio"
        ></textarea>
        <button
          style={{ padding: '7px 3rem', float: 'right' }}
          className="btnRainbow btn18"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
