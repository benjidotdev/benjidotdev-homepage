import React from 'react';
import styles from './Waves.module.scss';

const Waves = () => {
  return (
    <div className="relative text-center text-background">
      <div>
        <svg
          className="relative w-full h-[40px] md:h-[10vh] min-h-[40px] md:min-h-[80px] max-h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className={styles.parallax}>
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(37,39,52,0.75" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(37,39,52,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(37,39,52,0.25)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(37,39,52)" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Waves;
