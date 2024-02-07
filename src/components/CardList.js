import React from "react";
import Card from "./Card";

import styles from "./cardList.module.css";

const CardList = ({ bowls }) => {
  // if(true){
  //   throw new Error('There is an issue')
  // }
  return (
    <>
      <div className={styles.card_container}>
        <section className={styles.sub_card_container}>
        {bowls.map((bowl, i) => {
          return (
            <Card
              key={bowl.id}
              id={bowl.id}
              name={bowl.name} 
              link={bowl.link} 
              price={bowl.price}        
            />
          );
        })}
        </section>
      </div>
      {/* {card2} */}
    </>
  );
};

export default CardList;
