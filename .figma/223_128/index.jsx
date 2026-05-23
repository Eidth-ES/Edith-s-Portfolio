import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.component}>
      <div className={styles.rectangle27}>
        <p className={styles.text3}>
          <span className={styles.text}>
            <br />
          </span>
          <span className={styles.text2}>
            大连海事大学“五四表彰”优秀团干部 2021.05， 2023.05
            <br />
            大连海事大学优秀学生奖学金二等奖 2022.12，2023.12 
            <br />
            大连海事大学2024届优秀毕业生  2024.04
            <br />
            全国大学生英语竞赛（NECCS）B类三等奖 2023.06
            <br />
            <br />
            <br />
          </span>
        </p>
        <div className={styles.autoWrapper}>
          <p className={styles.awards}>Awards🏆</p>
          <p className={styles.text4}>本科期间</p>
          <p className={styles.text5}>硕士期间</p>
          <p className={styles.text6}>
            长三角研究生学术写作论坛征文优胜奖2024.10
            <br />
            上海大学外国语学院研究生党团研组织2024年度优秀干事  2025.01
            <br />
            上海大学研究生学业奖学金二等奖 2024.12，2025.12
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component;
