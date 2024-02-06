import React from "react";
import styles from "./card.module.css";

const Card = ({ id, name, email, link }) => {
  return (
    <div className={styles.card_box}>
      <div className={styles.bowl_img_container}>
        <img src={link} alt="bowl card" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
