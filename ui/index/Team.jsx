/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@styles/team.module.sass";
import Image from "next/image";

import teamTittle from "@assets/team_title.png";
import team1 from "@assets/team_1.png";
import team2 from "@assets/team_2.png";
import team3 from "@assets/team_3.png";
import team4 from "@assets/team_4.png";

function Team() {
  return (
    <div className={styles.container}>
      <Image src={teamTittle} alt="team" />
      <div className={styles.team_container}>
        <div>
          <Image layout="responsive" src={team2} alt="art" />
        </div>
        <div>
          <Image src={team1} layout="responsive" alt="brain" />
        </div>
        <div>
          <Image layout="responsive" src={team3} alt="tech" />
        </div>
        <div>
          <Image layout="responsive" src={team4} alt="marketing" />
        </div>
      </div>
    </div>
  );
}

export default Team;
