import Link from "next/link";
import React, { Component } from "react";
import Category_item from "./Category_item";
import "../../scss/category_items.scss";

class Category_items extends React.Component {
  render() {
    return this.props.songs.map(song => (
      <Category_item key={song.id} song={song} />
    ));
  }
}

export default Category_items;
