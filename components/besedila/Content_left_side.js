import React, { Component } from "react";
import "../../scss/_content_left_side.scss";

class Content_left_side extends Component {
  state = {
    title: "Naslov",
    author: "Avtor",
    text_content: ["text"],
    pdf_file: ""
  };
  render() {
    return (
      <div>
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
              <ul className={this.state.pdf_file ? "hidden" : "noclass"}>
                {this.state.text_content.map((text_line, index) =>
                  index % 2 === 0 ? (
                    <li key={index} className="li_akord">
                      {text_line}
                    </li>
                  ) : (
                    <li key={index} className="li_text">
                      {text_line}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className={this.state.pdf_file ? "show" : "hidden"}>
            <div className="file_name">
              {
                this.state.pdf_file.replace(/\\/g, "/").split("/")[
                  this.state.pdf_file.split("\\").length - 1
                ]
              }
            </div>
            {/*                <embed
                  src={this.state.pdf_file + "#view=FitH"
                  width="100%"
                  height="100%"
                  type="application/pdf"
                  className={this.state.pdf_file ? "show" : "hidden"}
                ></embed> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Content_left_side;
