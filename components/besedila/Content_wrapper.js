import React, { Component } from "react";
import "../../scss/_content_wrapper.scss";
import Content_left_side from "./Content_left_side";
import Content_right_side from "./Content_right_side";

class Content_wrapper extends Component {
  render() {
    return (
      <div className="default_margin">
        <div className="split_sides">
          <Content_left_side />

          <Content_right_side />
        </div>
      </div>
    );
  }
}

export default Content_wrapper;
