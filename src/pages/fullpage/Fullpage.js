import styles from './fullpage.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import Introduction from '../../components/introduction/Introduction';
import Stacks from '../../components/stacks/Stacks';
import Projects from '../../components/projects/Projects';
import Nav from '../../components/nav/Nav';
import AsisTobe from '../../components/asistobe/AsisTobe';
import Footer from '../../components/footer/Footer';
import { useInView } from 'react-intersection-observer';

const Fullpage = () => {
  const [navView, setNavView] = useState();
  const [scrollIndex, setScrollIndex] = useState(null);
  const sectionRef = useRef([]);
  const scrollRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '30px',
      threshold: 0.5,
    };

    const observers = sectionRef.current.map((ref, i) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setNavView(i);
        } else if (window.scrollY < 5) {
          setNavView(0);
        }
      }, options);
    });

    sectionRef.current.forEach((ref, index) => {
      observers[index].observe(ref);
    });

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
          <Introduction scrollRef={scrollRef} sectionRef={sectionRef} />
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
