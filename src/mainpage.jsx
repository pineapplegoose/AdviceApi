import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './mainpage.module.scss';

function MainPage() {
  const navigate = useNavigate();

  const changePage = (event) => {
    event.preventDefault();
    navigate('/advice');
  };

  return (
    <div className={styles['main-container']}>
      <h1>Advice API</h1>
      <p>
        Looking for some advice mate? <span>Let's help ya :)</span>
      </p>
      <button onClick={changePage}>Get some advice mehn</button>
    </div>
  );
}

export default MainPage;
