import React, { Component } from "react";
import styles from "../../scss/_instructions.module.scss";

class Instructions extends Component {
  render() {
    return (
      <div>
        <h2>
          <div className={styles.opis1}>
            PESMI GLASBA BESEDILA AKORDI za kitaro aktualnih ansamblov, bandov,
            glasbenih skupin, glasbenikov in pevcev. Za vas smo izdelali
            glasbeni portal, na katerem lahko istočasno gledate videospot ter
            spremljate besedilo, akorde in tablaturo vaše prilubljene skladbe.
            Vabimo vas, da tudi vi prispevate priljubljene pesmi z akordi in
            besedilom ter povezavo do ustreznega videa. Naj vam bo naš portal v
            pomoč in vam želimo veliko glasbenih užitkov.
          </div>
        </h2>
      </div>
    );
  }
}

export default Instructions;
