import React, { useState, useEffect } from "react";
import Search_content from "../../components/search_results/Search_content";
import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link"
import axios from "axios";


function slovenske_pesmi({searchResults}) {

  useEffect(() => {
    
  }, []);

  return (
    <Layout>
      <Head>
        <title>SLOVENSKE PESMI | Besedila pesmi z akordi za kitaro</title>
        <meta
          name="description"
          content="Besedila pesmi in Akordi z video spotom. Mnogi glasbeni izvajlci, Popularna glasba, Dalmatinske pesmi, Narodno zabavna glasba, Otroške pesmice.."
        />
      </Head>
      <Search_content search_results={searchResults} title="SLOVENSKE PESMI | " />
      <div className="seo_wrapper" style={{ width:"90%", margin:"50px auto"}}>

      
      <h2>Slovenske pesmi, akordi in besedila slovenskih pesmi</h2>
    <p style={{margin:"10px 0", textAlign:"justify", lineHeight:"1.4"}}>Dobrodošli v kategoriji Slovenske pesmi. Ponujamo vam veliko zbirko akordov za kitaro, klavir in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno slovensko pesem in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in učenju besedil pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na zavihku  <Link href="/dodaj_akorde"> Dodaj svoje
Besedilo/Akorde</Link>. Če rabite pomoč pri igranju kitare ali pa vas morda zanima kaj drugega z glasbenega področja, vam na začetni strani ponujamo glasbene članke, od onsnovnih akordov za kitaro, video lekcij za učenje kitare, do malo bolj teoretičnih tem kot kvintni krog za iskanje akordov, ali pa morda članek za nakup nove akustične oziroma električne kitare ali klavirja(klaviature). Veliko srče pri iskanju pesmi, ki ustreza tebi v kategoriji slovenske pesmi!
</p>
<div style={{textAlign:"center", margin:"30px auto", width:"100%"}}>
  <h2>Slovenske pesmi besedilo pesmi akordi za kitaro</h2>
  <img src="/Slovenske-pesmi-besedilo-pesmi-akordi-za-kitaro.jpg" alt="Slovenske-pesmi-besedilo-pesmi-akordi-za-kitaro" width="100%" />
  </div>
  </div>
    </Layout>
  );
}



export async function getStaticProps() {

    const searchResults_res = await axios.get("https://besedilo-akordi.si/api/songs/search?kategorija=slovenska")
    const searchResults = await searchResults_res.data;

    return {props: {searchResults}}


}

export default slovenske_pesmi;
