import React from "react";
import styles from "../styles/Components/cover.module.css";

export default function Cover({image, header}) {
  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <div className={styles.imageOuter}>
          <img
            src={image}
            className={styles.image}
            alt="Buildings"
          />
        </div>
      </div>
      <div>
        <div className={styles.textContainer}>
          <div className={styles.text}>{header}</div>
        </div>
      </div>
    </div>
  );
}
