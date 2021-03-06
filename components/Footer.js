import React, { Component } from "react";
import styles from "../scss/_footer.module.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.wrapper_footer}>
        <div className={styles.margin_footer}>
          <footer className={styles.footer}>
            <div className={styles.left_footer}>
              <div className={styles.title_footer}>Vabimo k ogledu:</div>
              <div>
                <a href="https://ansambel-objem.si/"  target="blank">
                  Ansambel Skupina OBJEM
                </a>
              </div>
              <div>
                <a href="https://ansambel-objem.si/glasbena-sola-foto-galerija/"  target="blank">
                  Glasbena Šola Androja
                </a>
              </div>
              <div>
                <a href="https://ansambel-objem.si/glasbeni-snemalni-studio/" target="blank">
                  Snemalni studio Androja
                </a>
              </div>
              <div>
                <a href="httpss://www.youtube.com/user/mrandroja"  target="blank">
                  PESMI GLASBA Slovenske Dalmatinske - OBJEM{" "}
                </a>
              </div>
            </div>
            <div className={styles.middle_footer}>
              <div>
                <div className={styles.besedilapesmi}>
                  <div className={styles.h1}>Besedila Pesmi Akordi</div>
                </div>

                <div className={styles.chords}>
                  <h2>Chords Lyrics Text</h2>
                </div>
              </div>
            </div>
            <div className={styles.right_footer}>
              <div className={styles.title_footer}>Kontakt:</div>
              <div className={styles.wrapper_contact}>
                <div>E-mail: tugo.an@gmail.com</div>
                <div>Gsm: 051 677 550 Tugomir Androja</div>
              </div>
              <div className={styles.wrapper_contact}>
                <div className={styles.created}>SPLETNI PORTAL IZDELAL: </div>
                <div>tim.androja@gmail.com Tim Androja</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
