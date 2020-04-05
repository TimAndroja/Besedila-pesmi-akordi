import React, { Component } from "react";
import "../../scss/_form_display_wrapper.scss";

/* 210 × 297 */

class Form_display_wrapper extends Component {
  state = {
    title: "",
    author: "",
    text_content: [],
    pdf_file: "",

    placeholder:
      "1: Tukaj piši besedilo in akorde \n2: \n1: Vsaka prva vrstica se bo izpisala rdeče in je namenjena za vpis akordov\n2: Vsaka druga vrstica se bo izpisala črno in je namenjena za vpis besedila\n1:\n2: Za 2 vrstice besedila brez akordov\n1:\n2: izpusti eno vrstico\n1:\n2:\n.\n.\n.\n\nGlej desno stran, ki prikazuje izgled na spletni strani"
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onChange_text_content = e =>
    this.setState({ [e.target.name]: e.target.value.split(/\r?\n/) });

  handleFiles = file => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        $("#blah").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  render() {
    return (
      <div className="split_form_display">
        <div className="form_wrapper">
          <div className="form">
            <div className="naslov_form">
              <h2>Obrazec za oddajo Besedil in Akordov:</h2>
            </div>
            <form action="localhost:3002/api/songs/add_song" method="post">
              <div className="text_input">
                <input
                  type="text"
                  className="text"
                  placeholder="Naslov pesmi (*)"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <div className="text_input">
                <input
                  type="text"
                  className="text"
                  placeholder="Izvajalec"
                  name="author"
                  value={this.state.author}
                  onChange={this.onChange}
                />
              </div>
              <div className="text_input">
                <input
                  type="text"
                  className="text"
                  name="youtube_link"
                  placeholder="youtube link (*)"
                />
              </div>
              <div className="area_input">
                <textarea
                  name="text_content"
                  onChange={this.onChange_text_content}
                  placeholder={this.state.placeholder}
                ></textarea>
              </div>
              <div className="pdf_upload">
                Če imate .pdf datoteko jo lahko oddate namesto vpisa besedila:
                <br />
                <input
                  type="file"
                  name="upload"
                  accept="application/pdf"
                  name="pdf_file"
                  onChange="handleFiles(this.files)"
                  onChange={this.onChange}
                  value={this.state.pdf_file}
                />
              </div>
              <div className="izberite">
                Izberite vse kategorije v katere pesem spada:
              </div>
              <div className="pick_categories">
                <div className="cat">
                  <input type="checkbox" name="slovenska" />
                  <label>slovenska</label>
                </div>
                <div className="cat">
                  <input type="checkbox" name="narodna" />
                  <label>narodno zabavna</label>
                </div>
                <div className="cat">
                  <input type="checkbox" name="dalmatinska" />
                  <label>dalmatinska</label>
                </div>

                <div className="cat">
                  <input type="checkbox" name="otroska" />
                  <label>otroška</label>
                </div>
              </div>
              <div className="pick_categories">
                <div className="cat">
                  <input type="checkbox" name="angleska" />
                  <label>angleška&nbsp;</label>
                </div>

                <div className="cat">
                  <input type="checkbox" name="slovenska popevka" />
                  <label>slovenska popevka</label>
                </div>

                <div className="cat">
                  <input type="checkbox" name="ljudska" />
                  <label>ljudska</label>
                </div>

                <div className="cat">
                  <input type="checkbox" name="bozicna" />
                  <label>božična</label>
                </div>
              </div>
              <div className="submit_button">
                <input type="submit" value="Oddaj obrazec" />
              </div>
            </form>
          </div>
        </div>
        <div className="display_wrapper">
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
      </div>
    );
  }
}

export default Form_display_wrapper;
