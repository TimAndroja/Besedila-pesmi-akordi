import React, { Component, useEffect, useState } from "react";
import styles from "../../scss/_content_left_side.module.scss";

function Content_left_side(props) {
  const [title, set_title] = useState(props.song.title);
  const [author, set_author] = useState(props.song.author);
  const [text_content, set_text_content] = useState(props.song.text_content);
  const [pdf_file_name, set_pdf_file_name] = useState(props.song.pdf_file_name);

  useEffect(() => {}, []);

  return (
    <div>
      <div className={styles.display_content}>
        <img className={styles.image_a4} src="../static/a4.png" alt="test" />
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
          <div className={styles.author}>
            <h2>{author}</h2>
          </div>
        </div>
        <div className={styles.pdf}>
          <iframe
            src={
              "http://localhost:3002/" +
              pdf_file_name +
              "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
            }
            width="100%"
            height="100%"
            type="application/pdf"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Content_left_side;
