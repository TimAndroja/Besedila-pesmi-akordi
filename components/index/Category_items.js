import Link from "next/link";
import React, { Component } from "react";
import Category_item from "./Category_item";
import styles from "../../scss/_category_items.module.scss";

class Category_items extends React.Component {
  render() {
    return this.props.songs.map((song) => (
      <Category_item song={song} key={song.id_song} />
    ));
  }
}

export default Category_items;
