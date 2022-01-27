import React from "react";
import Title from "./Title";
import styles from "@styles/postmindData.module.sass";

function PostmintData({ title, info, gsapClass }) {
  return (
    <div className={[styles.container, gsapClass].join(" ")}>
      <Title titleText={title} type="sm" gsapClass={`${gsapClass}_title`} />
      {info.map((para, i) => (
        <p key={i} className={`${gsapClass}_desc`}>
          {para}
        </p>
      ))}
    </div>
  );
}

export default PostmintData;
