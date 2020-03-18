import Link from "next/link";
import React, { Component } from "react";
import Layout from "../components/Layout";
import "../scss/style.scss";
import Index_content from "../components/Index_content";
class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Index_content className="default_margin" />
      </Layout>
    );
  }
}

export default Index;
