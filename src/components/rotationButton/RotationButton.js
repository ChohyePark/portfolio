import styles from './rotationButton.module.scss';

const RotationButton = () => {
  return (
    <div className='c-ip-circle-text'>
      <svg
        viewBox='0 0 140 140'
        className={styles.cIpCircleText__svg}
        style={{
          width: '100px',
          height: '100px',
        }}
      >
        <defs>
          <path
            id='circle-f0ef3aa'
            d=' M 70, 70 m -59.8, 0 a 59.8,59.8 0 1,1 119.6,0 a 59.8,59.8 0 1,1 -119.6,0'
          ></path>
        </defs>
        <text className={`c-ip-circle-text__title ${styles.buttonText}`}>
          <textPath xlinkHref='#circle-f0ef3aa'>
            Next ・ Next ・ Next ・ Next ・ Next ・ Next ・ Next ・
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default RotationButton;
