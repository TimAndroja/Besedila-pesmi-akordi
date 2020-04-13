import React, { Component } from "react";
import styles from "../scss/_navbar.module.scss";
import Link from "next/link";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className={styles.nav}>
          <Link href="/">
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
          </Link>

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
              <Link href="/dodaj_akorde">
                <a>
                  Dodaj svoje <br /> Besedilo/Akorde
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
