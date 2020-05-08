import React, { Component } from "react";
import Search_content from "../components/search_results/Search_content";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import head from "next/head";

function top100(props) {
  return (
    <Layout>
      <head></head>
      <Search_content search_results={props.search_results} />
    </Layout>
  );
}

top100.getInitialProps = async function () {
  const res = await fetch(`http://localhost:3002/api/songs/top100`);
  const search_results = await res.json();

  return { search_results };
};

export default top100;
