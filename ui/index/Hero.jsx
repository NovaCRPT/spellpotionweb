import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "@styles/hero.module.sass";

import heroBackground from "@assets/hero_background.png";
import heroPotion from "@assets/hero_mobile_potion.png";
import heroTitle from "@assets/hero_title.png";

const Hero = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .from(q(".hero_title"), { y: 50, opacity: 0, duration: 0.5 })
      .from(q(".hero_description"), { y: 50, opacity: 0, duration: 0.5 })
      .from(q(".hero_potion"), { y: 50, opacity: 0, duration: 0.7 })
      .from(q(".hero_timer"), { opacity: 0, duration: 0.5 });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.hero} ref={el}>
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
            <div className="hero_title">
              <Image
                width={627}
                height={208}
                layout="responsive"
                src={heroTitle}
                alt="title"
              />
            </div>
            <p className="hero_description">
              Spellpotions is a collection of 2893 hand-drawn on paper Every
              potion, accessory, and background is fully detailed. There are no
              rarities, the value of each NFT depends on the value you give it
              based on your taste
            </p>
          </div>
          <div className={styles.image_container}>
            <div className="hero_potion">
              <Image layout="responsive" src={heroPotion} alt="drawn-potion" />
            </div>
          </div>
        </div>
        <p className={[styles.time_counter, "hero_timer"].join(" ")}>
          20 days, 13 hours, 5 min, 23seg
        </p>
      </div>
    </div>
  );
};

export default Hero;
