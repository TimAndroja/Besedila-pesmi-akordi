import Link from "next/link";
import React, { Component } from "react";
import "../scss/category_item.scss";
class Category_item extends React.Component {
  render() {
    return (
      <div>
        <div>
          <a className="cardlink">
            <div className="cardwrapper">
              <div className="cardimagediv">
                <img
                  className="cardimage"
                  src="https://img.youtube.com/vi/FOODhMCWJsc/0.jpg"
                  alt="test"
                />
              </div>

              <div className="carddata">
                <h5 className="title">Naslov</h5>

                <h6 className="author">Izvajalec</h6>
                <div className="views">1552 ogledov</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Category_item;
