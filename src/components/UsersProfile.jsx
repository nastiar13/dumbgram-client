import React, { useRef } from 'react';
import style from './Profile.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

function UserProfile(props) {
  const feedRef = useRef(null);
  const feedTitleRef = useRef(null);
  const exploreRef = useRef(null);
  const exploreTitleRef = useRef(null);
  const history = useHistory();
  function feedActiveBtn() {
    exploreRef.current.style.color = '#ababab';
    exploreTitleRef.current.style.color = '#ababab';
    feedRef.current.style.color = '#fff';
    feedTitleRef.current.style.color = '#fff';
    props.setFeed && props.setFeed(true);
    history.push('/');
  }
  function exploreActiveBtn() {
    feedRef.current.style.color = '#ababab';
    feedTitleRef.current.style.color = '#ababab';
    exploreRef.current.style.color = '#fff';
    exploreTitleRef.current.style.color = '#fff';
    props.setFeed && props.setFeed(false);
    history.push('/');
  }

  return (
    <div className={style.my_profile_container}>
      <Link className="link" to="/">
        <h1 className="logo">Dumbgram</h1>
      </Link>
      <section className={style.mainContent}>
        <img
          style={{ marginTop: '2rem' }}
          src="/img/rectangle 5.png"
          alt=""
          className={style.profilePicture}
        />
        <h2 style={{ fontWeight: '700' }}>zayn</h2>
        <p style={{ color: '#AcABAB' }}>@lalalisa_m</p>

        <div
          style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
          className="btn_group_message_follow"
        >
          <button className="btnRainbow btn18">Message</button>
          <button className="btn_dark btn18">Unfollow</button>
        </div>

        <div className={style.post_foll}>
          <div className={style.pff}>
            <h3 className={style.h3_pff}>Post</h3>
            <p className={style.p_pff}>200</p>
          </div>
          <div className="pff_line"></div>
          <div className={style.pff}>
            <h3 className={style.h3_pff}>Followers</h3>
            <p className={style.p_pff}>51.2 M</p>
          </div>
          <div className="pff_line"></div>
          <div className={style.pff}>
            <h3 className={style.h3_pff}>Following</h3>
            <p className={style.p_pff}>1</p>
          </div>
        </div>
        <p className={style.user_description}>
          Rapper in Black Pink, Brand Ambasador Penshoppe
        </p>
        <div className="horizontal_line"></div>
        <div onClick={feedActiveBtn} className="profile_btn_list_left_bottom">
          <svg
            color="#fff"
            ref={feedRef}
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.3555 10.4399C23.3547 10.4393 23.3542 10.4386 23.3536 10.4381L13.5626 0.647343C13.1452 0.229821 12.5903 0 12.0001 0C11.4099 0 10.8551 0.229821 10.4375 0.647343L0.65158 10.4331C0.648283 10.4364 0.644804 10.4399 0.641691 10.4432C-0.215329 11.3052 -0.213864 12.7037 0.645903 13.5634C1.0387 13.9564 1.55731 14.1839 2.11199 14.2079C2.1347 14.2101 2.15741 14.2112 2.1803 14.2112H2.57035V21.4163C2.57035 22.8423 3.73063 24.0024 5.15661 24.0024H8.9872C9.3756 24.0024 9.6904 23.6875 9.6904 23.2992V17.6502C9.6904 16.9996 10.2198 16.4704 10.8704 16.4704H13.1298C13.7805 16.4704 14.3097 16.9996 14.3097 17.6502V23.2992C14.3097 23.6875 14.6245 24.0024 15.0129 24.0024H18.8435C20.2696 24.0024 21.4297 22.8423 21.4297 21.4163V14.2112H21.7916C22.3816 14.2112 22.9365 13.9813 23.3542 13.5636C24.2149 12.7026 24.2152 11.3015 23.3555 10.4399ZM22.3596 12.5693C22.2078 12.7211 22.006 12.8048 21.7916 12.8048H20.7265C20.3381 12.8048 20.0233 13.1195 20.0233 13.508V21.4163C20.0233 22.0668 19.4941 22.596 18.8435 22.596H15.7161V17.6502C15.7161 16.2242 14.556 15.064 13.1298 15.064H10.8704C9.44428 15.064 8.284 16.2242 8.284 17.6502V22.596H5.15661C4.50616 22.596 3.97674 22.0668 3.97674 21.4163V13.508C3.97674 13.1195 3.66195 12.8048 3.27355 12.8048H2.22681C2.21582 12.804 2.20502 12.8035 2.19385 12.8033C1.98436 12.7996 1.78786 12.7165 1.64063 12.5691C1.32749 12.2559 1.32749 11.7463 1.64063 11.433C1.64082 11.433 1.64082 11.4328 1.641 11.4326L1.64155 11.4321L11.4323 1.64171C11.5839 1.4899 11.7855 1.40639 12.0001 1.40639C12.2146 1.40639 12.4162 1.4899 12.568 1.64171L22.3565 11.43C22.358 11.4315 22.3596 11.433 22.3611 11.4344C22.6726 11.7481 22.6721 12.2567 22.3596 12.5693Z"
              fill="currentColor"
            />
          </svg>

          <p ref={feedTitleRef} className="btn_list">
            Feed
          </p>
        </div>

        <div
          onClick={exploreActiveBtn}
          className="profile_btn_list_left_bottom"
        >
          <svg
            color="#ababab"
            ref={exploreRef}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M19.6234 5.59531C17.9224 3.89436 15.753 2.83236 13.4062 2.52852V1.40624C13.4062 0.630841 12.7754 0 12 0C11.2246 0 10.5937 0.630841 10.5937 1.40624V2.52904C8.99117 2.73829 7.45771 3.3043 6.09646 4.19698C5.88 4.33892 5.81957 4.62954 5.96156 4.84601C6.10349 5.06248 6.39407 5.12285 6.61059 4.98092C7.96025 4.09583 9.49559 3.56235 11.0961 3.41619C11.1036 3.41567 11.1111 3.41511 11.1185 3.41422C11.4104 3.38825 11.7045 3.37499 12 3.37499C17.4278 3.37499 21.8437 7.79088 21.8437 13.2187C21.8437 18.6465 17.4278 23.0624 12 23.0624C6.57215 23.0624 2.15626 18.6465 2.15626 13.2187C2.15626 11.2952 2.71163 9.43149 3.76238 7.82898C3.90432 7.61247 3.84389 7.32189 3.62743 7.17996C3.41091 7.03807 3.12038 7.09844 2.9784 7.31491C1.82725 9.07056 1.21881 11.112 1.21881 13.2187C1.21881 16.0985 2.34024 18.8058 4.37653 20.8422C6.41282 22.8785 9.12022 23.9999 12 23.9999C14.8797 23.9999 17.5871 22.8785 19.6234 20.8422C21.6597 18.8059 22.7812 16.0985 22.7812 13.2187C22.7812 10.3389 21.6597 7.63164 19.6234 5.59531ZM11.5312 2.44808V1.40624C11.5312 1.14778 11.7415 0.937496 11.9999 0.937496C12.2584 0.937496 12.4687 1.14778 12.4687 1.40624V2.44818C12.313 2.44157 12.1567 2.43758 11.9999 2.43758C11.8433 2.43758 11.687 2.44138 11.5312 2.44808Z"
            />
            <path
              fill="currentColor"
              d="M12 22.1251C16.9109 22.1251 20.9062 18.1298 20.9062 13.2188C20.9062 8.3079 16.9109 4.31262 12 4.31262C7.08908 4.31262 3.09375 8.30795 3.09375 13.2188C3.09375 18.1297 7.08908 22.1251 12 22.1251ZM12 5.25007C16.394 5.25007 19.9687 8.82484 19.9687 13.2188C19.9687 17.6127 16.3939 21.1875 12 21.1875C7.60601 21.1875 4.03125 17.6127 4.03125 13.2188C4.03129 8.82484 7.60606 5.25007 12 5.25007Z"
            />
            <path
              fill="currentColor"
              d="M6.44801 13.6876H10.371L10.7804 14.3062C10.8151 14.3587 10.8601 14.4037 10.9126 14.4384L11.5312 14.8479V18.7709C11.5312 19.0297 11.7411 19.2396 12 19.2396C12.2588 19.2396 12.4687 19.0297 12.4687 18.7709V15.4683L15.8138 17.6823C15.8929 17.7346 15.9828 17.7601 16.0724 17.7601C16.1934 17.7601 16.3134 17.7134 16.404 17.6228C16.5615 17.4653 16.5864 17.2185 16.4634 17.0327L14.2494 13.6876H17.552C17.8108 13.6876 18.0207 13.4778 18.0207 13.2189C18.0207 12.96 17.8108 12.7501 17.552 12.7501H13.629L13.2195 12.1315C13.1848 12.079 13.1399 12.0341 13.0874 11.9993L12.4688 11.5899V7.66687C12.4688 7.40798 12.2589 7.19812 12.0001 7.19812C11.7412 7.19812 11.5313 7.40798 11.5313 7.66687V10.9694L8.18622 8.7554C8.00036 8.6324 7.75361 8.65724 7.59602 8.81483C7.43843 8.97243 7.41358 9.21917 7.53658 9.40499L9.75058 12.7501H6.44806C6.18917 12.7501 5.97931 12.96 5.97931 13.2189C5.97931 13.4778 6.18912 13.6876 6.44801 13.6876ZM12.4904 12.7285L14.4101 15.629L11.5096 13.7093L9.58979 10.8087L12.4904 12.7285Z"
            />
            <path
              fill="currentColor"
              d="M4.70817 6.39549C4.82067 6.39549 4.93355 6.35522 5.02336 6.27357L5.0236 6.27333C5.21513 6.09919 5.22914 5.80284 5.055 5.61126C4.88096 5.41973 4.58428 5.40567 4.39275 5.57986C4.20122 5.754 4.18707 6.05049 4.36121 6.24202C4.45374 6.34383 4.58072 6.39549 4.70817 6.39549Z"
            />
          </svg>
          <p ref={exploreTitleRef} className="btn_list_inactive">
            Explore
          </p>
        </div>

        <div className="horizontal_line"></div>
        <div className="profile_btn_list_left_bottom">
          <img src="/img/logout.svg" alt="" />
          <p style={{ marginBottom: 0 }} className="btn_list_inactive">
            Logout
          </p>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
