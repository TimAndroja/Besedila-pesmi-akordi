import React, { Component } from "react";
import Layout from "../components//Layout";
import Index_content from "../components/index/Index_content";
import Index_blog from "../components/index/Index_blog.js";
import Head from "next/head";
import axios from "axios";


class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title> AKORDI ZA KITARO | Besedila Pesmi (slovenske angleške otroške božične)</title>
          <meta
            name="description"
            content="AKORDI IN BESEDILA PESMI ZA KITARO. Slovenski glasbeni portal z akordi (prijemi) besedili pesmi in tablature za kitaro. Naj z nami Učenje kitare postane zabava."
          />
          <meta
            name="keywords"
            content="akordi, kitara, besedila pesmi, akordi za kitaro, prijemi akordov za kitaro, besedilo,tablature za kitaro, slovenske pesmi, otroške pesmice, angleške pesmi, božične pesmi, hrvaške pesmi, dalmatinske pesmi"
          />
          <meta name='robots' content='index,follow'/>
        </Head>
        <Index_content songs = {this.props.songs} />
        <Index_blog></Index_blog>
      </Layout>
    );
  }
}


export async function getStaticProps() {
  let songs = [];
  const  songs_popularno_res  = await axios.get("https://besedilo-akordi.si/api/songs/popularna")
  const songs_popularno = await songs_popularno_res.data;
  songs.push({songs_popularno:songs_popularno});

const songs_slovenske_res = await axios.get("https://besedilo-akordi.si/api/songs/slovenska")
const songs_slovenske = await songs_slovenske_res.data;
songs.push({songs_slovenske:songs_slovenske})

const  songs_dalmatinske_res = await axios.get("https://besedilo-akordi.si/api/songs/dalmatinska")
const  songs_dalmatinske = await  songs_dalmatinske_res.data;
songs.push({songs_dalmatinske:songs_dalmatinske})

const songs_tuje_res = await axios.get("https://besedilo-akordi.si/api/songs/tuja")
const songs_tuje = await songs_tuje_res.data;
songs.push({songs_tuje:songs_tuje})

const songs_narodno_zabavne_res = await axios.get("https://besedilo-akordi.si/api/songs/narodna")
const songs_narodno_zabavne = await songs_narodno_zabavne_res.data;
songs.push({songs_narodno_zabavne:songs_narodno_zabavne});

const  songs_otroske_res = await axios.get("https://besedilo-akordi.si/api/songs/otroska")
const  songs_otroske = await  songs_otroske_res.data;
songs.push({songs_otroske:songs_otroske})

const songs_ljudske_res = await axios.get("https://besedilo-akordi.si/api/songs/ljudska")
const songs_ljudske = await songs_ljudske_res.data;
songs.push({songs_ljudske:songs_ljudske})

const songs_slovenska_popevka_res = await axios.get("https://besedilo-akordi.si/api/songs/popevka")
const songs_slovenska_popevka = await songs_slovenska_popevka_res.data;
songs.push({songs_slovenska_popevka:songs_slovenska_popevka});

const songs_rock_res = await axios.get("https://besedilo-akordi.si/api/songs/rock")
const songs_rock = await songs_rock_res.data;
songs.push({songs_rock:songs_rock});

return {props:{songs}};

}
export default Index;
