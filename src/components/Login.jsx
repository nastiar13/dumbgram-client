import React from 'react';
import { Modal, Alert } from 'react-bootstrap';
import { useState } from 'react';
import style from './Login.module.css';

function Login(props) {
  const [errorPass, setErrorPass] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
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
        <form>
          <input
            // ref={emailRef}
            className={style.input}
            type="email"
            placeholder="Email"
            required
          />
          <input
            // ref={passwordRef}
            className={style.input}
            type="password"
            placeholder="Password"
            required
          />
          <button className={style.btnSubmit}>Login</button>
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
