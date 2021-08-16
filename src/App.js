import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: "",
    };
  }
  componentDidMount() {
    const loadMonsters = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const monsters = await response.json();

      this.setState({ monsters });
    };

    loadMonsters();
  }

  handleSearch = (e) => this.setState({ searchText: e.target.value });

  searchMonsters = () => {
    const { monsters, searchText } = this.state;

    const searchedMonsters = !monsters[1]
      ? monsters
      : monsters.filter((monster) =>
          monster.name.toLowerCase().includes(searchText.toLowerCase())
        );

    return searchedMonsters;
  };

  render() {
    const searchedMonsters = this.searchMonsters();

    return (
      <div className="App">
        <h1 className="app-header">Monsters Rolodex</h1>
        <SearchBox
          text={this.state.searchText}
          handleChange={this.handleSearch}
          placeholder="search monsters"
        />
        <CardList monsters={searchedMonsters}></CardList>
      </div>
    );
  }
}

export default App;
