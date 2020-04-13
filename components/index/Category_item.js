import Link from "next/link";
import React, { Component } from "react";
import styles from "../../scss/_category_item.module.scss";

class Category_item extends React.Component {
  get_youtube_image = (youtube_link) => {
    let id = youtube_link.substring(
      youtube_link.lastIndexOf("=") + 1,
      youtube_link.length
    );
    return {
      backgroundImage: `url("https://img.youtube.com/vi/${id}/0.jpg")`, //${Background}
    };
  };

  render() {
    return (
      <div>
        <a className={styles.cardlink}>
          <div className={styles.cardwrapper}>
            <div className={styles.card_image_wrapper}>
              <div
                className={styles.cardimagediv}
                style={this.get_youtube_image(this.props.song.youtube)}
              >
                <img
                  className={styles.cardimage}
                  src="https://img.youtube.com/vi/FOODhMCWJsc/0.jpg"
                  alt="test"
                />
              </div>
              <div className={styles.stats}>
                <div className={styles.views}>
                  {this.props.song.views}
                  <img
                    src="../static/eye.png"
                    alt=""
                    className={styles.view_image}
                  />
                </div>
              </div>
            </div>

            <div className={styles.carddata}>
              <h5 className={styles.title}>{this.props.song.title}</h5>
              <h6 className={styles.author}>{this.props.song.author}</h6>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Category_item;
