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
                  firstLoad ? styles.slideDownLoad : ''
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
                안녕하세요. <br />
                프론트엔드 개발자를 꿈꾸는 박초혜 입니다.
                <br />
                <span>
                  ❝ 결과에 집중하는 것보다 과정에 집중하면, 자연스럽게 원하는
                  결과를 얻게 된다 ❞
                </span>{' '}
                <br />
                개발과정에 몰입하는 것은 단순히 기술적인 공부뿐만 아니라, 그
                과정이 가진 의의와 가능성에 깊이 관여하는 것을 의미합니다.
                신입으로서 항상 배우는 자세를 가지며 저에게 주어진 과정에 몰입할
                준비가 되어있습니다.
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
                    <i className='ri-phone-fill'></i>
                    <span> 010 ・ 5878 ・ 2939 </span>
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
          <div
            className={`${styles.buttonBox} ${styles.rotationButton} ${
              secondLoad ? styles.load : ''
            }`}
          >
            <RotationButton></RotationButton>
          </div>
        </section>
      </div>
    </>
  );
};

export default Introduction;
