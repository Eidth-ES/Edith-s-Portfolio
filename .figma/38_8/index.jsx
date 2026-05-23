import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.a}>
      <div className={styles.frame}>
        <div className={styles.rectangle2}>
          <p className={styles.text}>
            Fanfiction
            <br />
            /光与夜之恋同人文
          </p>
        </div>
        <div className={styles.autoWrapper}>
          <div className={styles.rectangle1}>
            <p className={styles.text2}>
              Novel
              <br />
              小说
            </p>
          </div>
          <p className={styles.text3}>
            Movie/ TV Fiction
            <br />
            影视二创
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component;
