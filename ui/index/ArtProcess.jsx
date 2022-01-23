/* eslint-disable @next/next/no-img-element */
import React from "react";
import InfoImage from "@components/InfoImage";
import Title from "@components/Title";
import styles from "@styles/artProcess.module.sass";

function ArtProcess() {
  const processes = [
    {
      titleText: "The Art Process",
      titleType: "lg",
      image: "assets/process_1.png",
      imageAlt: "process_1",
      desc: [
        "Search for inspiration (brain storm).",
        "The first step in making any drawing is to find a source of inspiration. The theme is the central base of the project and where you will have to put most of efforts.",
        "It is important to be aligned with your team. And after several validations then start working on the first draft.",
      ],
    },
    {
      titleText: "DRAFTS",
      titleType: "md",
      image: "assets/process_2.png",
      imageAlt: "process_2",
      desc: [
        "I start to draw a first draft entirely in pencil. In this draft we try to fit the complement to the base (in our case the potion), delimiting the shape with guides, so that it fits in the best possible way once digitized.",
        "Then I make the second draft, this time I use a pen to clearly see the lines using a light tablet, so that the measurements are not deformed.",
      ],
    },
    {
      titleText: "COLORS",
      titleType: "md",
      image: "assets/process_3.png",
      imageAlt: "process_3",
      desc: [
        "When the final draft is done, I clean it up and that's when I do the painting part. Here I use various tools: markers, wood pencils, watercolors, pastel chalks, ballpoint pens, etc. The problem is that if you make a mistake, you must start over. I like to seek perfection.",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {processes.map((pcs, i) => (
        <InfoImage
          key={i}
          titleText={pcs.titleText}
          titleType={pcs.titleType}
          image={pcs.image}
          imageAlt={pcs.imageAlt}
          desc={pcs.desc}
          direction={i % 2 === 0 ? "normal" : "reverse"}
        />
      ))}
      <figure className={styles.digitalization}>
        <Title titleText="DIGITALIZATION" type="md" />
        <img src="assets/process_4.png" alt="process_4" />
        <figcaption className={styles.caption}>
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
