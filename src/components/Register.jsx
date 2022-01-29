import { Modal, Alert } from 'react-bootstrap';
import { useRef, useState } from 'react';
import style from './Login.module.css';
import { API } from '../config/api';

function Register(props) {
  const [alert, setAlert] = useState(false);
  const [dupAlert, setDupAlert] = useState(false);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    try {
      e.preventDefault();
      await API.post('register', {
        email: emailRef.current.value,
        name: nameRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      setDupAlert(false);
      setAlert(true);
      setTimeout(() => {
        props.here();
      }, 1000);
    } catch (error) {
      setDupAlert(true);
      setAlert(false);
    }
  };
  return (
    <Modal
      className={style.modalContainer}
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={(style.modalHeader, style.modal)}>
        <h2 className={style.title}>Register</h2>
      </Modal.Header>
      <Modal.Body className={(style.modalBody, style.modal)}>
        {alert && (
          <Alert
            style={{ display: 'block', textAlign: 'center' }}
            variant="success"
          >
            User Registration successful! Please wait to Login!
          </Alert>
        )}
        {dupAlert && (
          <Alert
            style={{ display: 'block', textAlign: 'center' }}
            variant="danger"
          >
            Your Email is already registered!
          </Alert>
        )}
        <form onSubmit={(e) => register(e)}>
          <input
            ref={emailRef}
            className={style.input}
            type="text"
            placeholder="Email"
            required
          />
          <input
            ref={nameRef}
            className={style.input}
            type="text"
            placeholder="Name"
            required
          />
          <input
            ref={usernameRef}
            className={style.input}
            type="text"
            placeholder="Username"
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
            Register
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer
        style={{ display: 'flex', justifyContent: 'center', paddingTop: 0 }}
        className={style.modal}
      >
        <p style={{ color: '#B1B1B1', textAlign: 'center' }}>
          Already have an account ? Click{' '}
          <span onClick={props.here} className={style.link}>
            here!
          </span>
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default Register;
