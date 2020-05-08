import Link from "next/link";
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
    else if (kategorija) {
      switch (kategorija) {
        case "trenutno_popularna":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Trenutno Populrana glasba</span>
                ":
              </h2>
            </div>
          );
        case "slovenska":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Slovenske pesmi</span>":
              </h2>
            </div>
          );
        case "dalmatinska":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Dalmatinske pesmi</span>":
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
        case "ljudska":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Ljudske pesmi</span>":
              </h2>
            </div>
          );
        case "popevka":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Slovenska popevka</span>":
              </h2>
            </div>
          );
        case "narodna":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Narodno zabavna glasba</span>":
              </h2>
            </div>
          );
        case "otroska":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Otroške pesmice</span>":
              </h2>
            </div>
          );
        case "bozicna":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Božične pesmi</span>":
              </h2>
            </div>
          );
        case "ostala":
          return (
            <div className={styles.searched_for}>
              <h2>
                Rezultati za kategorijo "<span>Ostala glasba</span>":
              </h2>
            </div>
          );
      }
    } else if (!useRouter().asPath.localeCompare("/top100"))
      return (
        <div className={styles.searched_for}>
          <h2>Top 100 Pesmi in Akordov:</h2>
        </div>
      );
  };

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
