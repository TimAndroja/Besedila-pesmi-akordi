import React, { useState, useEffect } from "react";
import Search_content from "../../components/search_results/Search_content";
import Layout from "../../components/Layout";
import Head from "next/head";
import axios from "axios";
import Link from "next/link"

function slovenska_popevka({searchResults}) {

  useEffect(() => {
    
  }, []);

  return (
    <Layout>
      <Head>
        <title>SLOVENSKA POPEVKA | Besedila pesmi z akordi za kitaro</title>
        <meta
          name="description"
          content="Besedila pesmi in Akordi z video spotom. Mnogi glasbeni izvajlci, Popularna glasba, Dalmatinske pesmi, Narodno zabavna glasba, Otroške pesmice.."
        />
      </Head>
      <Search_content search_results={searchResults} title="SLOVENSKA POPEVKA | " />
      <div className="seo_wrapper" style={{ width:"90%", margin:"50px auto"}}>
        <h2>Akordi in besedila pesmi slovenske popevke</h2>
      <p style={{ textAlign:"justify", lineHeight:"1.4"}}>Dobrodošli v kategoriji Slovenska Popevka. Ponujamo vam veliko zbirko akordov za kitaro, klavir in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno Slovensko popevko  in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in učenju besedil pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na zavihku  <Link href="/dodaj_akorde"> Dodaj svoje
Besedilo/Akorde</Link>. Če rabite pomoč pri igranju kitare ali pa vas morda zanima kaj drugega z glasbenega področja, vam na začetni strani ponujamo glasbene članke, od onsnovnih akordov za kitaro, video lekcij za učenje kitare, do malo bolj teoretičnih tem kot kvintni krog za iskanje akordov, ali pa morda članek za nakup nove akustične oziroma električne kitare ali klavirja(klaviature). Veliko srče pri iskanju svoje popevke, ki ustreza tebi v kategoriji slovenska popevka! 
</p>
<p style={{ textAlign:"justify", lineHeight:"1.4"}}> Slovenska popevka, ki se je nekdaj imenovala Dnevi slovenske zabavne glasbe je slovenski festival petja in zabavne glasbe, ki se je prvič pojavil leta 1962 in deloval vse do leta 1983, nato pa po premoru zopet začel delovati leta 1998. Festival je doživel svoje zlato obdobje v 80. letih, ko so nam bile predstavljene zimzelene uspešnice kot so Zemlja pleše orion, Med iskrenimi ljudmi, Maček v žaklju, Poletna noč in mnogo več.
</p>
<div style={{textAlign:"center", margin:"30px auto", width:"100%"}}>
  <h2>Slovenska popevka besedilo pesmi akordi za kitaro</h2>
  <img src="/Slovenska-popevka-besedilo-akordi-za-kitaro.jpg" alt="Slovenska-popevka-besedilo-akordi-za-kitaro" width="100%" />
  </div>
</div>
    </Layout>
  );
}



export async function getStaticProps() {

    const searchResults_res = await axios.get("https://besedilo-akordi.si/api/songs/search?kategorija=popevka")
    const searchResults = await searchResults_res.data;

    return {props: {searchResults}}

}

export default slovenska_popevka;
