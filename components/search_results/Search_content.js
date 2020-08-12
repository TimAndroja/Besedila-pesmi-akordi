import React, { Component } from "react";
import { useRouter, Router } from "next/router";
import All_categories from "../index/All_categories";
import Category_items from "../index/Category_items";
import styles from "../../scss/_search_content.module.scss";

function Search(props) {
  const {
    query: { kategorija, search_query },
  } = useRouter();

  const Searched_for = () => {
    if (search_query)
      return (
        <div className={styles.searched_for}>
          <h2>
            Rezultati za poizvedbo "<span>{search_query}</span>":
          </h2>
        </div>
      );
    else {
      switch ((useRouter().asPath) ) {
        case "trenutno_popularna":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Trenutno Populrana glasba</span>
                ":
              </h2>
            </div>
          );
        case "/kategorija/slovenske_pesmi":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Slovenske pesmi</span>":
              </h2>
            </div>
          );
        case "/kategorija/hrvaske_pesmi":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Hrvaške pesmi, Dalmatinske pesmi</span>":
              </h2>
            </div>
          );
        case "tuja":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Tuja glasba</span>":
              </h2>
            </div>
          );
        case "/kategorija/ljudske_pesmi":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Ljudske pesmi</span>":
              </h2>
            </div>
          );
        case "/kategorija/slovenska_popevka":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Slovenska popevka</span>":
              </h2>
            </div>
          );
        case "/kategorija/narodno_zabavna_glasba":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Narodno zabavna glasba</span>":
              </h2>
            </div>
          );
        case "/kategorija/otroske_pesmice":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Otroške pesmice</span>":
              </h2>
            </div>
          );
        case "/kategorija/bozicne_pesmi":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Božične pesmi</span>":
              </h2>
            </div>
          );
        case "/kategorija/rock_glasba":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Rock glasba</span>":
              </h2>
            </div>
          );
        case "/top100":
          return (
            <div className={styles.searched_for}>
          <h2>Top 100 Pesmi in Akordov:</h2>
          </div>
          );
        default:
          console.log(useRouter().asPath);
          return (
            <div className={styles.searched_for}>
          <h2>Išči besedila in akorde:</h2>
          </div>
          );
          }
  }
}
    
     



  return (
    <div className={styles.default_margin}>
      <All_categories />
      <Searched_for />
      <div className={styles.search_results}>
        <Category_items songs={props.search_results} />
      </div>
    </div>
  );
}

export default Search;
