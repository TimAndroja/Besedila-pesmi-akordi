import axios from 'axios';
export async function getAllPostIds() {


    const res = await axios.get('https://besedilo-akordi.si/api/songs/getstaticpaths');
    const result = await res.data;

    let allSongs = [];
    result.forEach(song => { allSongs.push({
       params: {
         id: song.title.toLowerCase()
         .replace(/\s/g, "-")
         .normalize("NFD")
         .replace(/[\u0300-\u036f]/g, "") +
       "-akordi-za-kitaro-" + song.id_song
       }})});

    return allSongs;

  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    
  }




  export async function getPostData(id) {
  const id_num = id.substring(id.lastIndexOf("-") + 1, id.length);
  

  const res = await axios.get(`https://besedilo-akordi.si/api/songs/content/${id_num}`);
  const songData = await res.data;






 
 
  

    return {id, songData};



  
  }