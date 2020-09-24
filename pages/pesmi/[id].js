import Content_wrapper from "../../components/besedila/Content_wrapper";
import Layout_noh1 from "../../components/Layout_noh1";
import Head from "next/head";
import { getAllPostIds, getPostData } from '../../lib/songs'
import axios from "axios";


export default function Besedila ({song,recommendations_author,recommendations_category,meta_desc}) {
  return(
  <Layout_noh1>
    <Head>
      <title>
        {song.songData[0].title.toUpperCase()} - Besedilo z Akordi za kitaro | Izvajalec pesmi: { song.songData[0].author.length? song.songData[0].author : "ni navedeno"  } 
      </title>
      <meta
        name="description"
        content={meta_desc}
      />
    </Head>
    <Content_wrapper
      song={song}
      recommendations_author={recommendations_author}
      recommendations_category={recommendations_category}
    />
  </Layout_noh1>
 )
}

export async  function getStaticPaths() {
  const  paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({ params }) {
 

  const id_num = params.id.substring(params.id.lastIndexOf("-") + 1, params.id.length);
  const song = await getPostData(params.id);
  const meta_desc = song.songData[0].title +  " - " +  song.songData[0].author + " | Akordi (prijemi, tablature) in besedilo pesmi za kitaro in klavir (klaviaturo, sintesajzer)."



  const recommendations_author_res = await axios
  .get(`https://besedilo-akordi.si/api/songs/recommendations_author/${id_num}`)
  const recommendations_author = await recommendations_author_res.data;



  const recommendations_category_res = await axios.get(`https://besedilo-akordi.si/api/songs/recommendations_category/${id_num}`)
  const recommendations_category = await recommendations_category_res.data; 

  return {
    props: {
      song,
      recommendations_author,
      recommendations_category,
      meta_desc 
    }
  }
}



