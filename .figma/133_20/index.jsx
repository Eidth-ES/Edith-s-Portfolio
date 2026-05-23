import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.component}>
      <div className={styles.frame}>
        <div className={styles.framePolaroidImageSp} />
      </div>
      <img src="../image/mpa1a4zn-rxt2cj6.png" className={styles.image1} />
    </div>
  );
}

export default Component;
