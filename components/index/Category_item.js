import Link from "next/link";
import React, { Component } from "react";
import styles from "../../scss/_category_item.module.scss";

class Category_item extends React.Component {
  get_youtube_image = () => {
    return {
      backgroundImage: `url(https://img.youtube.com/vi/rEMsjeq43_U/0.jpg)`, //${Background}
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
                style={this.get_youtube_image()}
              >
                <img
                  className={styles.cardimage}
                  src="https://img.youtube.com/vi/FOODhMCWJsc/0.jpg"
                  alt="test"
                />
              </div>
              <div className={styles.stats}>
                <div className={styles.views}>
                  {this.props.song.id}0231
                  <img
                    src="../static/eye.png"
                    alt=""
                    className={styles.view_image}
                  />
                </div>

                <div className={styles.likes}>
                  {this.props.song.id}31
                  <img
                    src="../static/upvote.png"
                    alt=""
                    className={styles.like_image}
                  />
                </div>
              </div>
            </div>

            <div className={styles.carddata}>
              <h5 className={styles.title}>{this.props.song.title}</h5>
              <h6 className={styles.author}>
                Skupina Objem{this.props.song.id}
              </h6>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Category_item;
