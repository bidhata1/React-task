import React from 'react';
import styles from '../styles/ProgressBar.module.css';

interface ProgressBarProps {
  step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  return (
    <div className={styles.progressBar}>
      <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>1</div>
      <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>2</div>
      <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>3</div>
      <div className={`${styles.step} ${step >= 4 ? styles.active : ''}`}>4</div>
    </div>
  );
};

export default ProgressBar;
