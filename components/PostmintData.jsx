import React from "react";
import Title from "./Title";
import styles from "@styles/postmindData.module.sass";

function PostmintData({ title, info }) {
  return (
    <div className={styles.container}>
      <Title titleText={title} type="sm" />
      {info.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}

export default PostmintData;
