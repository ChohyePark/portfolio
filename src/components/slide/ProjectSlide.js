import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './projectSlide.module.scss';
import { EffectCoverflow, Navigation, Mousewheel } from 'swiper';

export default function ProjectSlide({ projects }) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation, Mousewheel]}
        className={styles.swiper}
      >
        {projects.map((project, i) => {
          return (
            <SwiperSlide className={styles.swiperSlide} key={i}>
              <section className={styles.mainSection}>
                <div className={styles.imgWrapper}>
                  <div className={styles.imgBox}>
                    <img
                      src={require(`../../assets/project/${project.img}`)}
                      alt={project.title}
                    />
                  </div>
                </div>
                <div className={styles.titleWrapper}>
                  <p className={styles.title}>{project.title}</p>
                  <p className={styles.titleSub}>{project.subTitle}</p>
                  <p className={styles.description}>{project.description}</p>
                </div>
              </section>
              <section className={styles.infoSection}>
                <p className={styles.infoTitle}>
                  프로젝트 후기 및 회고 <i className='ri-message-2-line'></i>{' '}
                </p>
                <p className={styles.mainInfo}>{project.mainInfo}</p>
                <p className={styles.stackTitle}>사용 기술</p>
                <p className={styles.stackInfo}>{project.stackInfo}</p>
              </section>
              <section className={styles.linkSection}>
                <a href={project.link}>
                  <div className={styles.githubBtn}>
                    <i class='ri-github-fill' />
                  </div>
                </a>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}