import React, { Component } from "react";
import styles from "../../scss/_all_categories.module.scss";
import Link from "next/link";

class All_categorys extends Component {
  render() {
    return (
      <div className={styles.kategorije}>
        <Link
          href={{ pathname: "/brskaj", query: { kategorija: "slovenska" } }}
        >
          <div className={styles.kategorija}>
            <h2>Slovenske pesmi</h2>
          </div>
        </Link>

        <Link
          href={{ pathname: "/brskaj", query: { kategorija: "dalmatinska" } }}
        >
          <div className={styles.kategorija}>
            <h2> Dalmatinske pesmi</h2>
          </div>
        </Link>
        <Link href={{ pathname: "/brskaj", query: { kategorija: "tuja" } }}>
          <div className={styles.kategorija}>
            <h2>Tuja glasba</h2>
          </div>
        </Link>

        <Link href={{ pathname: "/brskaj", query: { kategorija: "ljudska" } }}>
          <div className={styles.kategorija}>
            <h2>Ljudske pesmi</h2>
          </div>
        </Link>
        <Link href={{ pathname: "/brskaj", query: { kategorija: "popevka" } }}>
          <div className={styles.kategorija}>
            <h2>Slovenska popevka</h2>
          </div>
        </Link>
        <Link href={{ pathname: "/brskaj", query: { kategorija: "narodna" } }}>
          <div className={styles.kategorija}>
            <h2>Narodno zabavna glasba</h2>
          </div>
        </Link>
        <Link href={{ pathname: "/brskaj", query: { kategorija: "otroska" } }}>
          <div className={styles.kategorija}>
            <h2>Otroške pesmice</h2>
          </div>
        </Link>
        <Link href={{ pathname: "/brskaj", query: { kategorija: "bozicna" } }}>
          <div className={styles.kategorija}>
            <h2>Božične pesmi</h2>
          </div>
        </Link>
      </div>
    );
  }
}

export default All_categorys;
