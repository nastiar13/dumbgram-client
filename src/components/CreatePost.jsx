import React from 'react';

function CreatePost() {
  return (
    <div className="edit_profile">
      <h1 className="h1_content_title">Create Post</h1>
      <div className="edit_profile_content">
        <input hidden type="file" name="profile_picture" id="profile_picture" />
        <label className="btnRainbow btn18" htmlFor="profile_picture">
          Upload Photos or Videos
        </label>

        <textarea
          className="textarea"
          cols="30"
          rows="6"
          placeholder="Caption"
        ></textarea>
        <button
          style={{ padding: '7px 3rem', float: 'right' }}
          className="btnRainbow btn18"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
