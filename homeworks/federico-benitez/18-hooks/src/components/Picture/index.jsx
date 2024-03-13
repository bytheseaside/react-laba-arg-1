import React, { useState } from 'react';
import styles from './style.module.css';

function Picture({ url, isLoading }) {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  return (
    <div className={styles.card} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {(isLoading || isHover) && (
        <div className={styles.overlay}>
          <img src="/001-refresh.svg" alt="reloading" className={`${styles.loading} ${isLoading ? styles.spin : ''}`} />
        </div>
      )}
      <img src={url} className={styles.photo} alt="photo" />
    </div>
  );
}

export default Picture;
