import React, { Component } from "react";
import Category from "./Category";
import "../scss/Index_content.scss";
import All_categorys from "./All_categorys";

class Index_content extends Component {
  render() {
    return (
      <div className="default_margin">
        <All_categorys />
        <Category value="Najbolj gledano:" />
        <Category value="Slovenske pesmi:" />
        <Category value="Ljudske pesmi:" />
      </div>
    );
  }
}

export default Index_content;
