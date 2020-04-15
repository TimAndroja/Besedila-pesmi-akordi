import Link from "next/link";
import { useRouter } from "next/router";

import Content_wrapper from "../../components/besedila/Content_wrapper";
import Layout_noh1 from "../../components/Layout_noh1";
import axios from "axios";
import fetch from "isomorphic-unfetch";

const Besedila = (props) => (
  /* const id_link = router.query.id;
  const id = id.substring(id.lastIndexOf("-") + 1, id.length); */

  <Layout_noh1>
    <Content_wrapper song={props.song} />
  </Layout_noh1>
);

Besedila.getInitialProps = async function (context) {
  const { id } = await context.query;
  const id_num = id.substring(id.lastIndexOf("-") + 1, id.length);
  console.log(id_num);
  const res = await fetch(`http://localhost:3002/api/songs/${id_num}`);
  const result = await res.json();
  const song = result[0];
  console.log(`Fetched song: ${song.id_song}`);

  return { song };
};

export default Besedila;
