import Content_wrapper from "../../components/besedila/Content_wrapper";
import Layout_noh1 from "../../components/Layout_noh1";

import fetch from "isomorphic-unfetch";

const Besedila = (props) => (
  <Layout_noh1>
    <Content_wrapper
      song={props.song}
      recommendations={props.recommendations}
    />
  </Layout_noh1>
);

Besedila.getInitialProps = async function (context) {
  const { id } = await context.query;
  const id_num = id.substring(id.lastIndexOf("-") + 1, id.length);
  const res = await fetch(`http://localhost:3002/api/songs/content/${id_num}`);
  const result = await res.json();
  const res2 = await fetch(
    `http://localhost:3002/api/songs/recommendations/${id_num}`
  );
  const recommendations = await res2.json();
  const song = result[0];

  return { song, recommendations };
};

export default Besedila;
