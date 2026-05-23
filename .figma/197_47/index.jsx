import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.component}>
      <div className={styles.frame4}>
        <p className={styles.text}>小彩蛋 click&nbsp;</p>
      </div>
      <p className={styles.text2}>
        游戏经历Game Experiences
        <br />
        <br />
        <br />
        <br />
        书单Booklist
        <br />
        影单Movie List
      </p>
    </div>
  );
}

export default Component;
