import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './projectSlide.module.scss';
import { EffectCoverflow, Navigation } from 'swiper';

export default function ProjectSlide({ projects }) {
  return (
    <>
      <Swiper
        allowTouchMove={false}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 30,
          modifier: 5,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
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
                <p className={styles.developPeriod}>
                  프로젝트 기간 : <span>{project.developperiod}</span>
                </p>
                <p className={styles.developmentTitle}>
                  담당 개발 내용 <i className='ri-message-2-line'></i>{' '}
                </p>
                <div className={styles.development}>
                  <pre>{project.development}</pre>
                </div>
                <p className={styles.growthTitle}>
                  성장 경험 <i className='ri-message-2-line'></i>{' '}
                </p>
                <p className={styles.growth}>{project.growth}</p>
                <p className={styles.stackTitle}>사용 기술</p>
                <p className={styles.stackInfo}>{project.stackInfo}</p>
              </section>
              <section className={styles.linkSection}>
                <div
                  className={styles.githubBtn}
                  onClick={() => {
                    window.location.href = project.github;
                  }}
                >
                  <i className='ri-github-fill' />
                </div>
                {project.gitwiki ? (
                  <div
                    className={styles.gitwikiBtn}
                    onClick={() => {
                      window.location.href = project.gitwiki;
                    }}
                  >
                    Wiki
                  </div>
                ) : null}
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
