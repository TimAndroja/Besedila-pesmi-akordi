import Link from "next/link";
import React, { Component } from "react";
import Category_item from "./Category_item";
import "../scss/category_items.scss";

class Category_items extends React.Component {
  render() {
    return (
      <div className="to_grid">
        <Category_item />
        <Category_item />
        <Category_item />
        <Category_item />
        <Category_item />
        <Category_item />
      </div>
    );
  }
}

export default Category_items;
