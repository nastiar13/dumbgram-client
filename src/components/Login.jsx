import React, { useContext, useRef } from 'react';
import { Modal, Alert } from 'react-bootstrap';
import { useState } from 'react';
import style from './Login.module.css';
import { API } from '../config/api';
import { UserContext } from '../context/userContext';

function Login(props) {
  const [state, dispatch] = useContext(UserContext);
  const [errorPass, setErrorPass] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function login(e) {
    e.preventDefault();
    try {
      const response = await API.post('/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      setTimeout(() => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data.user,
          token: response.data.token,
        });
      }, 1000);
      setErrorPass(false);
      setLoginSuccess(true);
    } catch (error) {
      setLoginSuccess(false);
      setErrorPass(true);
      console.log(error);
    }
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdropClassName="modalContainer"
    >
      <Modal.Header className={(style.modalHeader, style.modal)}>
        <h2 className={style.title}>Login</h2>
      </Modal.Header>
      <Modal.Body className={(style.modalBody, style.modal)}>
        {errorPass && (
          <Alert style={{ display: 'block' }} variant="danger">
            Email or password is wrong!
          </Alert>
        )}
        {loginSuccess && (
          <Alert style={{ display: 'block' }} variant="success">
            Login Success, please wait!
          </Alert>
        )}
        <form onSubmit={(e) => login(e)}>
          <input
            ref={emailRef}
            className={style.input}
            type="email"
            placeholder="Email"
            required
          />
          <input
            ref={passwordRef}
            className={style.input}
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" className={style.btnSubmit}>
            Login
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer
        style={{ display: 'flex', justifyContent: 'center', paddingTop: 0 }}
        className={style.modal}
      >
        <p style={{ color: '#B1B1B1', textAlign: 'center' }}>
          Don't have an account ? Click{' '}
          <span onClick={props.here} className={style.link}>
            here!
          </span>
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default Login;
