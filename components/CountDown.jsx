import React, { useState, useEffect } from "react";
import styles from "@styles/countDown.module.sass";

function CountDown({ target }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className={styles.timer_wrapper}>
      <div className={styles.timer_segment}>
        <span className={styles.timer_segment}>{days}</span>
        <span className="label">Days</span>
      </div>
      <span className="divider"> </span>
      <div className={styles.timer_segment}>
        <span className={styles.timer_segment}>{hours}</span>
        <span className="label">Hours</span>
      </div>
      <span className="divider"> </span>
      <div className={styles.timer_segment}>
        <span className={styles.timer_segment}>{minutes}</span>
        <span className="label">Minutes</span>
      </div>
      <span className="divider"> </span>
      <div className={styles.timer_segment}>
        <span className={styles.timer_segment}>{seconds}</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
}

export default CountDown;
