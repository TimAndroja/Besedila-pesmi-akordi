import React, { Component } from "react";
import Layout from "../components/Layout";
import Add_chords_content from "../components/add_chords/Add_chords_contetnt";
import Head from "next/head";

class Dodaj_akorde extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Dodaj svoje Besedilo in Akorde pesmi.</title>
          <meta
            name="description"
            content="Vljudno vabljeni, da delite tudi svoja besedila in akorde z ostalimi uporabniki in vsem omogočite še več glasbenih užitkov."
          />
        </Head>
        <Add_chords_content />
      </Layout>
    );
  }
}

export default Dodaj_akorde;
