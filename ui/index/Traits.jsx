/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import Title from "@components/Title";
import FramedTrait from "@components/FramedTrait";
import styles from "@styles/traits.module.sass";

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
    "assets/traits_stopper_1.png",
    "assets/traits_stopper_2.png",
    "assets/traits_stopper_3.png",
    "assets/traits_stopper_4.png",
    "assets/traits_stopper_5.png",
    "assets/traits_stopper_6.png",
    "assets/traits_stopper_7.png",
    "assets/traits_stopper_8.png",
    "assets/traits_stopper_9.png",
    "assets/traits_stopper_10.png",
    "assets/traits_stopper_11.png",
    "assets/traits_stopper_12.png",
    "assets/traits_stopper_13.png",
    "assets/traits_stopper_14.png",
  ];

  const necksUrls = [
    "assets/traits_neck_1.png",
    "assets/traits_neck_2.png",
    "assets/traits_neck_3.png",
    "assets/traits_neck_4.png",
    "assets/traits_neck_5.png",
    "assets/traits_neck_6.png",
    "assets/traits_neck_7.png",
    "assets/traits_neck_8.png",
    "assets/traits_neck_9.png",
  ];

  const labelsUrls = [
    "assets/traits_label_1.png",
    "assets/traits_label_2.png",
    "assets/traits_label_3.png",
    "assets/traits_label_4.png",
    "assets/traits_label_5.png",
    "assets/traits_label_6.png",
    "assets/traits_label_7.png",
    "assets/traits_label_8.png",
    "assets/traits_label_9.png",
    "assets/traits_label_10.png",
    "assets/traits_label_11.png",
    "assets/traits_label_12.png",
    "assets/traits_label_13.png",
    "assets/traits_label_14.png",
  ];

  const basesUrls = [
    "assets/traits_base_1.png",
    "assets/traits_base_2.png",
    "assets/traits_base_3.png",
    "assets/traits_base_4.png",
    "assets/traits_base_5.png",
    "assets/traits_base_6.png",
    "assets/traits_base_7.png",
    "assets/traits_base_8.png",
    "assets/traits_base_9.png",
    "assets/traits_base_10.png",
  ];

  const potionsUrls = [
    "assets/traits_potion_1.png",
    "assets/traits_potion_2.png",
    "assets/traits_potion_3.png",
    "assets/traits_potion_4.png",
    "assets/traits_potion_5.png",
    "assets/traits_potion_6.png",
    "assets/traits_potion_1.png",
    "assets/traits_potion_2.png",
    "assets/traits_potion_3.png",
    "assets/traits_potion_4.png",
    "assets/traits_potion_5.png",
    "assets/traits_potion_6.png",
  ];

  const backsUrls = [
    "assets/traits_back_1.png",
    "assets/traits_back_2.png",
    "assets/traits_back_3.png",
    "assets/traits_back_4.png",
    "assets/traits_back_5.png",
    "assets/traits_back_1.png",
    "assets/traits_back_2.png",
    "assets/traits_back_3.png",
    "assets/traits_back_4.png",
    "assets/traits_back_5.png",
  ];

  return (
    <div className={styles.container}>
      <img src="assets/traits_title.png" alt="traits" />
      {/* STOPPERS */}
      <Title titleText="STOPPERS" rotation={2} type="md" />
      <Slider {...settings}>
        {stoppersUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_stopper_${i + 1}`}
          />
        ))}
      </Slider>
      <Slider {...settings} rtl>
        {stoppersUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_stopper_${i + 1}`}
          />
        ))}
      </Slider>
      {/* NECKCLACES */}
      <Title titleText="NECKLACES" rotation={2} type="md" />
      <Slider {...settings}>
        {necksUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_neck_${i + 1}`}
          />
        ))}
      </Slider>
      <Slider {...settings} rtl>
        {necksUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_neck_${i + 1}`}
          />
        ))}
      </Slider>

      {/* LABELS */}
      <Title titleText="LABELS" rotation={2} type="md" />
      <Slider {...settings}>
        {labelsUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_label_${i + 1}`}
          />
        ))}
      </Slider>
      <Slider {...settings} rtl>
        {labelsUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_label_${i + 1}`}
          />
        ))}
      </Slider>

      {/* BASES */}
      <Title titleText="BASES" rotation={2} type="md" />
      <Slider {...settings}>
        {basesUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_base_${i + 1}`}
          />
        ))}
      </Slider>
      <Slider {...settings} rtl>
        {basesUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_base_${i + 1}`}
          />
        ))}
      </Slider>

      {/* POTIONS */}
      <Title titleText="POTIONS" rotation={2} type="md" />
      <Slider {...settings}>
        {potionsUrls.map((imageUrl, i) => (
          <FramedTrait
            image={imageUrl}
            key={i}
            imageAlt={`traits_base_${i + 1}`}
            big
          />
        ))}
      </Slider>

      {/* BACKGROUNDS */}
      <Title titleText="BACKGROUNDS" rotation={2} type="md" />
      <Slider {...settings}>
        {backsUrls.map((imageUrl, i) => (
          <div key={i}>
            <img
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
