/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@styles/PremintData.module.sass";

function PremintData({ image, imageAlt, title, step, info, rotation }) {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={styles.container}
    >
      <span className={styles.step}>{step}</span>
      <img src={image} alt={imageAlt} className={styles.background} />
      <span className={styles.title_box}>{title}</span>
      <p className={styles.info}>{info}</p>
    </div>
  );
}

export default PremintData;
