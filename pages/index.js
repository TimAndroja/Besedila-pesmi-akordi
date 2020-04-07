import Link from "next/link";
import React, { Component } from "react";
import Layout from "../components//Layout";

import Index_content from "../components/index/Index_content";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Index_content />
      </Layout>
    );
  }
}

export default Index;
