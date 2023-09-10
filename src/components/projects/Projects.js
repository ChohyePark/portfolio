import styles from './projects.module.scss';
import ProjectSlide from '../slide/ProjectSlide';
import ProjectDataMock from '../../mock/project.json';
import RotationButton from '../rotationButton/RotationButton';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [firstRef, firstView] = useInView();
  const [secondRef, secondView] = useInView();
  const [lineRef, lineView] = useInView();
  const [slidLoad, setSlideLoad] = useState(false);
  const [projects, setProjects] = useState([]);

  const getProjectData = () => {
    return Promise.resolve(ProjectDataMock);
  };

  useEffect(() => {
    getProjectData().then((data) => {
      setProjects(data);
    });
  }, []);

  useEffect(() => {
    if (secondView) {
      setTimeout(() => {
        setSlideLoad(true);
      }, 300);
    }
    return () => {
      setSlideLoad(false);
    };
  }, [secondView]);

  return (
    <div className={styles.container}>
      <section className={styles.projectSection}>
        <div className={styles.projectWrapper}>
          <p
            className={`${styles.projectTitle} ${styles.slideDown} ${
              firstView ? styles.slideDownLoad : ''
            }`}
            ref={firstRef}
          >
            Project
          </p>
          <div
            className={`${styles.slideDown} ${
              slidLoad ? styles.slideDownLoad : ''
            }`}
            ref={secondRef}
          >
            <ProjectSlide projects={projects}></ProjectSlide>
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
        <div
          className={`${styles.buttonBox} ${styles.rotationButton} ${
            lineView ? styles.scaleLoad : ''
          }`}
        >
          <RotationButton></RotationButton>
        </div>
      </section>
    </div>
  );
};

export default Projects;
