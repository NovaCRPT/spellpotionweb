import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Accordion from "@components/Accordion";
import styles from "@styles/faq.module.sass";

import faq_tittle from "@assets/faq_title.png";

function FAQ() {
  const faq = [
    {
      question: "What is SpellPotions?",
      answer:
        "SpellPotions is a collection of 2983 real hand-drawn, uniquely generated NFTs, powered by Solana Blockchain. The spell that I will try to teach you is very advanced magic. Take the potion.",
    },
    {
      question: "When is the drop date?",
      answer: "The drop date will be announced soon. Stay tuned.",
    },
    {
      question: "What is the mint cost?",
      answer: "All Spell Potions have a mint cost of 0.99 SOL.",
    },
    {
      question: "How do I get a SpellPotion?",
      answer:
        "You can mint a SpellPotions on our website. We strongly recommend buying through the phantom wallet. ",
    },
    {
      question: "Can I get more than one SpellPotion? ",
      answer: "You can buy 1 per transaction",
    },
    {
      question: "Will there be a secondary market?",
      answer:
        "Yes, we are in touch with major marketplaces to ensure a listing right after the drop.",
    },
    {
      question: " Will there be secondary sale royalties?",
      answer:
        "Yes, all SpellPotion are subjected to 5% royalties. We will be contributing 100% of this back into community fund for the following roadmap milestones. Thins fund will allow us to grow and improve SpellPotions ecosystem. ",
    },
  ];

  const el = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el.current,
          start: "top center",
        },
      })
      .from(q(".faq_title"), {
        opacity: 0,
        y: 50,
      })
      .from(q(".faq_accordion"), {
        stagger: 0.2,
        rotate: 0,
        opacity: 0,
        y: 50,
      });
  });

  return (
    <div className={styles.container} ref={el}>
      <div className={[styles.title, "faq_title"].join(" ")}>
        <Image
          layout="responsive"
          src={faq_tittle}
          alt="frequently asked questions"
        />
      </div>
      <Accordion faq={faq} gsapClass="faq_accordion" />
    </div>
  );
}

export default FAQ;
