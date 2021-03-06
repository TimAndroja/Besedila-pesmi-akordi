import React, { useState, useEffect } from "react";
import Search_content from "../../components/search_results/Search_content";
import Layout from "../../components/Layout";
import Head from "next/head";
import axios from "axios";
import Link from "next/link"

function popularne_pesmi({searchResults}) {

  useEffect(() => {
    
  }, []);

  return (
    <Layout>
      <Head>
        <title>NAJBOLJ POPULARNE | Besedila pesmi z akordi za kitaro</title>
        <meta
          name="description"
          content="Besedila pesmi in Akordi z video spotom. Mnogi glasbeni izvajlci, Popularna glasba, Dalmatinske pesmi, Narodno zabavna glasba, Otroške pesmice.."
        />
      </Head>
      <Search_content search_results={searchResults} title="POPULARNE PESMI | " />
      <div className="seo_wrapper" style={{ width:"90%", margin:"50px auto"}}> 
      <h2>Trenutno popularna glasba in akordi</h2>
      <p style={{textAlign:"justify", lineHeight:"1.4"}}>Dobrodošli v kategoriji Popularne pesmi. Ponujamo vam veliko zbirko akordov za kitaro, klavir in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno pesem in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in učenju besedil pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na zavihku  <Link href="/dodaj_akorde"> Dodaj svoje
Besedilo/Akorde</Link>. Pesem postane popularna, ko ima veliko gledanost iz tedna v teden. Če rabite pomoč pri igranju kitare ali pa vas morda zanima kaj drugega z glasbenega področja, vam na začetni strani ponujamo glasbene članke, od onsnovnih akordov za kitaro, video lekcij za učenje kitare, do malo bolj teoretičnih tem kot kvintni krog za iskanje akordov, ali pa morda članek za nakup nove akustične oziroma električne kitare ali klavirja(klaviature). Veliko srče pri iskanju pesmi, ki ustreza tebi v kategoriji Popularne pesmi!
</p>
    </div>
    </Layout>
  );
}



export async function getStaticProps() {

    const searchResults_res = await axios.get("https://besedilo-akordi.si/api/songs/search?kategorija=trenutno_popularna")
    const searchResults = await searchResults_res.data;

    return {props: {searchResults}}


}

export default popularne_pesmi;
