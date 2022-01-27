import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "@styles/heroCarrousel.module.sass";

import carrousel1 from "@assets/hero_carrouse_1.png";
import carrousel2 from "@assets/hero_carrouse_2.png";
import carrousel3 from "@assets/hero_carrouse_3.png";
import carrousel4 from "@assets/hero_carrouse_4.png";
import carrousel5 from "@assets/hero_carrouse_5.png";
import carrousel6 from "@assets/hero_carrouse_6.png";
import carrousel7 from "@assets/hero_carrouse_7.png";
import carrousel8 from "@assets/hero_carrouse_8.png";
import carrousel9 from "@assets/hero_carrouse_9.png";
import carrousel10 from "@assets/hero_carrouse_10.png";
import carrousel11 from "@assets/hero_carrouse_11.png";
import carrousel12 from "@assets/hero_carrouse_12.png";
import carrousel13 from "@assets/hero_carrouse_13.png";
import carrousel14 from "@assets/hero_carrouse_14.png";
import carrousel15 from "@assets/hero_carrouse_15.png";

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
  ],
};

function HeroCarrousel() {
  const potionsUrls = [
    carrousel1,
    carrousel2,
    carrousel3,
    carrousel4,
    carrousel5,
    carrousel6,
    carrousel7,
    carrousel8,
    carrousel9,
    carrousel10,
    carrousel11,
    carrousel12,
    carrousel13,
    carrousel14,
    carrousel15,
  ];

  const el = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.from(q(".carrousel_image"), {
      scrollTrigger: {
        trigger: el.current,
        start: "top bottom",
      },
      rotate: 0,
      stagger: 0.3,
      duration: 1,
    });
  });

  return (
    <div className={styles.carrousel_container} ref={el}>
      <Slider {...settings}>
        {potionsUrls.map((imageUrl, i) => (
          <div key={i}>
            <Image
              src={imageUrl}
              alt={`hero_carrouse_${i + 1}`}
              className={[
                i % 2 === 0 ? styles.imgodd : styles.imgeven,
                "carrousel_image",
              ].join(" ")}
              layout="responsive"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroCarrousel;
