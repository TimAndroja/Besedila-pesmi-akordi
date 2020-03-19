import Link from "next/link";
import React, { Component } from "react";
import "../../scss/category_item.scss";

class Category_item extends React.Component {
  get_youtube_image = () => {
    return {
      backgroundImage: `url(https://img.youtube.com/vi/hkadAtcoK_o/0.jpg)` //${Background}
    };
  };

  render() {
    return (
      <div>
        <a className="cardlink">
          <div className="cardwrapper">
            <div className="cardimagediv" style={this.get_youtube_image()}>
              <img
                className="cardimage"
                src="https://img.youtube.com/vi/FOODhMCWJsc/0.jpg"
                alt="test"
              />
            </div>

            <div className="carddata">
              <h5 className="title">{this.props.song.title}</h5>
              <h6 className="author"> glasbena skupina {this.props.song.id}</h6>
              <div className="views">{this.props.song.id} ogledov</div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Category_item;
