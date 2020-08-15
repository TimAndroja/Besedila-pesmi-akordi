// Import built-in types for API routes
import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (!res) return {};
	try {

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


	    // Set response header 
		res.setHeader('content-type', 'application/xml');
		res.setHeader('Content-Encoding', 'gzip');
		
		// A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
		// The readable stream it transforms must be in object mode.
		const smStream = new SitemapStream({
			hostname: "https://besedilo-akordi.si",
		});
		
		const pipeline = smStream.pipe(createGzip());
		// Add any static entries here
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
      url: "/kategorija/narodno_zabavna_glasba0",
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
		// E.g. we create a sitemap.xml for articles
		// Set articles change frequencey is weekly
    allSongs.forEach((element) => {
      smStream.write({
        url: `/pesmi/${element}`,
      });
    });
  
    smStream.end();

		// cache the response
		// streamToPromise.then(sm => sitemap = sm)
		streamToPromise(pipeline);
		// stream the response
		pipeline.pipe(res).on('error', e => {
			throw e;
		});
	} catch (e) {
		res.status(500).end();
	}
};