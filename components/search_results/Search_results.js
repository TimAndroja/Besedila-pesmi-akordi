import React, { Component } from "react";
import styles from "../../scss/_search_results.module.scss";
import Search_items from "./Search_items";
import axios from "axios";
import All_categories from "../index/All_categories";

class Search_results extends Component {
  state = {
    songs_res: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => this.setState({ songs_res: res.data }));
  }

  render() {
    return (
      <div className={styles.search_margin}>
        <All_categories />
        <div className={styles.grid}>
          <Search_items songs={this.state.songs_res} />
        </div>
      </div>
    );
  }
}

export default Search_results;
