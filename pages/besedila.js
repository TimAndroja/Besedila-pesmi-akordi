import Link from "next/link";
import React, { Component } from "react";
import Content_wrapper from "../components/besedila/Content_wrapper";

import Layout_noh1 from "../components/Layout_noh1";

class Besedila extends React.Component {
  render() {
    return (
      <Layout_noh1>
        <Content_wrapper />
      </Layout_noh1>
    );
  }
}

export default Besedila;
