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
          <a>
          <div className={styles.kategorija}>
            <h2>Slovenske pesmi</h2>
          </div>
          </a>
        </Link>

        <Link
          href="/kategorija/hrvaske_pesmi_dalmatinske_pesmi_ex_yu_pesmi"
        ><a>
          <div className={styles.kategorija}>
            <h2>Hrvaške pesmi</h2>
          </div></a>
        </Link>

        <Link href="/kategorija/rock_glasba">
          <a>
          <div className={styles.kategorija}>
            <h2>Rock glasba</h2>
          </div></a>
        </Link>

        <Link href="/kategorija/ljudske_pesmi">
          <a>
          <div className={styles.kategorija}>
            <h2>Ljudske pesmi</h2>
          </div>
          </a>
        </Link>
        <Link href="/kategorija/slovenska_popevka">
          <a>
          <div className={styles.kategorija}>
            <h2>Slovenska popevka</h2>
          </div>
          </a>
        </Link>
        <Link href="/kategorija/narodno_zabavna_glasba">
          <a>
          <div className={styles.kategorija}>
            <h2>Narodno zabavna glasba</h2>
          </div>
          </a>
        </Link>
        <Link href="/kategorija/otroske_pesmice">
          <a>
          <div className={styles.kategorija}>
            <h2>Otroške pesmice</h2>
          </div>
          </a>
        </Link>
        <Link href="/kategorija/bozicne_pesmi">
          <a>
          <div className={styles.kategorija}>
            <h2>Božične pesmi</h2>
          </div>
          </a>
        </Link>
      </div>
    );
  }
}

export default All_categorys;
