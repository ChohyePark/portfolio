import { useInView } from 'react-intersection-observer';
import styles from './aboutme.module.scss';
import { useEffect, useState } from 'react';

const AboutMe = ({ scrollRef }) => {
  const [firstRef, firstVew] = useInView();
  const [secondView, setSecondView] = useState(false);
  const [thirdRef, thirdView] = useInView();
  const [lineRef, lineView] = useInView();
  const [asFade, setAsFade] = useState(false);
  const [toFade, setToFade] = useState(false);

  useEffect(() => {
    if (secondView) {
      setTimeout(() => {
        setAsFade(true);
      }, 300);
      return () => {
        setAsFade(false);
      };
    }
  }, [secondView]);

  useEffect(() => {
    if (thirdView) {
      setTimeout(() => {
        setToFade(true);
      }, 300);
    }
    return () => {
      setToFade(false);
    };
  }, [thirdView]);

  useEffect(() => {
    if (firstVew) {
      setSecondView(true);
      return () => {
        setSecondView(false);
      };
    }
  }, [firstVew]);

  return (
    <div className={styles.container}>
      <section className={styles.contentSection}>
        <div
          className={`${styles.yLine} ${styles.scale} ${
            secondView ? styles.scaleLoad : ''
          }`}
        ></div>
        <div className={styles.contentWrapper}>
          <p
            className={`${styles.mainTitle} ${styles.slideUp} ${
              firstVew ? styles.slideUpLoad : ''
            }`}
          >
            About me
          </p>
          <div
            className={`${styles.asIs} ${styles.slideUp} ${
              secondView ? styles.slideUpLoad : ''
            }`}
            ref={firstRef}
          >
            <div className={styles.asIsList}>
              <ul className={`${styles.fade} ${asFade ? styles.fadeLoad : ''}`}>
                <li>
                  👩‍💻 IT 세미나 참가를 통해서 새로운 지식을 얻는 것을 좋아합니다.
                  <a href='https://sysoutctrlspace.tistory.com/category/Review'>
                    <div className={styles.listBtn}> 후기보기 👀 </div>
                  </a>
                </li>
                <li>
                  📚 현재 모던 자바스크립트 Deep Dive 책을 읽으며 자바스크립트를
                  더 깊이 있게 공부하고 있습니다.
                </li>
                <li>
                  🏃🏻‍♀️ 코딩은 엉덩이로 한다! 꾸준히 체력 관리를 하고 있습니다.{' '}
                  <a href='https://sysoutctrlspace.tistory.com/category/%F0%9F%8F%83%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%20%EC%97%89%EB%8D%A9%EC%9D%B4%20%EC%B2%B4%EB%A0%A5%20%ED%82%A4%EC%9A%B0%EA%B8%B0'>
                    {' '}
                    <div className={styles.listBtn}>기록보기 👀 </div>
                  </a>
                </li>
                <li>👨‍👨‍👦‍👦 팀 프로젝트를 3번 한 경험이 있습니다.</li>
                <li>
                  📝 문서 작업 스킬을 향상시키기 위해 공부한 내용을 꾸준히
                  블로그에 기록중 입니다.
                </li>
                <li>
                  👯‍♀️ 동료들과 지식을 나누며 함께 성장하는 것을 좋아합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className={styles.designSection}
        ref={(el) => (scrollRef.current[2] = el)}
      >
        <div
          className={`${styles.xLine} ${styles.scale} ${
            lineView ? styles.scaleLoad : ''
          }`}
          ref={lineRef}
        ></div>
      </section>
    </div>
  );
};

export default AboutMe;
