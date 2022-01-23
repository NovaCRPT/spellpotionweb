/* eslint-disable @next/next/no-img-element */
import React from "react";
import Title from "./Title";
import styles from "@styles/infoImage.module.sass";

function InfoImage({
  titleText,
  titleType = "md",
  rotation,
  desc,
  image,
  imageAlt,
  direction = "normal",
}) {
  return (
    <figure className={[styles.info_image, styles[direction]].join(" ")}>
      <div className={styles.image}>
        <img
          src={image}
          alt={imageAlt}
          style={{ transform: `rotation(${rotation}deg)` }}
        />
      </div>
      <figcaption className={styles.info}>
        <Title titleText={titleText} rotation={rotation} type={titleType} />
        {desc.map((text, i) => (
          <p
            key={i}
            className={styles.desc}
            style={{ transform: `rotation(${rotation}deg)` }}
          >
            {text}
          </p>
        ))}
      </figcaption>
    </figure>
  );
}

export default InfoImage;
