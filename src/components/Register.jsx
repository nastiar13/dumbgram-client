import { Modal, Alert } from 'react-bootstrap';
import { useState } from 'react';
import style from './Login.module.css';

function Register(props) {
  const [alert, setAlert] = useState(false);
  const [dupAlert, setDupAlert] = useState(false);
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
        <form>
          <input
            // ref={emailRef}
            className={style.input}
            type="text"
            placeholder="Email"
            required
          />
          <input
            // ref={fullnameRef}
            className={style.input}
            type="text"
            placeholder="Name"
            required
          />
          <input
            // ref={fullnameRef}
            className={style.input}
            type="text"
            placeholder="Username"
            required
          />
          <input
            // ref={passwordRef}
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
