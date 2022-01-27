/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "@styles/team.module.sass";

import teamTittle from "@assets/team_title.png";
import team1 from "@assets/team_1.png";
import team2 from "@assets/team_2.png";
import team3 from "@assets/team_3.png";
import team4 from "@assets/team_4.png";

function Team() {
  const el = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el.current,
          start: "start center",
        },
      })
      .from(q(".team_title"), {
        opacity: 0,
        y: 50,
        duration: 0.5,
      })
      .from(q(".team_container div"), {
        stagger: 0.1,
        scale: 0,
      });
  });

  return (
    <div className={styles.container} ref={el}>
      <div className={[styles.title, "team_title"].join(" ")}>
        <Image layout="responsive" src={teamTittle} alt="team" />
      </div>
      <div className={[styles.team_container, "team_container"].join(" ")}>
        <div>
          <Image quality={100} layout="responsive" src={team2} alt="art" />
        </div>
        <div>
          <Image quality={100} src={team1} layout="responsive" alt="brain" />
        </div>
        <div>
          <Image quality={100} layout="responsive" src={team3} alt="tech" />
        </div>
        <div>
          <Image
            quality={100}
            layout="responsive"
            src={team4}
            alt="marketing"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
