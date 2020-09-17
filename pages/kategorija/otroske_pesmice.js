import React, { useState, useEffect } from "react";
import Search_content from "../../components/search_results/Search_content";
import Layout from "../../components/Layout";
import Head from "next/head";
import axios from "axios";
import Link from "next/link"

function otroske_pesmice({searchResults}) {

  useEffect(() => {
    
  }, []);

  return (
    <Layout>
      <Head>
        <title>OTROŠKE PESMICE | Besedila pesmi z akordi za kitaro</title>
        <meta
          name="description"
          content="Besedila pesmi in Akordi z video spotom. Mnogi glasbeni izvajlci, Popularna glasba, Dalmatinske pesmi, Narodno zabavna glasba, Otroške pesmice.."
        />
      </Head>
      <Search_content search_results={searchResults} title="OTROŠKE PESMICE | " />
      <p style={{margin:"50px 5%", textAlign:"justify", lineHeight:"1.4"}}>Dobrodošli v kategoriji Otroške pesmice. Ponujamo vam veliko zbirko akordov za kitaro, klavir in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno otroško pesem in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in učenju besedil pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na zavihku  <Link href="/dodaj_akorde"> Dodaj svoje
Besedilo/Akorde</Link>. Če rabite pomoč pri igranju kitare ali pa vas morda zanima kaj drugega z glasbenega področja, vam na začetni strani ponujamo glasbene članke, od onsnovnih akordov za kitaro, video lekcij za učenje kitare, do malo bolj teoretičnih tem kot kvintni krog za iskanje akordov, ali pa morda članek za nakup nove akustične oziroma električne kitare ali klavirja(klaviature). Veliko srče pri iskanju pesmi, ki ustreza tebi v kategoriji ortoške pesmi!
</p>
      <p style={{margin:"50px 5%", textAlign:"justify", lineHeight:"1.4"}}>Otroške pesmi so pesmice, ki so bile napisane za otroke. V preteklost so se v večini pojavljale ljudske otroške pesmice, ki so jih starši peli in igrali kot uspavanke, ali pa za razvedrilo. Otroške pesmice velikokrat obsegajo tematiko živali, ali ljudi v povezavi z ljubeznijo, igro in nagajivostjo. Veliko otroških pesmic oziroma  pesmi za otroke in akordov lahko najdete na tem glasbenem poratalu pod rubriko otroške pesmice. Nekatere bolj znanih pesmi za otroke so Kuža pazi, Lepa anka kolo vodi, Pika Nogavička, Marko skače, Zajček Dolgoušček, Sreča na vrvici, Abraham ma sedem sinov, Moj črni konj.
</p>
   
    </Layout>
  );
}



export async function getStaticProps() {

    const searchResults_res = await axios.get("https://besedilo-akordi.si/api/songs/search?kategorija=otroska")
    const searchResults = await searchResults_res.data;

    return {props: {searchResults}}


}

export default otroske_pesmice;
