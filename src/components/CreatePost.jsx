import React, { useRef, useState } from 'react';
import { API } from '../config/api';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router';

function CreatePost() {
  const history = useHistory();
  const mediaRef = useRef(null);
  const captionRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.set('media', mediaRef.current.files[0]);
      formData.set('caption', captionRef.current.value);
      await API.post('/feed', formData);
      setFailed(false);
      setSuccess(true);
      setTimeout(() => {
        history.push('/');
      }, 1300);
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setFailed(true);
    }
  };
  return (
    <div className="edit_profile">
      {success && (
        <Alert
          style={{ display: 'block', textAlign: 'center' }}
          variant="success"
        >
          Success Uploading your Post, Redirecting...
        </Alert>
      )}
      {failed && (
        <Alert
          style={{ display: 'block', textAlign: 'center' }}
          variant="danger"
        >
          Failed to Upload your Post, make sure you already select the media
        </Alert>
      )}
      <h1 className="h1_content_title">Create Post</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="edit_profile_content">
        <input
          ref={mediaRef}
          hidden
          type="file"
          name="profile_picture"
          id="profile_picture"
        />
        <label className="btnRainbow btn18" htmlFor="profile_picture">
          Upload Photos or Videos
        </label>

        <textarea
          ref={captionRef}
          className="textarea"
          cols="30"
          rows="6"
          placeholder="Caption"
          spellCheck="false"
        ></textarea>
        <button
          style={{ padding: '7px 3rem', float: 'right' }}
          className="btnRainbow btn18"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
