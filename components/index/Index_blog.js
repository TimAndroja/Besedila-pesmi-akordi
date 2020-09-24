import React, { Component } from "react";
import styles from "../../scss/_index_blog.module.scss";
import Link from "next/link";

function Index_blog ({song,recommendations_author,recommendations_category}) {
 
    return (
     <div className={styles.wrapper}>
         <div className={styles.row_wrapper}>
             <div className={styles.componnent_wrapper} >
            <article  className={styles.article}>
                <div className={styles.componnent_title}><h2>Osnovni Akordi in prijemi za kitaro (Guitar Chords)</h2></div>
                <div className={styles.component_media}><img src="/AKORDI-PRIJEMI-ZA-KITARO.jpg" alt="AKORDI PRIJEMI ZA KITARO"/></div>
                <div className={styles.component_description}>
                    <div className={styles.component_description_title}>Osnovni prijemi akordov, za začetno učenje kitare</div>
                    <div className={styles.component_description_text}> 
                    <p><strong>Opombe:</strong></p>
                
                    <li><strong>Major</strong> po slovensko pomeni <strong>Dur</strong> (A Major = A Dur)</li>
                    <li><strong>Minior</strong> po slovensko pomen <strong>Mol</strong> (A Minior = A Mol)</li>
                    <li>Znak <strong>O</strong> na sliki pomeni, da kitarsko struno <strong>igramo</strong>, vendar na njej nimamo položenega nobenega prsta </li>
                    <li>Znak <strong>X</strong> na sliki pomeni, da strune kitare <strong>neigramo</strong></li>
                    <li><strong>B Major</strong>  in <strong>B Minior</strong> v slovenskem jeziku pomenita <strong>H Dur</strong> in <strong>H Mol</strong></li>
                    <br/>
                    <strong>Navodila za uporabo:</strong>
                    <p>Na zgornji tablaturi, izberemo akordi, ki ga bomo zaigrali na električni ali akustični kitari. Na kitaro položimo prste sledeče po številkah: Prste začnemo šteti s kazalcem, ta ima številko 1 in tako naprej, kot je prikazano na zgornji tablaturi(1-kazalec, 2-sredinec, 3-prstanec, 4-mezinec).
                    Ko imamo vse prste na pravilnih strunah, zabrenkamo na vse strune, razen tiste označene s simbolom <strong>X</strong>. Pod vsako sliko imaš pod struno označeno kateri ton igraš na kitari.
                    </p>
                    </div>
                   
                </div>

            </article>
            </div>
         
         </div>


         <div className={styles.row_wrapper}>
             <div className={styles.componnent_wrapper2}>
            <article className={styles.article}>
                <div className={styles.componnent_title}><h2>Lekcija za kitaro Vse najboljše (Osnove kitare)</h2></div>
                <div className={styles.component_media}><iframe  src="https://www.youtube.com/embed/D6uG69aL3VQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <div className={styles.component_description}>
                    <div className={styles.component_description_title}>Vse najbolješ kitarska lekcija (Chords, Lyrics, Tabs)</div>
                    <div className={styles.component_description_text}> 
                    
                    <p>V interaktivni kitarski lekciji se boš nauči Osnoven ritem igranja, napreden ritem igranja, štetje in poudarjanje ritma, osnovne akorde, Igranje melodije, pridobil ogromno glasbenega znanja, napotkov in trikov pri učenju kitare in še mnogo več.</p>
                    <p>Literaturo za učenje kitare najdeš tukaj <Link href="/pesmi/vse-najboljse-za-te---ucenje-kitare,-lekcija-akordi-za-kitaro-288"><a>Vse najboljše - chords and lyrics</a></Link></p>
                    </div>
                   
                </div>

            </article>
            <article className={styles.article}>
                <div className={styles.componnent_title}><h2>Lekcija za kitaro Sreča na vrvici (Srednje zahtevna lekcija)</h2></div>
                <div className={styles.component_media}><iframe  src="https://www.youtube.com/embed/Qdji1IbMIe0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <div className={styles.component_description}>
                    <div className={styles.component_description_title}>Sreča na vrvici akordi in lekcija za kitaro, tablature (Chords, Lyrics, Tabs)</div>
                    <div className={styles.component_description_text}> 
                    <p>V interaktivni kitarski lekciji se učimo pesem Sreča na vrvici, prijemi akordov, napredne ritme igranja, napredne tehnike igranja kitare (pok strun, zatiranje zvoka strun..) in mnogo več. </p>
                    <p>Note in akorde najdeš preko portala, ali preko linka <Link href="/pesmi/sreca-na-vrvici-akordi-za-kitaro-284"><a>Sreča na vrvici - chords & lyrics</a></Link></p>
                    </div>
                </div>

            </article>
            </div>
         
         </div>
         



     </div>
    
    );
  }


export default Index_blog;
