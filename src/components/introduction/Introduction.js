import { useEffect, useState } from 'react';
import RotationButton from '../rotationButton/RotationButton';
import { useInView } from 'react-intersection-observer';
import styles from './introduction.module.scss';

const Introduction = ({ scrollRef }) => {
  const [load, setLoad] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [secondLoad, setSecondLoad] = useState(false);
  const [viewRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setLoad(true);
      }, 100);

      setTimeout(() => {
        setFirstLoad(true);
      }, 500);

      setTimeout(() => {
        setSecondLoad(true);
      }, 900);

      return () => {
        setLoad(false);
        setFirstLoad(false);
        setSecondLoad(false);
      };
    }
  }, [inView]);

  return (
    <>
      <div className={styles.container}>
        <section className={styles.introSection} ref={viewRef}>
          <div
            className={`${styles.yLine} ${styles.line} ${
              load ? styles.load : ''
            }`}
          ></div>
          <div className={styles.introWrapper}>
            <div className={styles.title}>
              <div
                className={`${styles.cycle} ${
                  secondLoad ? styles.slideDownLoad : ''
                }`}
              ></div>
              <div
                className={`${styles.shadow} ${
                  secondLoad ? styles.slideDownLoad : ''
                }`}
              ></div>
              <p
                className={`${styles.slideText} ${styles.slideDown} ${
                  firstLoad ? styles.slideDownLoad : ''
                }`}
              >
                Hello
              </p>
              <p
                className={`${styles.fadeText}  ${styles.fade} ${
                  firstLoad ? styles.fadeLoad : ''
                }`}
              >
                안녕하세요! <br />
                프론트엔드 개발자를 꿈꾸는 박초혜 입니다.
                <br />
                저는 스스로 <span>무엇을 잘하고 무엇이 부족한지</span>{' '}
                모니터링하며 부족한 부분을 개선해 나가는 것을 좋아합니다.
                <br />
                눈에 보이는 성장을 할 수 있도록 노력하겠습니다.
                <br />
              </p>
            </div>
            <div className={styles.info}>
              <div
                className={`${styles.contact} ${styles.slideUp} ${
                  secondLoad ? styles.slideUpLoad : ''
                }`}
              >
                <p className={styles.contactTitle}>Contact</p>
                <ul className={styles.contactList}>
                  <li>
                    <i class='ri-github-fill'></i>
                    <a
                      href='https://github.com/ChohyePark/'
                      style={{ color: 'black' }}
                    >
                      {' '}
                      Github
                    </a>
                  </li>
                  <li>
                    <i className='ri-quill-pen-line'></i>
                    <a
                      href='https://sysoutctrlspace.tistory.com/'
                      style={{ color: 'black' }}
                    >
                      {' '}
                      Blog
                    </a>
                  </li>
                  <li>
                    <i className='ri-mail-line'></i>
                    <span> chohye0831@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div
                className={`${styles.experience} ${styles.slideUp} ${
                  secondLoad ? styles.slideUpLoad : ''
                }`}
              >
                <p className={styles.experienceTitle}>Experience</p>
                <ul className={styles.experienceList}>
                  <li>
                    <span>KH정보교육원 자바 개발자 양성과정</span>
                    <br />
                    23.01.05 ~ 07.06
                  </li>
                  <li>
                    <span>서울시 여성 가족재단 기업프로젝트</span>
                    <br />
                    23.08.04 ~ 08.30
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          className={styles.designSection}
          ref={(el) => {
            scrollRef.current[1] = el;
          }}
        >
          <div
            className={`${styles.xLine} ${styles.line} ${
              load ? styles.load : ''
            }`}
          ></div>
        </section>
      </div>
    </>
  );
};

export default Introduction;
