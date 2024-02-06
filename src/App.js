import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import styles from "./app.module.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://anaisrevellat.github.io/host_api/smoothiebowls.json")
      .then((response) => response.json())
      .then((products) => this.setState({ products: products }));
  }

  //here it is necessary to use an arrow function for SearchBox to have "this" in the right context

  onSearchChange = (ev) => {
    this.setState({
      searchfield: ev.target.value,
    });
  };

  render() {
    const filteredBowls = this.state.products.filter((bowl) => {
      return bowl.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className={styles.main_container}>
        <h1 className="hero_title">Smoothie Bowl</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList bowls={filteredBowls} />
      </div>
    );
  }
}

export default App;
