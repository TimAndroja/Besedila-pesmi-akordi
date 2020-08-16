import React, { useState, useEffect } from "react";
import Search_content from "../components/search_results/Search_content";
import Layout from "../components/Layout";
import Head from "next/head";
import axios from "axios";
import fetch from "isomorphic-unfetch";

function top100(props) {
  const [searchResults, setSearchResult] = useState([]);
  useEffect(() => {
    axios
      .get("https://besedilo-akordi.si/api/songs/top100")
      .then((res) => setSearchResult(res.data));
  }, []);


  
 

  return (
    <Layout>
      <Head>
        <title>TOP 100 NAJBOLJ GLEDANO | Besedila pesmi z akordi za kitaro</title>
        <meta
          name="description"
          content="Besedila pesmi in Akordi z video spotom. Mnogi glasbeni izvajlci, Popularna glasba, Dalmatinske pesmi, Narodno zabavna glasba, Otroške pesmice.."
        />
      </Head>
      <Search_content search_results={searchResults} title="NAJBOLJ GLEDANO | " />
    </Layout>
  );
}

export default top100;
