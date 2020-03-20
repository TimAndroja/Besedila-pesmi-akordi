import Link from "next/link";
import React, { Component } from "react";
import "../../scss/_category_item.scss";

class Category_item extends React.Component {
  get_youtube_image = () => {
    return {
      backgroundImage: `url(https://img.youtube.com/vi/rEMsjeq43_U/0.jpg)` //${Background}
    };
  };

  render() {
    return (
      <div>
        <a className="cardlink">
          <div className="cardwrapper">
            <div className="card_image_wrapper">
              <div className="cardimagediv" style={this.get_youtube_image()}>
                <img
                  className="cardimage"
                  src="https://img.youtube.com/vi/FOODhMCWJsc/0.jpg"
                  alt="test"
                />
              </div>
              <div className="views">
                {this.props.song.id}0231
                <img src="../static/eye.png" alt="" className="view_image" />
              </div>
            </div>

            <div className="carddata">
              <h5 className="title">{this.props.song.title}</h5>
              <h6 className="author">Skupina Objem{this.props.song.id}</h6>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Category_item;
