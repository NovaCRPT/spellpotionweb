import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Slider from "react-slick";
import Title from "@components/Title";
import FramedTrait from "@components/FramedTrait";
import styles from "@styles/traits.module.sass";

import traitsTitle from "@assets/traits_title.png";

import traits_stopper_1 from "@assets/traits_stopper_1.png";
import traits_stopper_2 from "@assets/traits_stopper_2.png";
import traits_stopper_3 from "@assets/traits_stopper_3.png";
import traits_stopper_4 from "@assets/traits_stopper_4.png";
import traits_stopper_5 from "@assets/traits_stopper_5.png";
import traits_stopper_6 from "@assets/traits_stopper_6.png";
import traits_stopper_7 from "@assets/traits_stopper_7.png";
import traits_stopper_8 from "@assets/traits_stopper_8.png";
import traits_stopper_9 from "@assets/traits_stopper_9.png";
import traits_stopper_10 from "@assets/traits_stopper_10.png";
import traits_stopper_11 from "@assets/traits_stopper_11.png";
import traits_stopper_12 from "@assets/traits_stopper_12.png";
import traits_stopper_13 from "@assets/traits_stopper_13.png";
import traits_stopper_14 from "@assets/traits_stopper_14.png";

import traits_neck_1 from "@assets/traits_neck_1.png";
import traits_neck_2 from "@assets/traits_neck_2.png";
import traits_neck_3 from "@assets/traits_neck_3.png";
import traits_neck_4 from "@assets/traits_neck_4.png";
import traits_neck_5 from "@assets/traits_neck_5.png";
import traits_neck_6 from "@assets/traits_neck_6.png";
import traits_neck_7 from "@assets/traits_neck_7.png";
import traits_neck_8 from "@assets/traits_neck_8.png";
import traits_neck_9 from "@assets/traits_neck_9.png";

import traits_label_1 from "@assets/traits_label_1.png";
import traits_label_2 from "@assets/traits_label_2.png";
import traits_label_3 from "@assets/traits_label_3.png";
import traits_label_4 from "@assets/traits_label_4.png";
import traits_label_5 from "@assets/traits_label_5.png";
import traits_label_6 from "@assets/traits_label_6.png";
import traits_label_7 from "@assets/traits_label_7.png";
import traits_label_8 from "@assets/traits_label_8.png";
import traits_label_9 from "@assets/traits_label_9.png";
import traits_label_10 from "@assets/traits_label_10.png";
import traits_label_11 from "@assets/traits_label_11.png";
import traits_label_12 from "@assets/traits_label_12.png";
import traits_label_13 from "@assets/traits_label_13.png";
import traits_label_14 from "@assets/traits_label_14.png";

import traits_base_1 from "@assets/traits_base_1.png";
import traits_base_2 from "@assets/traits_base_2.png";
import traits_base_3 from "@assets/traits_base_3.png";
import traits_base_4 from "@assets/traits_base_4.png";
import traits_base_5 from "@assets/traits_base_5.png";
import traits_base_6 from "@assets/traits_base_6.png";
import traits_base_7 from "@assets/traits_base_7.png";
import traits_base_8 from "@assets/traits_base_8.png";
import traits_base_9 from "@assets/traits_base_9.png";
import traits_base_10 from "@assets/traits_base_10.png";

import traits_potion_1 from "@assets/traits_potion_1.png";
import traits_potion_2 from "@assets/traits_potion_2.png";
import traits_potion_3 from "@assets/traits_potion_3.png";
import traits_potion_4 from "@assets/traits_potion_4.png";
import traits_potion_5 from "@assets/traits_potion_5.png";
import traits_potion_6 from "@assets/traits_potion_6.png";
import traits_potion_7 from "@assets/traits_potion_7.png";
import traits_potion_8 from "@assets/traits_potion_8.png";
import traits_potion_9 from "@assets/traits_potion_9.png";

import traits_back_1 from "@assets/traits_back_1.png";
import traits_back_2 from "@assets/traits_back_2.png";
import traits_back_3 from "@assets/traits_back_3.png";
import traits_back_4 from "@assets/traits_back_4.png";
import traits_back_5 from "@assets/traits_back_5.png";

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
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 2500,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
  ],
};

function Traits() {
  const stoppersUrls = [
    traits_stopper_1,
    traits_stopper_2,
    traits_stopper_3,
    traits_stopper_4,
    traits_stopper_5,
    traits_stopper_6,
    traits_stopper_7,
    traits_stopper_8,
    traits_stopper_9,
    traits_stopper_10,
    traits_stopper_11,
    traits_stopper_12,
    traits_stopper_13,
    traits_stopper_14,
  ];

  const necksUrls = [
    traits_neck_1,
    traits_neck_2,
    traits_neck_3,
    traits_neck_4,
    traits_neck_5,
    traits_neck_6,
    traits_neck_7,
    traits_neck_8,
    traits_neck_9,
  ];

  const labelsUrls = [
    traits_label_1,
    traits_label_2,
    traits_label_3,
    traits_label_4,
    traits_label_5,
    traits_label_6,
    traits_label_7,
    traits_label_8,
    traits_label_9,
    traits_label_10,
    traits_label_11,
    traits_label_12,
    traits_label_13,
    traits_label_14,
  ];

  const basesUrls = [
    traits_base_1,
    traits_base_2,
    traits_base_3,
    traits_base_4,
    traits_base_5,
    traits_base_6,
    traits_base_7,
    traits_base_8,
    traits_base_9,
    traits_base_10,
  ];

  const potionsUrls = [
    traits_potion_1,
    traits_potion_2,
    traits_potion_3,
    traits_potion_4,
    traits_potion_5,
    traits_potion_6,
    traits_potion_7,
    traits_potion_8,
    traits_potion_9,
    traits_potion_4,
    traits_potion_5,
    traits_potion_6,
  ];

  const backsUrls = [
    traits_back_1,
    traits_back_2,
    traits_back_3,
    traits_back_4,
    traits_back_5,
    traits_back_1,
    traits_back_2,
    traits_back_3,
    traits_back_4,
    traits_back_5,
  ];

  const el = useRef();
  const tl = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.selector(el);

  useEffect(() => {
    /*STOPPERS ANIMATIONS*/
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el.current,
          start: "top center-=100px",
        },
      })
      .from(q(".traits_title"), {
        opacity: 0,
        y: 50,
        duration: 0.7,
      })
      .from(q(".stopper_title"), {
        opacity: 0,
        y: 50,
        duration: 0.5,
      })
      .from(q(".traits_stopper"), {
        opacity: 0,
        rotate: 10,
        duration: 0.7,
      });
    /*NECKLACES ANIMATIONS*/
    gsap
      .timeline({
        scrollTrigger: {
          trigger: q(".necks_title"),
          start: "top center",
        },
      })
      .from(q(".necks_title"), {
        opacity: 0,
        y: 50,
        duration: 0.7,
      })
      .from(q(".traits_neck"), {
        opacity: 0,
        rotate: 10,
        y: 50,
        duration: 0.7,
      });
    /*LABELS ANIMATIONS*/
    gsap
      .timeline({
        scrollTrigger: {
          trigger: q(".labels_title"),
          start: "top center",
        },
      })
      .from(q(".labels_title"), {
        opacity: 0,
        y: 50,
        duration: 0.7,
      })
      .from(q(".traits_label"), {
        opacity: 0,
        rotate: 10,
        y: 50,
        duration: 0.7,
      });
    /*BASES ANIMATIONS*/
    gsap
      .timeline({
        scrollTrigger: {
          trigger: q(".bases_title"),
          start: "top center",
        },
      })
      .from(q(".bases_title"), {
        opacity: 0,
        y: 50,
        duration: 0.7,
      })
      .from(q(".traits_base"), {
        opacity: 0,
        rotate: 10,
        y: 50,
        duration: 0.7,
      });
    /*POTIONS ANIMATIONS*/
    gsap
      .timeline({
        scrollTrigger: {
          trigger: q(".potions_title"),
          start: "top center",
        },
      })
      .from(q(".potions_title"), {
        opacity: 0,
        y: 50,
        duration: 0.7,
      })
      .from(q(".traits_potion"), {
        opacity: 0,
        rotate: 10,
        y: 50,
        duration: 0.7,
      });
    /*BACKGROUNDS ANIMATIONS*/
    gsap
      .timeline({
        scrollTrigger: {
          trigger: q(".backs_title"),
          start: "top center",
        },
      })
      .from(q(".backs_title"), {
        opacity: 0,
        y: 50,
        duration: 0.7,
      })
      .from(q(".traits_back"), {
        opacity: 0,
        rotate: 10,
        y: 50,
        duration: 0.7,
      });
  }, []);

  return (
    <div className={styles.container} ref={el}>
      <div className={[styles.traits_title, "traits_title"].join(" ")}>
        <Image layout="responsive" src={traitsTitle} alt="traits" />
      </div>
      {/* STOPPERS */}
      <Title
        titleText="STOPPERS"
        rotation={2}
        type="md"
        gsapClass="stopper_title"
      />
      <Slider {...settings}>
        {stoppersUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_stopper_${i + 1}`}
            gsapClass="traits_stopper"
          />
        ))}
      </Slider>

      {/* NECKCLACES */}
      <Title
        titleText="NECKLACES"
        rotation={2}
        type="md"
        gsapClass="necks_title"
      />

      <Slider {...settings} rtl>
        {necksUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_neck_${i + 1}`}
            gsapClass="traits_neck"
          />
        ))}
      </Slider>

      {/* LABELS */}
      <Title
        titleText="LABELS"
        rotation={2}
        type="md"
        gsapClass="labels_title"
      />
      <Slider {...settings}>
        {labelsUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_label_${i + 1}`}
            gsapClass="traits_label"
          />
        ))}
      </Slider>

      {/* BASES */}
      <Title titleText="BASES" rotation={2} type="md" gsapClass="bases_title" />

      <Slider {...settings} rtl>
        {basesUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_base_${i + 1}`}
            gsapClass="traits_base"
          />
        ))}
      </Slider>

      {/* POTIONS */}
      <Title
        titleText="POTIONS"
        rotation={2}
        type="md"
        gsapClass="potions_title"
      />
      <Slider {...settings}>
        {potionsUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_base_${i + 1}`}
            big
            gsapClass="traits_potion"
          />
        ))}
      </Slider>

      {/* BACKGROUNDS */}
      <Title
        titleText="BACKGROUNDS"
        rotation={2}
        type="md"
        gsapClass="backs_title"
      />
      <Slider {...settings}>
        {backsUrls.map((imageUrl, i) => (
          <div key={i} className="traits_back">
            <Image
              className={styles.backImg}
              src={imageUrl}
              alt={`traits_back_${i + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Traits;
