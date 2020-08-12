import Link from "next/link";
import React, { Component } from "react";
import styles from "../../scss/_category_item.module.scss";

class Category_item extends React.Component {
  render() {
    return (
      <Link
        href="/pesmi/[id]"
        as={`/pesmi/${
          this.props.song.title
            .toLowerCase()
            .replace(/\s/g, "-")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") +
          "-akordi-za-kitaro-" +
          this.props.song.id_song
        }`}
      >
        <div>
          <a className={styles.cardlink}>
            <div className={styles.cardwrapper}>
              <div className={styles.card_image_wrapper}>
                <div
                  className={styles.cardimagediv}
                  style={{
                    backgroundImage: `url(https://besedilo-akordi.si/api/${this.props.song.youtube_image_name})`,
                  }}
                >
                  <img
                    className={styles.cardimage}
                    src="../static/card_image.jpg"
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
                <h6 className={styles.author}>
                  {this.props.song.author.length > 0 ? (
                    this.props.song.author
                  ) : (
                    <div>&nbsp;</div>
                  )}
                </h6>
              </div>
            </div>
          </a>
        </div>
      </Link>
    );
  }
}

export default Category_item;
