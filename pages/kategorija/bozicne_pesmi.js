import React, { useState, useEffect } from "react";
import Search_content from "../../components/search_results/Search_content";
import Layout from "../../components/Layout";
import Head from "next/head";
import axios from "axios";
import Link from "next/link"

function bozicne_pesmi({searchResults}) {

  useEffect(() => {
    
  }, []);

  return (
    <Layout>
      <Head>
        <title>BOŽIČNE PESMI | Besedila pesmi z akordi za kitaro</title>
        <meta
          name="description"
          content="Besedila pesmi in Akordi z video spotom. Mnogi glasbeni izvajlci, Popularna glasba, Dalmatinske pesmi, Narodno zabavna glasba, Otroške pesmice.."
        />
      </Head>
      <Search_content search_results={searchResults} title="BOŽIČNE PESMI | " />
      <div className="seo_wrapper" style={{ width:"90%", margin:"50px auto"}}> 
      <h2>Božične pesmi in akordi za zimsko glasbeni vzdušje</h2>
      <p style={{ textAlign:"justify", lineHeight:"1.4"}}>Dobrodošli v kategoriji Božične pesmi. Ponujamo vam veliko zbirko akordov za kitaro, klavir in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno božično pesem in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in učenju besedil pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na zavihku  <Link href="/dodaj_akorde"><a href="">Dodaj svoje
Besedilo/Akorde</a></Link>. Če rabite pomoč pri igranju kitare ali pa vas morda zanima kaj drugega z glasbenega področja, vam na začetni strani ponujamo glasbene članke, od onsnovnih akordov za kitaro, video lekcij za učenje kitare, do malo bolj teoretičnih tem kot kvintni krog za iskanje akordov, ali pa morda članek za nakup nove akustične oziroma električne kitare ali klavirja(klaviature). Veliko srče pri iskanju pesmi, ki ustreza tebi v kategoriji božične pesmi!
</p>
<p style={{ textAlign:"justify", lineHeight:"1.4"}}>Božične pesmi, so pesmi, ki nas spremljajo okoli 25. decembra oziroma božiča. Pesmi so veslo obarvane in nam pripeljejo toplo božično vzdušje v hladni zimi. Med obdobjem božiča običajno postavimo smreko in jaslice, pečemo piškote in se družimo z družino oziroma najbljižnimi, med tem pa nas spremljajo božične pesmice. Veliko božičnih pesmi je narejenih tudi za otroke, saj je božič namenjen družinskemu druženju in veselju. Veliko besedil pesmi in akordov najdete tudi na tem portalu, pod to rubriko pa sodijo vse pesmi z akordi ki obsegajo obdobje božiča in novega leta.
</p>
<div style={{textAlign:"center", margin:"30px auto", width:"100%"}}>
  <h2>Božične pesmi besedila akordi za kitaro</h2>
  <img src="/Bozicne-pesmi-besedila-akordi-za-kitaro.jpg" alt="Bozicne-pesmi-besedila-akordi-za-kitaro" width="100%" />
  </div>
</div>
    </Layout>
  );
}



export async function getStaticProps() {

    const searchResults_res = await axios.get("https://besedilo-akordi.si/api/songs/search?kategorija=bozicna")
    const searchResults = await searchResults_res.data;

    return {props: {searchResults}}


}

export default bozicne_pesmi;
