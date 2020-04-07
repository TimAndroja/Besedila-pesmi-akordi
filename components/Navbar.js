import React, { Component } from "react";
import styles from "../scss/_navbar.module.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <div className={styles.besedilapesmi}>
              <h1>Besedila Pesmi Akordi</h1>
            </div>
            <div className={styles.akordichords}>
              <div className={styles.akordi}></div>
              <div className={styles.chords}>
                <h2>Chords Lyrics Text</h2>
              </div>
            </div>
          </div>

          <div className={styles.searchbar}>
            <div className={styles.inputdiv}>
              <input type="text" placeholder="Brskaj skladbe, avtorje" />
            </div>
            <div className={styles.searchicon}>
              <img src="../static/search_icon.png" alt="Išči" />
            </div>
          </div>

          <div className={styles.right_menu}>
            <div></div>
            <div></div>
            <div className={styles.dodaj_pesem}>
              <a href="">
                Dodaj svoje <br /> Besedilo/Akorde
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
