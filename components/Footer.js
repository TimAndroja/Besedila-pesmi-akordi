import React, { Component } from "react";
import "../scss/_footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="wrapper_footer">
        <div className="margin_footer">
          <footer className="footer">
            <div className="left_footer">
              <div className="title_footer">Vabimo k ogledu:</div>
              <div>
                <a href="http://glasbena-skupina.si/  ">
                  Ansambel Skupina OBJEM
                </a>
              </div>
              <div>
                <a href="http://glasbena-delavnica.si/default.htm">
                  Glasbena Šola Androja
                </a>
              </div>
              <div>
                <a href="http://snemalni-studio.si/index.html ">
                  Snemalni studio Androja
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/user/mrandroja   ">
                  PESMI GLASBA Slovenske Dalmatinske - OBJEM{" "}
                </a>
              </div>
            </div>
            <div className="middle_footer">
              <div>
                <div className="besedilapesmi">
                  <div className="h1">Besedila Pesmi Akordi</div>
                </div>

                <div className="chords">
                  <h2>Chords Lyrics Text</h2>
                </div>
              </div>
            </div>
            <div className="right_footer">
              <div className="title_footer">Kontakt:</div>
              <div className="wrapper_contact">
                <div>E-mail: tugo.an@gmail.com</div>
                <div>Gsm: 051 677 550 Tugomir Androja</div>
              </div>
              <div className="wrapper_contact">
                <div className="created">SPLETNI PORTAL IZDELAL: </div>
                <div>tim.androja@gmail.com Tim Androja</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
