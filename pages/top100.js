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
        <title>Top 100 gledano - Besedila pesmi in Akordi za kitaro</title>
        <meta
          name="description"
          content="Besedila pesmi in Akordi z video spotom. Mnogi glasbeni izvajlci, Popularna glasba, Dalmatinske pesmi, Narodno zabavna glasba, Otroške pesmice.."
        />
      </Head>
      <Search_content search_results={searchResults} />
    </Layout>
  );
}

export default top100;
