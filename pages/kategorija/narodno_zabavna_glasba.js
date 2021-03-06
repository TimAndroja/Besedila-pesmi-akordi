import React, { useState, useEffect } from "react";
import Search_content from "../../components/search_results/Search_content";
import Layout from "../../components/Layout";
import Head from "next/head";
import axios from "axios";
import Link from "next/link"

function narodno_zabavna_glasba({searchResults}) {

  useEffect(() => {
    
  }, []);

  return (
    <Layout>
      <Head>
        <title>NARODNO ZABAVNA GLASBA | Besedila pesmi z akordi za kitaro</title>
        <meta
          name="description"
          content="Besedila pesmi in Akordi z video spotom. Mnogi glasbeni izvajlci, Popularna glasba, Dalmatinske pesmi, Narodno zabavna glasba, Otroške pesmice.."
        />
      </Head>
      <Search_content search_results={searchResults} title="NARODNO ZABAVNA GLASBA | " />
      <div className="seo_wrapper" style={{ width:"90%", margin:"50px auto"}}> 
      <h2>Narodno zabavne pesmi z akordi (domača glasba)</h2>
      <p style={{textAlign:"justify", lineHeight:"1.4"}}>Dobrodošli v kategoriji Narodno zabavna glasba. Ponujamo vam veliko zbirko akordov za kitaro, klavir in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno slovensko narodno zabavno pesem in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in učenju besedil pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na zavihku  <Link href="/dodaj_akorde"> Dodaj svoje
Besedilo/Akorde</Link>. Če rabite pomoč pri igranju kitare ali pa vas morda zanima kaj drugega z glasbenega področja, vam na začetni strani ponujamo glasbene članke, od onsnovnih akordov za kitaro, video lekcij za učenje kitare, do malo bolj teoretičnih tem kot kvintni krog za iskanje akordov, ali pa morda članek za nakup nove akustične oziroma električne kitare ali klavirja(klaviature). Veliko srče pri iskanju pesmi, ki ustreza tebi v kategoriji narodno zabavne pesmi!
</p>
<p style={{ textAlign:"justify", lineHeight:"1.4"}}>Narodno zabavna glasba je ena izmed bolj razširjenih glasbenih zvrsti v Sloveniji, najdemo pa jo tudi v državah kot so Avstrija, Nemčija, Češka, Švica in Italija. Zvrst se je začela razvijati v 19. stoletju na podlagi ljudskih pesmi, za njo pa so značilni ritmi polke in valčka. V Sloveniji imamo številne narodno zabavne ansamble, ki jih lahko najamemo za igranje glasbe na veselicah, porokah in podobno. Za narodno zabavno glasbo je najbolj značilen inštrument diatonična harmonika oziroma frajtonerica, zato je večina akordov napisana za igranje na diatonično harmoniko, ki pa ni zmožna igrati vseh akordov.
</p>
<div style={{textAlign:"center", margin:"30px auto", width:"100%"}}>
  <h2>Narodno zabavna glasba besedila akordi za kitaro</h2>
  <img src="/Narodno-zabavna-glasba-besedila-akordi-za-kitaro.jpg" alt="Slovenska-popevka-besedilo-akordi-za-kitaro" width="100%" />
  </div>
</div>

    </Layout>
  );
}



export async function getStaticProps() {

    const searchResults_res = await axios.get("https://besedilo-akordi.si/api/songs/search?kategorija=narodna")
    const searchResults = await searchResults_res.data;

    return {props: {searchResults}}


}

export default narodno_zabavna_glasba;
