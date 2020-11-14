import React from "react";
import cardStyles from "../styles/Components/card.module.css";
export default function Card({ image, header }) {
  return (
    <div className={cardStyles.cardContainer}>
      <div className={cardStyles.cardFlex}>
        <div>
          <div className={cardStyles.cardImageRoot}>
            <img className={cardStyles.cardImage} src={image} />
            <div className={cardStyles.cardImageHeader}>{header}</div>
          </div>
          <div className={cardStyles.cardParagraph}></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
