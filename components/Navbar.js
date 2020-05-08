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
    if (search_term) {
      if (e.key === "Enter") {
        Router.push({
          pathname: "/brskaj",
          query: { search_query: search_term },
        });
      }
    }
  }

  function search() {
    if (search_term) {
      Router.push({
        pathname: "/brskaj",
        query: { search_query: search_term },
      });
    }
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
              <a href="">
                <h1>Besedila Pesmi Akordi</h1>
              </a>
            </div>
            <div className={styles.akordichords}>
              <div className={styles.akordi}></div>
              <div className={styles.chords}>
                <a href="">
                  <h2>Chords Lyrics Text</h2>
                </a>
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
          <div className={styles.dodaj_pesem}>
            <Link href="/dodaj_akorde">
              <a>
                Dodaj svoje <br /> Besedilo/Akorde
              </a>
            </Link>
          </div>
          <div className={styles.top100}>
            <Link href="/top100">
              <a>
                Top 100 <br /> Akordov
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
