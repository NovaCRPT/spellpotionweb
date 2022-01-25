import React from "react";
import Image from "next/image";
import styles from "@styles/infoImage.module.sass";

function InfoImage({
  titleImage,
  imageAlt,
  rotation,
  desc,
  image,
  direction = "normal",
}) {
  return (
    <figure className={[styles.info_image, styles[direction]].join(" ")}>
      <div
        className={styles.image}
        style={{ transform: `rotation(${rotation}deg)` }}
      >
        <Image src={image} alt={imageAlt} />
      </div>
      <figcaption className={styles.info}>
        <Image src={titleImage} layout="responsive" alt={imageAlt} />
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
