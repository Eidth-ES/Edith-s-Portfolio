import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.a}>
      <div className={styles.vector}>
        <p className={styles.text}>
          Portfolio
          <br />
          /作品集
        </p>
      </div>
      <div className={styles.frame}>
        <img src="../image/mox3lge0-2fty66c.svg" className={styles.vector2} />
      </div>
      <div className={styles.frame2}>
        <img src="../image/mox3lge5-fwrh4co.png" className={styles.vector3} />
      </div>
      <p className={styles.text2}>
        Experiences
        <br />
        /工作经历&nbsp;
      </p>
      <img src="../image/mox3lge5-hb1c8vf.png" className={styles.vector4} />
      <p className={styles.text3}>
        About Me
        <br />
        个人简介/&nbsp;
      </p>
    </div>
  );
}

export default Component;
