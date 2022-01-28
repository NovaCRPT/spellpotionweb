import React from "react";
import styles from "@styles/premintData.module.sass";
import Image from "next/image";

function PremintData({
  image,
  imageAlt,
  title,
  step,
  info,
  rotation,
  gsapClass,
}) {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={[styles.container, gsapClass].join(" ")}
    >
      <span className={styles.step}>{step}</span>

      <div className={styles.background}>
        <Image layout="responsive" src={image} alt={imageAlt} />
      </div>
      <span className={styles.title_box}>{title}</span>
      <p className={styles.info}>{info}</p>
    </div>
  );
}

export default PremintData;
