import React, { Component } from "react";
import styles from "../../scss/_content_wrapper.module.scss";
import Content_left_side from "./Content_left_side";
import Content_right_side from "./Content_right_side";
import Category_items from "../index/Category_items";
class Content_wrapper extends Component {
  render() {
    return (
      <div className={styles.default_margin}>
        {/* <h1>{this.props.song.title}</h1> */}
        <div className={styles.split_sides}>
          <Content_left_side song={this.props.song} />

          <Content_right_side song={this.props.song} />
        </div>

        <div className={styles.recommendations}>
          <Category_items songs={this.props.recommendations} />
        </div>
      </div>
    );
  }
}

export default Content_wrapper;
