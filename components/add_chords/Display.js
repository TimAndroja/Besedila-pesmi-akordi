import React, { Component } from "react";
import "../../scss/_display.scss";

class Display extends Component {
  state = {
    title: "Zvončki in trobentice",
    author: "Skupina Objem",
    pdf_file:
      "https://www.trzalica.com/images/dolpotegi_II/slovenski-izvajalci/lojze-slak/cebelar-note.7666.pdf",
    text_content:
      "Am             F               am             G#7 zvončki in trobentice mačice vijolice tudi zame\n F                am            Am               G\n Saj pomlad je tu"
  };

  render() {
    return (
      <div className="display_content">
        <img className="image_a4" src="../static/a4.png" alt="test" />
        <div className="content">
          <div className="title">
            <h2>{this.state.title}</h2>
          </div>
          <div className="author">
            <h2>{this.state.author}</h2>
          </div>
          <div className="text_content">
            <p>
              Am
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              F am G#7
            </p>
            <p>
              tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
            </p>
            <p>F am Am G</p>
            <p>Saj pomlad je tu</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
