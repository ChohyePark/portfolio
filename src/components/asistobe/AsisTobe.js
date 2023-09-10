import { useInView } from 'react-intersection-observer';
import styles from './asIstoBe.module.scss';
import { useEffect, useState } from 'react';

const AsisTobe = ({ scrollRef }) => {
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
      <section
        className={styles.contentSection}
        ref={(el) => (scrollRef.current[3] = el)}
      >
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
            AS IS TO BE
          </p>
          <div
            className={`${styles.asIs} ${styles.slideUp} ${
              secondView ? styles.slideUpLoad : ''
            }`}
            ref={firstRef}
          >
            <p className={styles.asIsTitle}>As Is</p>
            <p className={styles.asIsSubTitle}>현재의 저는 .. 💭</p>
            <div className={styles.asIsList}>
              <ul className={`${styles.fade} ${asFade ? styles.fadeLoad : ''}`}>
                <li>
                  👩‍💻 지식을 얻기위해 세미나에 참가하려고 노력하고있습니다.
                  <a href='https://sysoutctrlspace.tistory.com/category/Review'>
                    <div className={styles.listBtn}> 후기보기 👀 </div>
                  </a>
                </li>
                <li>
                  📚 모던 자바스크립트 Deep Dive 책을 읽으며 자바스크립트를 더
                  깊이 있게 공부하고 있습니다.
                </li>
                <li>
                  📚 이펙티브 타입스크립트 책과 관련 강의를 들으며 타입스크립트
                  공부를 하고 있습니다.
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
                  😓 제가 습득한 지식을 남들과 공유하는데 있어서 서투른 부분이
                  있습니다.
                </li>
                <li>📑 문서 작업 스킬이 부족합니다.</li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles.toBe} ${styles.slideUp} ${
              thirdView ? styles.slideUpLoad : ''
            }`}
            ref={thirdRef}
          >
            <p className={styles.toBeTitle}>To Be</p>
            <p className={styles.toBeSubTitle}>미래에 저는 .. 💭</p>
            <div className={styles.toBeList}>
              <ul className={`${styles.fade} ${toFade ? styles.fadeLoad : ''}`}>
                <li>
                  👩‍💻 타입스크립트를 사용하여 프로젝트를 진행하고 싶습니다.
                </li>
                <li>
                  👩‍👩‍👧‍👧 제가 습득한 지식과 정보를 동료들과 나누며 함께 성장하고
                  싶습니다.
                </li>
                <li>
                  👫 프로젝트를 진행할때 동료를 서포트해줄 수 있는 능력을 갖추고
                  싶습니다.
                </li>
                <li>
                  📑 꾸준히 관련 서적들을 읽고 학습한 내용을 블로그에
                  정리해나가면서 문서 작업을 잘하는 개발자로 성장하고 싶습니다.
                </li>
                <li>
                  🖥️ Three.js 라이브러리를 사용하여 재미있는 웹사이트를 만들고
                  싶습니다. (2023년도 목표 💡)
                </li>
                <li>
                  ⚙️ next.js 프레임 워크를 사용하여 React로 만드는 서버사이드
                  렌더링을 경험해보고 싶습니다. (2023년도 목표💡)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.designSection}>
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

export default AsisTobe;
