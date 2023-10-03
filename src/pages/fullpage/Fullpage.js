import styles from './fullpage.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import Introduction from '../../components/introduction/Introduction';
import Stacks from '../../components/stacks/Stacks';
import Projects from '../../components/projects/Projects';
import Nav from '../../components/nav/Nav';
import AsisTobe from '../../components/asistobe/AsisTobe';
import Footer from '../../components/footer/Footer';

const Fullpage = () => {
  const [navView, setNavView] = useState();
  const [scrollIndex, setScrollIndex] = useState(null);
  const sectionRef = useRef([]);
  const scrollRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null, //target의 조상 요소 중 교차 여부를 판단할 대상을 설정해준다
      rootMargin: '0px', //root가 가질 margin값으로 root의 측면마다 경계의 크기를 조절할 수 있다. 기본 값은 0
      threshold: 0.2, // 관찰자가 root와 target간의 교차가 이루어졌다고 판단하는 기준이다. 0.5는
      // target 요소가 root에서 50% 만큼 보였을때 교차가 이루어 졌다고 판단한다. 기본값은 0이다
    };

    const observers = sectionRef.current.map((ref, i) => {
      // 관찰 대상이 viewport안으로 들어온 경우 NavView안에 값에 ref 인덱스를 넣어준다
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setNavView(i);
        } else if (window.scrollY < 5) {
          // 처음 페이지가 렌더링 되었을때 디폴트값 설정
          setNavView(0);
        }
      }, options);
    });

    // 관찰 시작
    sectionRef.current.forEach((ref, index) => {
      observers[index].observe(ref);
    });

    // 연결 해제
    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      setNavView();
    };
  }, []);

  useEffect(() => {
    scrollRef.current[scrollIndex]?.scrollIntoView({ behavior: 'smooth' });
    setScrollIndex(null);
  }, [scrollIndex]);

  return (
    <>
      <div
        className={styles.container}
        ref={(el) => (scrollRef.current[0] = el)}
      >
        <Nav navView={navView} setScrollIndex={setScrollIndex}></Nav>
        <div
          ref={(el) => {
            sectionRef.current[0] = el;
          }}
        >
          <Introduction scrollRef={scrollRef} />
        </div>
        <div
          ref={(el) => {
            sectionRef.current[1] = el;
          }}
        >
          <Stacks scrollRef={scrollRef} />
        </div>
        <div
          ref={(el) => {
            sectionRef.current[2] = el;
          }}
        >
          <Projects />
        </div>
        <div
          ref={(el) => {
            sectionRef.current[3] = el;
          }}
        >
          <AsisTobe scrollRef={scrollRef} />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Fullpage;
