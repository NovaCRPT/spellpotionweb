import React from "react";
import Image from "next/image";
import Title from "@components/Title";
import PremintData from "@components/PremintData";
import PostmintData from "@components/PostmintData";
import styles from "@styles/roadmap.module.sass";

import roadmap_title from "@assets/roadmap_title.png";
import premint_title from "@assets/premint_title.png";
import postmint_title from "@assets/postmint_title.png";

import roadmap_back_1 from "@assets/roadmap_back_1.png";
import roadmap_back_2 from "@assets/roadmap_back_2.png";
import roadmap_back_3 from "@assets/roadmap_back_3.png";
import roadmap_back_4 from "@assets/roadmap_back_4.png";
import roadmap_back_5 from "@assets/roadmap_back_5.png";

function Roadmap() {
  const premint = [
    {
      image: roadmap_back_1,
      imageAlt: "step 1 background",
      title: "art sharing",
      step: "1",
      info: "This is who we are, 100% hand drawn art. That is why we will share images of our progress. We will create a YouTube channel and upload videos to see how we are working with the potions, accessories and back.",
      rotation: 2,
    },
    {
      image: roadmap_back_2,
      imageAlt: "step 2 background",
      title: "collaboration",
      step: "2",
      info: "We will do different collaborations between projects to make ourselves known, also you can earn rewards for participating in these collaborations. Those collabs will be most of them on Twitter and Discord.",
      rotation: -2,
    },
    {
      image: roadmap_back_3,
      imageAlt: "step 3 background",
      title: "giveaways",
      step: "3",
      info: "Have you ever won an airdrop? Well, this time may be the first. We want people to know the magic of SpellPotions and we will giveway some of our most special and valuable NFTs. And also other NFTS from other projects that we begin to collaborate with.",
      rotation: 2,
    },
    {
      image: roadmap_back_4,
      imageAlt: "step 4 background",
      title: "quizzes and minigames",
      step: "4",
      info: "We want to show the potential of our team. That is why our development team will create a very simple minigame, developed on Unity, so that the community can see what we can do. We also create some fun quizzes in which there will be interesting rewards for the participants.",
      rotation: -2,
    },
    {
      image: roadmap_back_5,
      imageAlt: "step 5 background",
      title: "listing",
      step: "5",
      info: "There are more and more places, Websites, Twitter…  where you can show all the information of your project and the date of the mint. We believe that these sites give a lot of visibility to the project, and we will get in touch with all of them to listen to us.",
      rotation: 2,
    },
  ];

  const postmint = [
    {
      title: "THE CHOSEN",
      info: [
        "A series of events will begin, where SpellPotions holders will have the opportunity to solve a puzzles to be the represantatives of the DAO. The puzzles will be delivered in NFT format to Spellpotions holders.",
        "-Unlock  First trial of the chosen event",
        "-Maarnag  Second trial of the chosen event.",
        "There will also be rewards of NFTs and Solana",
      ],
    },
    {
      title: "METAGALLERY",
      info: [
        "Creation of the gallery in 3D, first proofs of concept will come out followed by the mint finish. After interactions and tests with our holders, we will begin the development of our own marketplace in the gallery.",
      ],
    },
    {
      title: "THE BURN",
      info: [
        "NFTs will be purchased periodically to make the collection deflationary",
      ],
    },
    {
      title: "THE TOKEN",
      info: [
        "There will be a token in SpellPotions. And of course, we will carry out an airdrop among the project holders. This token utility will be for governance, metagallery transactions, buying new NFTs, staking…",
        "Our goal is for this token to be essential for the future of the project and to be as useful as possible.",
        "You will receive an airdrop based on the number of roles you have achieved and NFTs you have from Spellpotion, but you must always have at least 1 NFT to be able to receive the airdrop",
      ],
    },
    {
      title: "AIRDROP",
      info: [
        "You will receive an airdrop based on the number of roles you have achieved and NFTs you have from Spellpotion, but you must always have at least 1 NFT to be able to receive the airdrop",
      ],
    },
    {
      title: "MARKETING AND COLLABS",
      info: [
        "Our purpose is to have an active, healthy, and fun community. And we want it to grow organically. We will work with top influencers, we will do promotions and collabs. And we will be listed in the best NFTs promotion websites.",
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>
          <Image layout="responsive" src={roadmap_title} alt="Roadmap" />
        </div>
        <p>
          We believe that it will be 3-4 months of intense work until we have
          all the drawings made. During this process we will try to build a
          community that believes in our project. A healthy, solid and fun
          community.
        </p>
      </div>
      <div className="premint">
        <div className={styles.premint_title}>
          <Image
            layout="responsive"
            src={premint_title}
            alt="stage 1: pre-mint"
          />
        </div>
        <div className={styles.premint_steps}>
          {premint.map((box, i) => (
            <PremintData
              key={i}
              image={box.image}
              imageAlt={box.imageAlt}
              title={box.title}
              step={box.step}
              info={box.info}
              rotation={box.rotation}
            />
          ))}
        </div>
      </div>

      <div className="postmint">
        <div className={styles.premint_title}>
          <Image
            layout="responsive"
            src={postmint_title}
            alt="stage 2: post-mint"
          />
        </div>
        <div className={styles.post_steps}>
          {postmint.map((box, i) => (
            <PostmintData key={i} title={box.title} info={box.info} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
