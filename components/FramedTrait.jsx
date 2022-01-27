import React from "react";
import Image from "next/image";
import styles from "@styles/framedTrait.module.sass";

function FramedTrait({ image, imageAlt, big = false, gsapClass }) {
  return (
    <div
      className={[
        styles.container,
        big ? styles.containerBig : "",
        gsapClass,
      ].join(" ")}
    >
      <div className={styles.background}>
        <Image
          layout="responsive"
          src="/assets/frame.png"
          alt="trait_background"
          width={250}
          height={280}
        />
      </div>
      <div className={styles.trait}>
        <Image quality={100} layout="responsive" src={image} alt={imageAlt} />
      </div>
    </div>
  );
}

export default FramedTrait;
