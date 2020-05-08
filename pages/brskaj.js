import React, { Component } from "react";
import { useRouter } from "next/router";
import Search_content from "../components/search_results/Search_content";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

function Search(props) {
  const {
    query: { kategorija, search_query },
  } = useRouter();
  return (
    <Layout>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Search_content search_results={props.search_results} />
    </Layout>
  );
}

Search.getInitialProps = async function (router = useRouter()) {
  if (router.query.kategorija || router.query.search_query) {
    const path = router.asPath;
    const path_query_part = path.substring(
      path.lastIndexOf("?") + 1,
      path.length
    );
    const res = await fetch(
      `http://localhost:3002/api/songs/search?${path_query_part}`
    );
    const search_results = await res.json();

    return { search_results };
  }
  return [];
};

export default Search;
