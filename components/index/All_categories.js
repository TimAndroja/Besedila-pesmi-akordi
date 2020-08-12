import React, { Component } from "react";
import styles from "../../scss/_all_categories.module.scss";
import Link from "next/link";

class All_categorys extends Component {
  render() {
    return (
      <div className={styles.kategorije}>
        <Link
         href="/kategorija/slovenske_pesmi"
          
        >
          <div className={styles.kategorija}>
            <h2>Slovenske pesmi</h2>
          </div>
        </Link>

        <Link
          href="/kategorija/hrvaske_pesmi"
        >
          <div className={styles.kategorija}>
            <h2>Hrvaške pesmi</h2>
          </div>
        </Link>
        <Link href="/kategorija/rock_glasba">
          <div className={styles.kategorija}>
            <h2>Rock glasba</h2>
          </div>
        </Link>

        <Link href="/kategorija/ljudske_pesmi">
          <div className={styles.kategorija}>
            <h2>Ljudske pesmi</h2>
          </div>
        </Link>
        <Link href="/kategorija/slovenska_popevka">
          <div className={styles.kategorija}>
            <h2>Slovenska popevka</h2>
          </div>
        </Link>
        <Link href="/kategorija/narodno_zabavna_glasba">
          <div className={styles.kategorija}>
            <h2>Narodno zabavna glasba</h2>
          </div>
        </Link>
        <Link href="/kategorija/otroske_pesmice">
          <div className={styles.kategorija}>
            <h2>Otroške pesmice</h2>
          </div>
        </Link>
        <Link href="/kategorija/bozicne_pesmi">
          <div className={styles.kategorija}>
            <h2>Božične pesmi</h2>
          </div>
        </Link>
      </div>
    );
  }
}

export default All_categorys;
