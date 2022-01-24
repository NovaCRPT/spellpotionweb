/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@styles/framedTrait.module.sass";

function FramedTrait({ image, imageAlt, big = false }) {
  return (
    <div
      className={[styles.container, big ? styles.containerBig : ""].join(" ")}
    >
      <img
        src="assets/frame.png"
        alt="trait_background"
        className={styles.background}
      />
      <img src={image} alt={imageAlt} className={styles.trait} loading="lazy" />
    </div>
  );
}

export default FramedTrait;
