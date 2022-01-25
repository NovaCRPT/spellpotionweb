/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "@styles/hero.module.sass";

import heroBackground from "@assets/hero_background.png";
import heroPotion from "@assets/hero_mobile_potion.png";
import heroTitle from "@assets/hero_title.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src={heroBackground}
        alt="background"
        layout="fill"
        className={styles.background}
        objectFit="cover"
      />
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.hero_info}>
          <div className={styles.hero_desc}>
            <Image
              width={627}
              height={208}
              layout="responsive"
              src={heroTitle}
              alt="title"
            />
            <p>
              Spellpotions is a collection of 2893 hand-drawn on paper Every
              potion, accessory, and background is fully detailed. There are no
              rarities, the value of each NFT depends on the value you give it
              based on your taste
            </p>
          </div>
          <div className={styles.image_container}>
            <div>
              <Image layout="responsive" src={heroPotion} alt="drawn-potion" />
            </div>
          </div>
        </div>
        <p className={styles.time_counter}>20 days, 13 hours, 5 min, 23seg</p>
      </div>
    </div>
  );
};

export default Hero;
