import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Search_content from "../components/search_results/Search_content";
import Layout from "../components/Layout";
import Head from "next/head";
import axios from "axios";

function brskaj() {


  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (router.query.kategorija) {
      axios
        .get(
          `https://besedilo-akordi.si/api/songs/search?kategorija=${router.query.kategorija}`
        )
        .then((res) => setSearchResults(res.data));
    } else if (router.query.search_query) {
      axios
        .get(
          `https://besedilo-akordi.si/api/songs/search?search_query=${router.query.search_query}`
        )
        .then((res) => setSearchResults(res.data));
    }
  }, [router.reload]);

  return (
    <Layout>
      <Head>
      <title> BRSKAJ AKORDE ZA KITARO | Besedila Pesmi (slovenske angleške otroške božične)</title>
          <meta
            name="description"
            content="Išči našo bazo akordov za kitaro. Zagotovo najdeš nekaj, kar ti bo všeč!"
          />
      </Head>
      <Search_content search_results={searchResults} />
    </Layout>
  );
}

export default brskaj;
