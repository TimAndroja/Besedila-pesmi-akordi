import React, { useState, useEffect } from "react";
import Search_content from "../../components/search_results/Search_content";

import Head from "next/head";
import axios from "axios";
import Link from "next/link"
import Layout_noh1 from "../../components/Layout_noh1";

function hrvaske_pesmi({searchResults}) {

  useEffect(() => {
    
  }, []);

  return (
    <Layout_noh1>
      <Head>
        <title>HRVAŠKE PESMI | Dalmatinske pesmi | Ex yu pesmi | Besedila pesmi z akordi za kitaro   </title>
        <meta
          name="description"
          content="Besedila pesmi in Akordi z video spotom. Mnogi glasbeni izvajlci, Popularna glasba, Dalmatinske pesmi, Narodno zabavna glasba, Otroške pesmice.."
        />
      </Head>
      
      <Search_content search_results={searchResults} title="Hrvaške pesmi, Dalmatinske pesmi, Ex yu | " />
      <div className="seo_wrapper" style={{ width:"90%", margin:"50px auto"}}>
        <h2>Hrvaške in dalmatinske pesmi, Ex yu besedila z akordi za kitaro</h2>
      <p style={{ textAlign:"justify", lineHeight:"1.4"}}>Dobrodošli v kategoriji Hrvaške pesmi. Ponujamo vam veliko zbirko akordov za kitaro, klavir in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno hrvaško ali dalmatinsko pesem in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in učenju besedil pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na zavihku  <Link href="/dodaj_akorde"><a> Dodaj svoje
Besedilo/Akorde </a></Link>. Če rabite pomoč pri igranju kitare ali pa vas morda zanima kaj drugega z glasbenega področja, vam na začetni strani ponujamo glasbene članke, od onsnovnih akordov za kitaro, video lekcij za učenje kitare, do malo bolj teoretičnih tem kot kvintni krog za iskanje akordov, ali pa morda članek za nakup nove akustične oziroma električne kitare ali klavirja(klaviature). Veliko srče pri iskanju pesmi, ki ustreza tebi v kategoriji dalmatinske in hrvaške pesmi!
</p>
<div style={{textAlign:"center", margin:"30px auto", width:"100%"}}>
  <h2>Hrvaske pesmi besedilo akordi za kitaro</h2>
  <img src="/Hrvaske-pesmi-besedilo-akordi-za-kitaro.jpg" alt="Ljudske-pesmi-besedilo-akordi-za-kitaro.jpg" width="100%" />
  </div>
</div>
    </Layout_noh1>
  );
}



export async function getStaticProps() {

    const searchResults_res = await axios.get("https://besedilo-akordi.si/api/songs/search?kategorija=dalmatinska")
    const searchResults = await searchResults_res.data;

    return {props: {searchResults}}


}

export default hrvaske_pesmi;
