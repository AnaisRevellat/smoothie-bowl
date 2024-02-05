import React from "react";
import styles from "./card.module.css";

const Card = ({ id, name, email }) => {
  return (
    <div className={styles.card_box}>
      <img src={`https://robohash.org/${id}?200x200`} alt="bowl card" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
