import React, { Component } from "react";
import "../../scss/_add_chords_content.scss";
import Instructions from "./Instructions";
import Form_display_wrapper from "./Form_display_wrapper";

class Add_chords_content extends Component {
  render() {
    return (
      <div>
        <div className="default_margin">
          <Instructions />
        </div>
        <div className="default_margin">
          <Form_display_wrapper />
        </div>
      </div>
    );
  }
}

export default Add_chords_content;
