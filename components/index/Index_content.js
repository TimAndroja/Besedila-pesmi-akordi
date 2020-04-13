import React, { Component } from "react";
import styles from "../../scss/_index_content.module.scss";
import All_categories from "./All_categories";
import Index_description1 from "./Index_description_1";
import Category_items from "./Category_items";
import axios from "axios";

class Index_content extends Component {
  state = {
    songs_popularno: [],
    songs_slovenske: [], // slovenske and !narodnozabavne
    songs_dalmatinske: [],
    songs_tuje: [],
    songs_narodno_zabavne: [],
    songs_otroske: [],
    songs_ljudske: [],
    songs_slovenska_popevka: [],
    songs_ostalo: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3002/api/songs/popularna")
      .then((res) => this.setState({ songs_popularno: res.data }));

    axios
      .get("http://localhost:3002/api/songs/slovenska")
      .then((res) => this.setState({ songs_slovenske: res.data }));

    axios
      .get("http://localhost:3002/api/songs/dalmatinska")
      .then((res) => this.setState({ songs_dalmatinske: res.data }));

    axios
      .get("http://localhost:3002/api/songs/tuja")
      .then((res) => this.setState({ songs_tuje: res.data }));

    axios
      .get("http://localhost:3002/api/songs/narodna")
      .then((res) => this.setState({ songs_narodno_zabavne: res.data }));

    axios
      .get("http://localhost:3002/api/songs/otroska")
      .then((res) => this.setState({ songs_otroske: res.data }));

    axios
      .get("http://localhost:3002/api/songs/ljudska")
      .then((res) => this.setState({ songs_ljudske: res.data }));

    axios
      .get("http://localhost:3002/api/songs/popevka")
      .then((res) => this.setState({ songs_slovenska_popevka: res.data }));

    axios
      .get("http://localhost:3002/api/songs/ostala")
      .then((res) => this.setState({ songs_ostalo: res.data }));
  }

  render() {
    return (
      <div className={styles.default_margin}>
        <All_categories />

        <div>
          <div className={styles.category_name}>
            <h2>
              <a className={styles.category_hover}>
                {" "}
                Trenutno popularna glasba:{" "}
              </a>
            </h2>
          </div>

          <div className={styles.linebreak}></div>
          <div className={styles.to_grid}>
            <Category_items songs={this.state.songs_popularno} />
          </div>
        </div>
        <Index_description1 />
        <div className={styles.split_categorys}>
          <div>
            <div className={styles.category_name2}>
              <h2>
                <a className={styles.category_hover}>
                  Narodno Zabavna Glasba:{" "}
                </a>{" "}
              </h2>
            </div>
            <div className={styles.linebreak2}></div>
            <div className={styles.to_grid2}>
              <Category_items songs={this.state.songs_slovenske} />
            </div>
          </div>
          <div>
            <div className={styles.category_name2}>
              <h2>
                <a className={styles.category_hover}>Dalmatinske pesmi:</a>
              </h2>
            </div>
            <div className={styles.linebreak2}></div>
            <div className={styles.to_grid3}>
              <Category_items songs={this.state.songs_dalmatinske} />
            </div>
          </div>
        </div>

        <div className={styles.split_categorys}>
          <div>
            <div className={styles.category_name2}>
              <h2>
                <a className={styles.category_hover}>Tuja glasba:</a>
              </h2>
            </div>
            <div className={styles.linebreak}></div>
            <div className={styles.to_grid2}>
              <Category_items songs={this.state.songs_tuje} />
            </div>
          </div>
          <div>
            <div className={styles.category_name2}>
              <h2>
                <a className={styles.category_hover}>Slovenske pesmi:</a>
              </h2>
            </div>
            <div className={styles.linebreak}></div>
            <div className={styles.to_grid3}>
              <Category_items songs={this.state.songs_narodno_zabavne} />
            </div>
          </div>
        </div>
        <div className={styles.index_reklama}></div>
        <div className={styles.split_categorys}>
          <div>
            <div className={styles.category_name2}>
              <h2>
                <a className={styles.category_hover}>Otroške pesmice:</a>
              </h2>
            </div>
            <div className={styles.linebreak}></div>
            <div className={styles.to_grid2}>
              <Category_items songs={this.state.songs_otroske} />
            </div>
          </div>
          <div>
            <div className={styles.category_name2}>
              <h2>
                <a className={styles.category_hover}>Ljudske pesmi:</a>
              </h2>
            </div>
            <div className={styles.linebreak}></div>
            <div className={styles.to_grid3}>
              <Category_items songs={this.state.songs_ljudske} />
            </div>
          </div>
        </div>
        <div className={styles.split_categorys}>
          <div>
            <div className={styles.category_name2}>
              <h2>
                <a className={styles.category_hover}>Slovenska popevka:</a>
              </h2>
            </div>
            <div className={styles.linebreak}></div>
            <div className={styles.to_grid2}>
              <Category_items songs={this.state.songs_slovenska_popevka} />
            </div>
          </div>
          <div>
            <div className={styles.category_name2}>
              <h2>
                <a className={styles.category_hover}>Ostala glasba:</a>
              </h2>
            </div>
            <div className={styles.linebreak}></div>
            <div className={styles.to_grid3}>
              <Category_items songs={this.state.songs_ostalo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index_content;
