import Link from "next/link";
import React, { Component } from "react";
import { useRouter } from "next/router";
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
    else return <div></div>;
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
