import React, { Component, useState } from "react";
import styles from "../scss/_navbar.module.scss";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";

function Navbar() {
  function onChange(e) {
    set_search_term(e.target.value);
  }

  function enter(e) {
    if (e.key === "Enter") {
      Router.push({
        pathname: "/brskaj",
        query: { search_query: search_term },
      });
    }
  }

  function search() {
    Router.push({
      pathname: "/brskaj",
      query: { search_query: search_term },
    });
  }

  const {
    query: { search_query },
  } = useRouter();
  const [search_term, set_search_term] = useState(search_query);

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
            <input
              type="text"
              value={search_term}
              onChange={onChange}
              placeholder="Brskaj skladbe, avtorje"
              name="search_term"
              onKeyPress={enter}
            />
          </div>
          <div className={styles.searchicon}>
            <img src="../static/search_icon.png" alt="Išči" onClick={search} />
          </div>
        </div>

        <div className={styles.right_menu}>
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

export default Navbar;
