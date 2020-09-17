const sitemap2  =  require("sitemap");
const axios = require("axios");
const fs = require("fs");



export async function siteamap() {
    console.log("IN FUNCTION")

    const res2 = await axios.get('https://besedilo-akordi.si/api/songs/getstaticpaths');
    const result = await res2.data;

    let allSongs = [];
    result.forEach(song => { allSongs.push(

          song.title.toLowerCase()
         .replace(/\s/g, "-")
         .normalize("NFD")
         .replace(/[\u0300-\u036f]/g, "") +
       "-akordi-za-kitaro-" + song.id_song
    )});

     


// Create the a stream to write to with a hostname which will be used for all links
// Your are able to add more settings to the stream. I recommend to look a the npm package for more information.
const smStream = new sitemap2.SitemapStream({
    hostname: "https://besedilo-akordi.si",
  });

  smStream.write({
    url: "/",
  });

  smStream.write({
    url: "/top100",
  });

  smStream.write({
    url: "/dodaj_akorde",
  });

  smStream.write({
    url: "/kategorija/slovenske_pesmi",
  });
  smStream.write({
    url: "/kategorija/hrvaske_pesmi",
  });
  smStream.write({
    url: "/kategorija/rock_glasba",
  });
  smStream.write({
    url: "/kategorija/ljudske_pesmi",
  });
  smStream.write({
    url: "/kategorija/slovenska_popevka",
  });
  smStream.write({
    url: "/kategorija/narodno_zabavna_glasba",
  });
  smStream.write({
    url: "/kategorija/otroske_pesmice",
  });
  smStream.write({
    url: "/kategorija/bozicne_pesmi",
  });
  smStream.write({
    url: "/kategorija/angleske_pesmi",
  });
  smStream.write({
    url: "/kategorija/popularne_pesmi",
  });

  // add all dynamic url to the sitemap which is fetched from a source.
allSongs.forEach((element) => {
    smStream.write({
      url: `/pesmi/${element}`,
    });
  });

  smStream.end();
  

  
// generate a sitemap and add the XML feed to a url which will be used later on.
 
const sitemap = await sitemap2.streamToPromise(smStream).then((sm) => sm.toString());

return sitemap;
//fs.writeFile("public/sitemap.xml", sitemap, function (err) {
  //if (err) return console.log(err);
  //console.log('Hello World > helloworld.txt');
//});


  // here is the generation of the sitemap happening
  
  // tell the output that we will output XML
  //res.setHeader("Content-Type", "text/xml");
  // write the generate sitemap to the output
  //res.write(sitemap);
  // end and send the data to the user or service.
  //res.end();



}

 