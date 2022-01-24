/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@styles/team.module.sass";
function Team() {
  return (
    <div className={styles.container}>
      <img src="assets/team_title.png" alt="team" />
      <div className={styles.team_container}>
        <img src="assets/team_1.png" alt="brain" />
        <img src="assets/team_2.png" alt="art" />
        <img src="assets/team_3.png" alt="tech" />
        <img src="assets/team_4.png" alt="marketing" />
      </div>
    </div>
  );
}

export default Team;
