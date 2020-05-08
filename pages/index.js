import Link from "next/link";
import React, { Component } from "react";
import Layout from "../components//Layout";
import Index_content from "../components/index/Index_content";
import Head from "next/head";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Besedila pesmi in Akordi za kitaro</title>
          <meta
            name="description"
            content="Besedila pesmi in Akordi z video spotom. Mnogi glasbeni izvajlci, Popularna glasba, Dalmatinske pesmi, Narodno zabavna glasba, Otroške pesmice.."
          />
        </Head>
        <Index_content />
      </Layout>
    );
  }
}

export default Index;
