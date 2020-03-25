import React, { Component } from "react";
import "../../scss/_form_display_wrapper.scss";
import Form from "./Form";
import Display from "./Display";

/* 210 × 297 */

class Form_display_wrapper extends Component {
  render() {
    return (
      <div className="split_form_display">
        <div className="form_wrapper">
          <Form />
        </div>
        <div className="display_wrapper">
          <Display />
        </div>
      </div>
    );
  }
}

export default Form_display_wrapper;
