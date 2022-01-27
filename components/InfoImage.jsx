import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "@styles/infoImage.module.sass";

function InfoImage({
  titleImage,
  imageAlt,
  rotation,
  desc,
  image,
  direction = "normal",
}) {
  const el = useRef();
  const tl = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.selector(el);

  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: el.current,
          start: "top center-=100px",
        },
      })
      .from(q(".image_title"), {
        opacity: 0,
        y: -50,
        duration: 0.7,
      })
      .from(q(".process_image"), {
        opacity: 0,
        x: -50,
        duration: 0.7,
      })
      .from(q("p"), {
        stagger: 0.3,
        opacity: 0,
        y: 50,
      });
  });

  return (
    <figure
      className={[styles.info_image, styles[direction]].join(" ")}
      ref={el}
    >
      <div
        className={[styles.image, "process_image"].join(" ")}
        style={{ transform: `rotation(${rotation}deg)` }}
      >
        <Image src={image} alt={imageAlt} />
      </div>
      <figcaption className={styles.info}>
        <Image
          className="image_title"
          src={titleImage}
          layout="responsive"
          alt={imageAlt}
        />
        {desc.map((text, i) => (
          <p
            key={i}
            className={styles.desc}
            style={{ transform: `rotation(${rotation}deg)` }}
          >
            {text}
          </p>
        ))}
      </figcaption>
    </figure>
  );
}

export default InfoImage;
