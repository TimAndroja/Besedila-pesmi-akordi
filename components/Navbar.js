import React, { Component } from "react";
import "../scss/_navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="logo">
            <div className="besedilapesmi">
              <h1>Besedila Pesmi Akordi</h1>
            </div>
            <div className="akordichords">
              <div className="akordi"></div>
              <div className="chords">
                <h2>Chords Lyrics Text</h2>
              </div>
            </div>
          </div>

          <div className="searchbar">
            <div className="inputdiv">
              <input type="text" placeholder="Brskaj skladbe, avtorje" />
            </div>
            <div className="searchicon">
              <img src="../static/search_icon.png" alt="Išči" />
            </div>
          </div>

          <div className="right_menu">
            <div></div>
            <div></div>
            <div className="dodaj_pesem">
              <a href="">
                Dodaj svoje <br /> Besedilo/Akorde
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
