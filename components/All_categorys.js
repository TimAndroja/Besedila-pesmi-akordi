import React, { Component } from "react";
import "../scss/All_categorys.scss";

class All_categorys extends Component {
  render() {
    return (
      <div className="kategorije">
        <div className="kategorija">
          <h2>Slovenske pesmi</h2>
        </div>
        <div className="kategorija">
          <h2> Dalmatinske pesmi</h2>
        </div>
        <div className="kategorija">
          <h2>Angleške pesmi</h2>
        </div>
        <div className="kategorija">
          <h2>Ljudske pesmi</h2>
        </div>
        <div className="kategorija">
          <h2>Slovenska popevka</h2>
        </div>
        <div className="kategorija">
          <h2>Narodno zabavna glasba</h2>
        </div>
        <div className="kategorija">
          <h2>Otroške pesmice</h2>
        </div>
        <div className="kategorija">
          <h2>Božične pesmi</h2>
        </div>
      </div>
    );
  }
}

export default All_categorys;
