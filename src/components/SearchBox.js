import React from "react";
import styles from './searchBox.module.css'

const SearchBox = ({searchChange}) => {
  return (
    <div className={styles.input_container}>
      <input onChange={searchChange} type="search" placeholder="search robots" />
    </div>
  );
};

export default SearchBox;
