import Link from "next/link";
import React, { Component } from "react";
import Category_item from "../index/Category_item";

class Search_items extends React.Component {
  render() {
    return this.props.songs.map((song) => (
      <Category_item key={song.id} song={song} />
    ));
  }
}

export default Search_items;
