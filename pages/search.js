import Link from "next/link";
import React, { Component } from "react";
import Search_results from "../components/search_results/Search_results";

import Layout from "../components/Layout";

class Search extends React.Component {
  render() {
    return (
      <Layout>
        <Search_results />
      </Layout>
    );
  }
}

export default Search;
