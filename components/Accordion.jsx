import React from "react";
import styles from "@styles/accordion.module.sass";

function Accordion({ faq }) {
  return (
    <div className={styles.container}>
      {faq.map(({ question, answer }, i) => (
        <details open={i === 0} key={i}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

export default Accordion;
