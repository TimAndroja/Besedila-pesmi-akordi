import React, { Component } from "react";
import styles from "../../scss/_add_chords_content.module.scss";
import Instructions from "./Instructions";
import Form_display_wrapper from "./Form_display_wrapper";

class Add_chords_content extends Component {
  render() {
    return (
      <div>
        <div className={styles.default_margin}>
          <Instructions />
        </div>
        <div className={styles.default_margin}>
          <Form_display_wrapper />
        </div>
      </div>
    );
  }
}

export default Add_chords_content;
