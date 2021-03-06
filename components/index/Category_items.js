import Link from "next/link";
import React, { Component } from "react";
import Category_item from "./Category_item";

class Category_items extends React.Component {
  render() {
    return this.props.songs ? (
      this.props.songs.map((song) => (
        <Category_item song={song} key={song.id_song} />
      ))
    ) : (
      <div></div>
    );
  }
}

export default Category_items;
