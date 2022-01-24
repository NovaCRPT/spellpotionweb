/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "@styles/heroCarrousel.module.sass";

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 2500,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
  ],
};

function HeroCarrousel() {
  const potionsUrls = [
    "assets/hero_carrouse_1.png",
    "assets/hero_carrouse_2.png",
    "assets/hero_carrouse_3.png",
    "assets/hero_carrouse_4.png",
    "assets/hero_carrouse_5.png",
    "assets/hero_carrouse_6.png",
    "assets/hero_carrouse_7.png",
    "assets/hero_carrouse_8.png",
    "assets/hero_carrouse_9.png",
    "assets/hero_carrouse_10.png",
    "assets/hero_carrouse_11.png",
    "assets/hero_carrouse_12.png",
    "assets/hero_carrouse_13.png",
    "assets/hero_carrouse_14.png",
    "assets/hero_carrouse_15.png",
  ];

  return (
    <div className={styles.carrousel_container}>
      <Slider {...settings}>
        {potionsUrls.map((imageUrl, i) => (
          <img
            src={imageUrl}
            key={i}
            alt={`hero_carrouse_${i + 1}`}
            className={i % 2 === 0 ? styles.imgodd : styles.imgeven}
            loading="lazy"
          />
        ))}
      </Slider>
    </div>
  );
}

export default HeroCarrousel;
