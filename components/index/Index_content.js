import React, { Component } from "react";
import styles from "../../scss/_index_content.module.scss";
import All_categories from "./All_categories";
import Index_description1 from "./Index_description_1";
import Category_items from "./Category_items";
import Link from "next/link";

class Index_content extends Component {
  state = {
    songs_popularno: [],
    songs_slovenske: [], // slovenske and !narodnozabavne
    songs_dalmatinske: [],
    songs_tuje: [],
    songs_narodno_zabavne: [],
    songs_otroske: [],
    songs_ljudske: [],
    songs_slovenska_popevka: [],
    songs_rock: [],
  };

  componentDidMount() {


    this.setState({ songs_popularno: this.props.songs[0].songs_popularno });

    this.setState({ songs_slovenske: this.props.songs[1].songs_slovenske});

    this.setState({ songs_dalmatinske:this.props.songs[2].songs_dalmatinske });

     this.setState({ songs_tuje:this.props.songs[3].songs_tuje });

    this.setState({ songs_narodno_zabavne:this.props.songs[4].songs_narodno_zabavne});
    this.setState({ songs_otroske: this.props.songs[5].songs_otroske });

     this.setState({ songs_ljudske: this.props.songs[6].songs_ljudske});

    this.setState({ songs_slovenska_popevka: this.props.songs[7].songs_slovenska_popevka});

    this.setState({ songs_rock: this.props.songs[8].songs_rock });
  }

  render() {
 
    return (
      <div className={styles.default_margin}>
        <All_categories />

        <div>
          <Link
             href="/kategorija/popularne_pesmi"
          ><a className={styles.category_hover}>
            <div className={styles.category_name}>
              <h2>
                  Trenutno popularna glasba:
              </h2>
            </div>
            </a>
          </Link>
          <div className={styles.linebreak}></div>
          <div className={styles.to_grid}>
            <Category_items songs={this.state.songs_popularno} />
          </div>
        </div>
        <Index_description1 />
        <div className={styles.split_categorys}>
          <div>
            <Link
              href="/kategorija/narodno_zabavna_glasba"
            ><a className={styles.category_hover}>
              <div className={styles.category_name2}>
                <h2>
                    Narodno Zabavna Glasba:       
                </h2>
              </div>
              </a>
            </Link>
            <div className={styles.linebreak2}></div>
            <div className={styles.to_grid2}>
              <Category_items songs={this.state.songs_narodno_zabavne} />
            </div>
          </div>
          <div>
            <Link
              href="/kategorija/hrvaske_pesmi_dalmatinske_pesmi_ex_yu_pesmi"
            ><a className={styles.category_hover}>
              <div className={styles.category_name2}>
                <h2>
                  Hrvaške pesmi, Dalmatinske pesmi, Ex yu:
                </h2>
              </div>
              </a>
            </Link>
            <div className={styles.linebreak2}></div>
            <div className={styles.to_grid3}>
              <Category_items songs={this.state.songs_dalmatinske} />
            </div>
          </div>
        </div>

        <div className={styles.split_categorys}>
          <div>
            <Link href="/kategorija/rock_glasba">
            <a className={styles.category_hover}>
              <div className={styles.category_name2}>
                <h2>
                  Rock glasba, YUGO Rock:
                </h2>
              </div>
              </a>
            </Link>
            <div className={styles.linebreak}></div>
            <div className={styles.to_grid2}>
              <Category_items songs={this.state.songs_rock} />
            </div>
          </div>
          <div>
            <Link
              href="/kategorija/slovenske_pesmi"
            ><a className={styles.category_hover}>
              <div className={styles.category_name2}>
                <h2>
                  Slovenske pesmi:
                </h2>
              </div>
              </a>
            </Link>
            <div className={styles.linebreak}></div>
            <div className={styles.to_grid3}>
              <Category_items songs={this.state.songs_slovenske} />
            </div>
          </div>
        </div>
        <div className={styles.index_reklama}></div>
        <div className={styles.split_categorys}>
          <div>
            <Link
             href="/kategorija/otroske_pesmice"
            ><a className={styles.category_hover}>
              <div className={styles.category_name2}>
                <h2>
                  Otroške pesmice:
                </h2>
              </div>
              </a>
            </Link>
            <div className={styles.linebreak}></div>
            <div className={styles.to_grid2}>
              <Category_items songs={this.state.songs_otroske} />
            </div>
          </div>
          <div>
            <Link
              href="/kategorija/ljudske_pesmi"
            ><a className={styles.category_hover}>
              <div className={styles.category_name2}>
                <h2>
                  Ljudske pesmi:
                </h2>
              </div></a>
            </Link>
            <div className={styles.linebreak}></div>
            <div className={styles.to_grid3}>
              <Category_items songs={this.state.songs_ljudske} />
            </div>
          </div>
        </div>
        <div className={styles.split_categorys}>
          <div>
            <Link
              href="/kategorija/slovenska_popevka"
            ><a className={styles.category_hover}>
              <div className={styles.category_name2}>
                <h2>
                  Slovenska popevka:
                </h2>
              </div></a>
            </Link>
            <div className={styles.linebreak}></div>
            <div className={styles.to_grid2}>
              <Category_items songs={this.state.songs_slovenska_popevka} />
            </div>
          </div>
          <div>
            <Link href="/kategorija/angleske_pesmi"><a className={styles.category_hover}>
              <div className={styles.category_name2}>
                <h2>
                  Angleške pesmi (tuje)
                 
                </h2>
              </div></a>
            </Link>
            <div className={styles.linebreak}></div>
            <div className={styles.to_grid3}>
              <Category_items songs={this.state.songs_tuje} />
            </div>
          </div>
        </div>
        <div className={styles.description_2}>
          <p>
            <strong>AKORDI ZA KITARO IN BESEDILA PESMI </strong> popularnih aktualnih ansamblov, bandov, glasbenih skupin, glasbenikov in pevcev. Glasbeni portal je namenjen  vsem ljubiteljem slovenske in ostale glasbe, ki želijo poleg besedila posamezne pesmi imeti  še pripadajoče akorde za to pesem. Akordi vam bodo v pomoč pri učenju: kitare, klaviature, klavirja, sintesajzerja, harmonike ipd. tako da lahko svojo priljubljeno pesem pojete in istočasno spremljate na svojem glasbenem instrumentu. Določene pesmi poleg prijemov za kitaro vsebujejo tudi tablature za kitaro katere veliko kitaristov uporablja namesto not, da pridobi lažjo in hitrejšo orientacijo. Na portalu so zbrana raznovrstna besedila pesmi z akordi, zato sva jih razvrstila v 8 glasbenih skupin: Slovenske pesmi, Angleške pesmi, Otroške pesmice, Božične pesmi, Hrvaške pesmi, Ljudske pesmi, Slovenska popevka, in Narodno zabavna glasba.  Zaradi enostavnost iskanja lahko določeno pesem najdete v različnih glasbenih skupinah npr: Pesem V dolini tihi spada pod ( Narodno zabavna glasba, Ljudske pesmi, Slovenske pesmi).  
          </p>
          <p> Posebnost glasbenega portala AKORDI ZA KITARO BESEDILA pesmi je ta, da na njem lahko istočasno gledate videospot ter spremljate besedilo, akorde in tablaturo vaše prilubljene skladbe. Vabimo vas, da tudi vi prispevate priljubljene pesmi z akordi in besedilom ter povezavo do ustreznega videa. Naj vam bo naš portal v pomoč pri igranju kitare, klaviature, harmonike oziroma drugega akordičnega glasbila.  Avtorja portala Tim & <a href="https://ansambel-objem.si/glasbena-sola/" target="blank">Tugomir Androja</a>  vam želiva veliko glasbenih užitkov.</p>
        </div>
      </div>
    );
  }
}

export default Index_content;
