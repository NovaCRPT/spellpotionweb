/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@styles/hero.module.sass";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.hero_info}>
          <div className={styles.hero_desc}>
            <img src="assets/hero_title.png" alt="title" />
            <p>
              Spellpotions is a collection of 2893 hand-drawn on paper Every
              potion, accessory, and background is fully detailed. There are no
              rarities, the value of each NFT depends on the value you give it
              based on your taste
            </p>
          </div>
          <div className={styles.image_container}>
            <picture>
              <img src="assets/hero_mobile_potion.png" alt="drawn-potion" />
            </picture>
          </div>
        </div>
        <p className={styles.time_counter}>20 days, 13 hours, 5 min, 23seg</p>
      </div>
    </div>
  );
};

export default Hero;
