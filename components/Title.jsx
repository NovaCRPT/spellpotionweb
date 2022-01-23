import React from "react";
import styles from "@styles/title.module.sass";

function Title({ titleText, rotation = 0, type = "lg" }) {
  return (
    <h2
      className={[styles.title, styles[type]].join(" ")}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {titleText}
    </h2>
  );
}

export default Title;
