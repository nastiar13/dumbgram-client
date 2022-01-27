import React from 'react';
import Login from '../components/Login';
import { useState } from 'react';
import style from './LandingPage.module.css';
import Register from '../components/Register';
function LandingPage() {
  const [modalShow, setModalShow] = useState(false);
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const toRegister = () => {
    setModalRegisterShow(true);
    setModalShow(false);
  };
  const toLogin = () => {
    setModalShow(true);
    setModalRegisterShow(false);
  };
  return (
    <div className={'body'} style={{ padding: '5rem 7rem', display: 'flex' }}>
      <div className={style.left}>
        <h1 className={style.title}>Dumbgramb</h1>
        <h2 className={style.tagline}>
          Share your best
          <br />
          photos or videos
        </h2>
        <p className={style.text}>
          Join now, share your creations with another
          <br />
          people and enjoy other creations.
        </p>
        <div className="flexBtn">
          <button
            onClick={() => setModalShow(true)}
            className="btnRainbow"
            style={{ padding: '7px 2.6rem', marginRight: '1rem' }}
          >
            Login
          </button>
          <button
            onClick={() => setModalRegisterShow(true)}
            className={style.register}
          >
            Register
          </button>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.first}>
          <img className={style.image} src="/img/rectangle 6.png" alt="" />
          <img className={style.image} src="/img/rectangle 5.png" alt="" />
          <img className={style.image} src="/img/rectangle 10.png" alt="" />
        </div>
        <div className={style.second}>
          <img className={style.image} src="/img/rectangle 3.png" alt="" />
          <img className={style.image} src="/img/rectangle 9.png" alt="" />
        </div>
        <div className={style.third}>
          <img className={style.image} src="/img/rectangle 4.png" alt="" />
          <img className={style.image} src="/img/rectangle 8.png" alt="" />
          <img className={style.image} src="/img/rectangle 12.png" alt="" />
        </div>
      </div>

      <Login
        show={modalShow}
        onHide={() => setModalShow(false)}
        here={() => toRegister()}
      />
      <Register
        show={modalRegisterShow}
        onHide={() => setModalRegisterShow(false)}
        here={() => toLogin()}
      />
    </div>
  );
}

export default LandingPage;
