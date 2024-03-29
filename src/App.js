import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import styles from "./app.module.css";
import ErrorBoudry from "./components/ErrorBoundry";

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
    })
    return !this.state.products.length ? (
      <h1>LOADING</h1>
    ) : (
      <div className={styles.main_container}>
        <h1 className={styles.hero_title}>Smoothie Bowl</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ErrorBoudry>
        <CardList bowls={filteredBowls} />
        </ErrorBoudry>
      </div>
    );
  }
}

export default App;
