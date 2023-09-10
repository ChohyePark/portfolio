import styles from './stacks.module.scss';
import frontendDataMock from '../../mock/frontend.json';
import backendDataMock from '../../mock/backend.json';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Stacks = ({ scrollRef }) => {
  const [frontendData, setFrontendData] = useState([]);
  const [backendData, setBackendData] = useState([]);
  const [navRef, navView] = useInView();
  const [firstRef, firstView] = useInView();
  const [secondRef, secondView] = useInView();
  const [thirdRef, thirdView] = useInView();
  const [lineRef, lineView] = useInView();
  const getFrontData = () => {
    return Promise.resolve(frontendDataMock);
  };

  const getBackendData = () => {
    return Promise.resolve(backendDataMock);
  };

  useEffect(() => {
    getFrontData().then((data) => {
      setFrontendData(data);
    });
    getBackendData().then((data) => {
      setBackendData(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.stackSection}>
        <div className={styles.stackWrapper}>
          <div className={styles.stack}>
            <p
              className={`${styles.stackTitle} ${styles.slideUp} ${
                firstView ? styles.slideUpLoad : ''
              }`}
            >
              TECH STACK
            </p>
            <p
              className={`${styles.guide} ${styles.slideUp} ${
                firstView ? styles.slideUpLoad : ''
              }`}
            >
              아이콘에 마우스를 올려주세요.
            </p>
            <div
              className={`${styles.frontendTitle} ${styles.fade} ${
                firstView ? styles.fadeLoad : ''
              }`}
              ref={firstRef}
            >
              # Front-End
            </div>
            <div className={styles.frontWrapper}>
              <ul
                className={`${styles.slideUp} ${
                  secondView ? styles.slideUpLoad : ''
                }`}
                ref={secondRef}
              >
                {frontendData.map((item, i) => {
                  return (
                    <li key={i}>
                      <div className={styles.imgBox}>
                        <img
                          src={require(`../../assets/icon/${item.logo}.png`)}
                        />
                      </div>
                      <div className={styles.frontItem}>
                        <p className={styles.stackName}>{item.stack}</p>
                        <p className={styles.stackDescription}>
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className={`${styles.backendTitle} ${styles.fade} ${
                thirdView ? styles.fadeLoad : ''
              }`}
            >
              # Back-End
            </div>
            <div className={styles.backWrapper}>
              <ul
                className={`${styles.slideUp} ${
                  thirdView ? styles.slideUpLoad : ''
                }`}
                ref={thirdRef}
              >
                {backendData.map((item, i) => {
                  return (
                    <li key={i}>
                      <div className={styles.imgBox}>
                        <img
                          src={require(`../../assets/icon/${item.logo}.png`)}
                        />
                      </div>
                      <div className={styles.backItem}>
                        <p className={styles.stackName}>{item.stack}</p>
                        <p className={styles.stackDescription}>
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`${styles.lineY} ${styles.line} ${
            thirdView ? styles.lineLoad : ''
          }`}
        ></div>
      </section>
      <section
        className={styles.designSection}
        ref={(el) => (scrollRef.current[2] = el)}
      >
        <div
          className={`${styles.lineX} ${styles.line} ${
            lineView ? styles.lineLoad : ''
          }`}
          ref={lineRef}
        ></div>
      </section>
    </div>
  );
};

export default Stacks;
