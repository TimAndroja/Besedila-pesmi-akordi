import Link from "next/link";
import React, { Component } from "react";
import Category_items from "./Category_items";
import "../scss/category.scss";
class Category extends React.Component {
  render() {
    return (
      <div>
        <div className="category_name">
          <h2>Kategorija:</h2>
        </div>
        <div className="linebreak"></div>
        <div>
          <Category_items />
        </div>
      </div>
    );
  }
}

export default Category;
