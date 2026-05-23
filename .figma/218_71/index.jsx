import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.component47}>
        <div className={styles.rectangle}>
          <p className={styles.gameExperiencesBookL}>
            Game Experiences& Book List&
            <br />
            Movie List
          </p>
        </div>
        <p className={styles.gameExperiencesBookL2}>
          Game Experiences& Book List&
          <br />
          Movie List
        </p>
        <img src="../image/mpapgtzw-mvrw0ne.png" className={styles.a41} />
        <img src="../image/mpapgtzw-u7r10d0.png" className={styles.a51} />
      </div>
      <div className={styles.autoWrapper2}>
        <div className={styles.rectangle2}>
          <div className={styles.browseCollectionButt}>
            <p className={styles.text3}>
              <span className={styles.text}>
                游戏经历
                <br />
              </span>
              <span className={styles.text2}>乙女+女性向</span>
            </p>
          </div>
          <p className={styles.text4}>
            <br />
            <br />
            光与夜之恋 23-26年 75级
            <br />
            恋与深空 24-25年80级 <br />
            未定事件簿 23-24年
            <br /> 代号鸢（如鸢）24年
            <br />
            <br />
          </p>
        </div>
        <div className={styles.autoWrapper}>
          <div className={styles.rectangle25}>
            <p className={styles.text5}>
              书单与作者(部分)
              <br />
              click here
            </p>
          </div>
          <div className={styles.rectangle26}>
            <p className={styles.text6}>
              影单(部分)
              <br />
              click here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
