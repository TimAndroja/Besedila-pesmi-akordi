import React, { Component } from "react";
import styles from "../../scss/_content_wrapper.module.scss";
import Content_left_side from "./Content_left_side";
import Content_right_side from "./Content_right_side";
import Category_items from "../index/Category_items";
function Content_wrapper ({song,recommendations_author,recommendations_category}) {
 
    return (
     
      <div className={styles.default_margin}>
        {/* <h1>{this.props.song.title}</h1> */}
        <div className={styles.split_sides}>
          <Content_left_side song={song} />

          <Content_right_side song={song} />
        </div>
        <div className={styles.recommendations_wrapper}>
          {recommendations_author.length > 0 ? (
            <h2>Podobno po avtorju:</h2>
          ) : (
            <div></div>
          )}
          <div className={styles.recommendations}>
            <Category_items songs={recommendations_author} />
          </div>
          {recommendations_category.length > 0 ? (
            <h2>Podobno po kategoriji:</h2>
          ) : (
            <div></div>
          )}
          <div className={styles.recommendations}>
            <Category_items songs={recommendations_category} />
          </div>
        </div>
        <div className={styles.song_description}>KRATKA NAVODILA:
Akordi so v večini pisani prav na tistem delu besede, kjer sledi akordna menjava. Če je isti akord pisan ponovno pomeni da sledi še en takt istega akorda. Večkrat so akordi pisani med taktnicami, kar še bolj natančno določa menjavo akorda. V kolikor vam akordna spremljava ne ustreza ker je previsoka ali prenizka si lahko pomagate s Transponatorjem, ki ga vidite desno poleg besedila. Pri kitari pa pa si lahko v kolikor je pesem prenizka pomagamo tudi s kapodastrom za kitaro.
</div>
      </div>
    );
  }


export default Content_wrapper;
