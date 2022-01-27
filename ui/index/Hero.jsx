import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "@styles/hero.module.sass";

import heroBackground from "@assets/hero_background.png";
import heroPotion from "@assets/hero_mobile_potion.png";
import heroTitle from "@assets/hero_title.png";

import discord from "@assets/discord-icon.png";
import twitter from "@assets/twitter-icon.png";
import youtube from "@assets/youtube-icon.png";

const Hero = () => {
  const el = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .from(q(".hero_title"), { y: 50, opacity: 0, duration: 0.5 })
      .from(q(".hero_description"), { y: 50, opacity: 0, duration: 0.5 })
      .from(q(".hero_potion"), { y: 50, opacity: 0, duration: 0.7 })
      .from(q(".socials a"), {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.5,
      })
      .from(q(".hero_timer"), { opacity: 0, duration: 0.5 });

    gsap.from(q(".socials_fixed"), {
      scrollTrigger: {
        trigger: el.current,
        start: "bottom center+=100px",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      duration: 0.5,
    });

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
                priority
              />
            </div>
            <p className="hero_description">
              Spellpotions is a collection of 2893 hand-drawn on paper Every
              potion, accessory, and background is fully detailed. There are no
              rarities, the value of each NFT depends on the value you give it
              based on your taste
            </p>
            <div className={[styles.socials, "socials"].join(" ")}>
              <a href="https://discord.gg/Phzv6ZAr" target="_blanck">
                <Image src={discord} height={50} width={50} alt="discord" />
              </a>
              <a href="https://twitter.com/SpellPotions" target="_blanck">
                <Image src={twitter} height={50} width={50} alt="discord" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCZ3hupUfwuAfbC9rWWugJ1w"
                target="_blanck"
              >
                <Image src={youtube} height={50} width={50} alt="discord" />
              </a>
            </div>
          </div>
          <div className={styles.image_container}>
            <div className="hero_potion">
              <Image
                layout="responsive"
                src={heroPotion}
                priority
                alt="drawn-potion"
              />
            </div>
          </div>
        </div>
        <p className={[styles.time_counter, "hero_timer"].join(" ")}>
          20 days, 13 hours, 5 min, 23seg
        </p>
      </div>
      <div className={[styles.socials_fixed, "socials_fixed"].join(" ")}>
        <a href="https://discord.gg/Phzv6ZAr" target="_blanck">
          <Image src={discord} height={30} width={30} alt="discord" />
        </a>
        <a href="https://twitter.com/SpellPotions" target="_blanck">
          <Image src={twitter} height={30} width={30} alt="discord" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCZ3hupUfwuAfbC9rWWugJ1w"
          target="_blanck"
        >
          <Image src={youtube} height={30} width={30} alt="discord" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
