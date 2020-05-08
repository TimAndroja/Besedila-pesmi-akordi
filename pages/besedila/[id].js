import Content_wrapper from "../../components/besedila/Content_wrapper";
import Layout_noh1 from "../../components/Layout_noh1";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

const Besedila = (props) => (
  <Layout_noh1>
    <Head>
      <title>
        {props.song.title} - {props.song.author} | Besedilo in Akordi za kitaro
      </title>
      <meta
        name="description"
        content="{props.song.title} - {props.song.author} Besedilo in Akordi pesmi za kitaro z video posnetkom (chords). Ogledov: {props.song.views}  "
      />
    </Head>
    <Content_wrapper
      song={props.song}
      recommendations_author={props.recommendations_author}
      recommendations_category={props.recommendations_category}
    />
  </Layout_noh1>
);

Besedila.getInitialProps = async function (context) {
  const { id } = await context.query;
  const id_num = id.substring(id.lastIndexOf("-") + 1, id.length);
  const res = await fetch(`http://localhost:3002/api/songs/content/${id_num}`);
  const result = await res.json();
  const song = result[0];

  const rec_author_fetch = await fetch(
    `http://localhost:3002/api/songs/recommendations_author/${id_num}`
  );
  const rec_category_fetch = await fetch(
    `http://localhost:3002/api/songs/recommendations_category/${id_num}`
  );
  const recommendations_category = await rec_category_fetch.json();
  const recommendations_author = await rec_author_fetch.json();

  return { song, recommendations_author, recommendations_category };
};

export default Besedila;
