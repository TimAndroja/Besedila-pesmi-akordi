import React, { Component } from "react";
import "../../scss/All_categorys.scss";

class All_categorys extends Component {
  render() {
    return (
      <div className="kategorije">
        <div className="kategorija">
          <h2>slovenske pesmi</h2>
        </div>
        <div className="kategorija">
          <h2> dalmatinske pesmi</h2>
        </div>
        <div className="kategorija">
          <h2>angleške pesmi</h2>
        </div>
        <div className="kategorija">
          <h2>ljudske pesmi</h2>
        </div>
        <div className="kategorija">
          <h2>slovenska popevka</h2>
        </div>
        <div className="kategorija">
          <h2>narodno zabavna glasba</h2>
        </div>
        <div className="kategorija">
          <h2>otroške pesmice</h2>
        </div>
        <div className="kategorija">
          <h2>božične pesmi</h2>
        </div>
      </div>
    );
  }
}

export default All_categorys;
