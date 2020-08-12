import React, { useState, useEffect } from "react";
import styles from "../../scss/_content_left_side.module.scss";

 function Content_left_side({song}) {
  const [title, set_title] = useState(song.songData[0].title);
  const [author, set_author] = useState(song.songData[0].author);
  const [text_content, set_text_content] = useState(song.songData[0].text_content);
  const [pdf_file_name, set_pdf_file_name] = useState(song.songData[0].pdf_file_name);
  const [font_size, set_font_size] = useState(song.songData[0].font_size);
  
  

  const Show_content = () => {
    if (song.songData[0].pdf_file_name != null) {
      return (
        <div className={styles.pdf}>
          <iframe
            title={song.songData[0].title + " " + song.songData[0].author}
            src={
              "https://besedilo-akordi.si/api/" +
              song.songData[0].pdf_file_name +
              "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
            }
            width="100%"
            height="100%"
            type="application/pdf"
          ></iframe>
        </div>
      );
    }
    const text_lines = text_content.split(/\r?\n/);
    return (
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.author}>
          <h2>{author}</h2>
        </div>
        <div className={styles.text_content}>
          <ul style={{ fontSize: font_size + "vw" }}>
            {text_lines.map((text_line, index) =>
              index % 2 === 0 ? (
                <li key={index} className={styles.li_akord}>
                  {text_line}
                </li>
              ) : (
                <li key={index} className={styles.li_text}>
                  {text_line}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.display_content}>
        <img className={styles.image_a4} src="../static/a4.png" alt="test" />

        <Show_content />
      </div>
    </div>
  );
}

export default Content_left_side;
