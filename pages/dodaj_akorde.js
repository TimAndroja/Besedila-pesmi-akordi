import Link from "next/link";
import React, { Component } from "react";
import Layout from "../components/Layout";
import Add_chords_content from "../components/add_chords/Add_chords_contetnt";
import "../scss/style.scss";

class Dodaj_akorde extends React.Component {
  render() {
    return (
      <Layout>
        <Add_chords_content />
      </Layout>
    );
  }
}

export default Dodaj_akorde;
