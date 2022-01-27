/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import InfoImage from "@components/InfoImage";
import styles from "@styles/artProcess.module.sass";

import artTitlte_1 from "@assets/art_title_1.png";
import artTitlte_2 from "@assets/art_title_2.png";
import artTitlte_3 from "@assets/art_title_3.png";
import artTitlte_4 from "@assets/art_title_4.png";

import process1 from "@assets/process_1.png";
import process2 from "@assets/process_2.png";
import process3 from "@assets/process_3.png";
import digitalization from "@assets/process_4.png";

function ArtProcess() {
  const processes = [
    {
      titleImage: artTitlte_1,
      image: process1,
      imageAlt: "art process",
      desc: [
        "Search for inspiration (brain storm).",
        "The first step in making any drawing is to find a source of inspiration. The theme is the central base of the project and where you will have to put most of efforts.",
        "It is important to be aligned with your team. And after several validations then start working on the first draft.",
      ],
    },
    {
      titleImage: artTitlte_2,
      image: process2,
      imageAlt: "drafts",
      desc: [
        "I start to draw a first draft entirely in pencil. In this draft we try to fit the complement to the base (in our case the potion), delimiting the shape with guides, so that it fits in the best possible way once digitized.",
        "Then I make the second draft, this time I use a pen to clearly see the lines using a light tablet, so that the measurements are not deformed.",
      ],
    },
    {
      titleImage: artTitlte_3,
      image: process3,
      imageAlt: "colors",
      desc: [
        "When the final draft is done, I clean it up and that's when I do the painting part. Here I use various tools: markers, wood pencils, watercolors, pastel chalks, ballpoint pens, etc. The problem is that if you make a mistake, you must start over. I like to seek perfection.",
      ],
    },
  ];

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
        y: 50,
        duration: 0.7,
      })
      .from(q(".process_image"), {
        opacity: 0,
        y: 50,
        duration: 0.7,
      })
      .from(q(".paragraph"), {
        stagger: 0.3,
        opacity: 0,
        y: 50,
      });
  }, []);

  return (
    <div className={styles.container}>
      {processes.map((pcs, i) => (
        <InfoImage
          key={i}
          titleImage={pcs.titleImage}
          titleType={pcs.titleType}
          image={pcs.image}
          imageAlt={pcs.imageAlt}
          desc={pcs.desc}
          direction={i % 2 === 0 ? "normal" : "reverse"}
        />
      ))}
      <figure className={styles.digitalization} ref={el}>
        <Image
          src={artTitlte_4}
          layout="responsive"
          alt="digitalization"
          className="image_title"
        />
        <Image
          src={digitalization}
          alt="digitalization image"
          layout="responsive"
          className="process_image"
        />
        <figcaption className={[styles.caption, "paragraph"].join(" ")}>
          The last step would be the digitization of the drawings. A
          professional studio camera or scanner is used to digitize the
          drawings. You have to take care of the light, that everything is
          digitized in the same way. Each drawing must be digitized! bases,
          accessories, labels, plugs, backgrounds, etc
        </figcaption>
      </figure>
    </div>
  );
}

export default ArtProcess;
