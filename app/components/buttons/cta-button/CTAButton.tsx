'use client'

import styles from "./CTAButton.module.scss";
import {FC} from 'react'

interface CTAButtonProps {
  href?: string;
  btnText?: string;
  colorScheme?: 'rainbow' | 'blueGrey';
}

const CTAButton: FC<CTAButtonProps> = ({
  href= "#contact",
  btnText= "Let's talk!",
  colorScheme = 'blueGrey'
}) => {
  const handleButtonClick = () => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`
      relative 
      ${styles['button-container']} 
      ${styles['always-active']}
      ${styles[colorScheme]}
    `}>
      <button
        onClick={() => handleButtonClick()}
        className={`${styles.button} bg-background-secondary rounded-full px-4 py-2 text-white relative z-10`}>
        <span>{btnText}</span>
      </button>
      <div className={styles['shadow-animation']} />
      <div className={styles['shadow-blur']} />
    </div>
  );
};

export default CTAButton;