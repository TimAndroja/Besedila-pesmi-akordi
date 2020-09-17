import React, { useState, useEffect } from "react";
import Search_content from "../../components/search_results/Search_content";
import Layout from "../../components/Layout";
import Head from "next/head";
import axios from "axios";
import Link from "next/link"

function ljudske_pesmi({searchResults}) {

  useEffect(() => {
    
  }, []);

  return (
    <Layout>
      <Head>
        <title>LJUDSKE PESMI | Besedila pesmi z akordi za kitaro</title>
        <meta
          name="description"
          content="Besedila pesmi in Akordi z video spotom. Mnogi glasbeni izvajlci, Popularna glasba, Dalmatinske pesmi, Narodno zabavna glasba, Otroške pesmice.."
        />
      </Head>
      <Search_content search_results={searchResults} title="LJUDSKE PESMI | " />
      <p style={{margin:"50px 5%", textAlign:"justify", lineHeight:"1.4"}}>Dobrodošli v kategoriji Ljudeske pesmi. Ponujamo vam veliko zbirko akordov za kitaro, klavir in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno ljudsko pesem in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in učenju besedil pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na zavihku  <Link href="/dodaj_akorde"> Dodaj svoje
Besedilo/Akorde</Link>. Če rabite pomoč pri igranju kitare ali pa vas morda zanima kaj drugega z glasbenega področja, vam na začetni strani ponujamo glasbene članke, od onsnovnih akordov za kitaro, video lekcij za učenje kitare, do malo bolj teoretičnih tem kot kvintni krog za iskanje akordov, ali pa morda članek za nakup nove akustične oziroma električne kitare ali klavirja(klaviature). Veliko srče pri iskanju pesmi, ki ustreza tebi v kategoriji Ljudske pesmi!
</p>
<p style={{margin:"50px 5%", textAlign:"justify", lineHeight:"1.4"}}>Ljudske pesmi so pesmi katerim avtor ni znan in so se prenašale iz roda v rod, večinoma so se prenašale s petjem, kot ustno izročilo in se je zato tudi njihova oblika malce spreminjala, zato danes lahko najdemo različne verzije iste pesmi. Večina slovenskih ljudskih pesmi je nastala v 19. in 20. stoletju, te pa so prihajale z različnih delov slovenije in zato tudi v naši zbirki najdemo pesmi in akorde z različnimi slovenskimi dialekti. Ljudske pesmi je konec 19. stoletja zapisal Karel Štrekelj  v knjigi Slovenske narodne pesmi, nato pa smo jim dodali tudi akorde, da jih lahko igramo in pojemo z različnimi inšturumenti. Nekaj bolj znanih slovenskih ljudskih pesmi so Na juriš, Čuk se je oženil, Kuža pazi, mi se mamo radi, lepa Anka kolo vodi, pri frani cerkvici, kje so tiste stezice itd. katera besedilo pesmi in akorde lahko najdete tudi na našem portalu pod kategorijo ljudske pesmi.
</p>
    </Layout>
  );
}



export async function getStaticProps() {

    const searchResults_res = await axios.get("https://besedilo-akordi.si/api/songs/search?kategorija=ljudska")
    const searchResults = await searchResults_res.data;

    return {props: {searchResults}}


}

export default ljudske_pesmi;
