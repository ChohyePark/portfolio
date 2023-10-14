import { useEffect, useState } from 'react';
import styles from './nav.module.scss';

const Nav = ({ navView, setScrollIndex }) => {
  const [fade, setFade] = useState(false);
  const navHandler = (e) => {
    setScrollIndex(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setFade(true);
    }, 100);
  }, []);

  console.log(navView);

  return (
    <div
      className={`${styles.container} ${styles.fade} ${
        fade ? styles.fadeLoad : ''
      }`}
    >
      <ul>
        <li
          className={navView === 0 ? styles.active : ''}
          value={0}
          onClick={(e) => {
            navHandler(e);
          }}
        >
          Home
        </li>
        <li
          className={navView === 1 ? styles.active : ''}
          value={1}
          onClick={(e) => {
            navHandler(e);
          }}
        >
          About me
        </li>
        <li
          className={navView === 2 ? styles.active : ''}
          value={2}
          onClick={(e) => {
            navHandler(e);
          }}
        >
          Stacks
        </li>
        <li
          className={navView === 3 ? styles.active : ''}
          value={3}
          onClick={(e) => {
            navHandler(e);
          }}
        >
          Project
        </li>
      </ul>
    </div>
  );
};

export default Nav;
