import React from "react";
import Card from "./Card";

import styles from "./cardList.module.css";

const CardList = ({ bowls }) => {
  return (
    <>
      <div className={styles.card_container}>
        {bowls.map((bowl, i) => {
          return (
            <Card
              key={bowl.id}
              id={bowl.id}
              name={bowl.name} 
              link={bowl.link}         
            />
          );
        })}
      </div>
      {/* {card2} */}
    </>
  );
};

export default CardList;
