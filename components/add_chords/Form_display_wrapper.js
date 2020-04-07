import React, { Component } from "react";
import styles from "../../scss/_form_display_wrapper.module.scss";

/* 210 × 297 */

class Form_display_wrapper extends Component {
  state = {
    title: "",
    author: "",
    text_content: [],
    pdf_file: "",

    placeholder:
      "1: Tukaj piši besedilo in akorde \n2: \n1: Vsaka prva vrstica se bo izpisala rdeče in je namenjena za vpis akordov\n2: Vsaka druga vrstica se bo izpisala črno in je namenjena za vpis besedila\n1:\n2: Za 2 vrstice besedila brez akordov\n1:\n2: izpusti eno vrstico\n1:\n2:\n.\n.\n.\n\nGlej desno stran, ki prikazuje izgled na spletni strani",
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onChange_text_content = (e) =>
    this.setState({ [e.target.name]: e.target.value.split(/\r?\n/) });

  handleFiles = (file) => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $("#blah").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  render() {
    return (
      <div className={styles.split_form_display}>
        <div className={styles.form_wrapper}>
          <div className={styles.form}>
            <div className={styles.naslov_form}>
              <h2>Obrazec za oddajo Besedil in Akordov:</h2>
            </div>
            <form action="localhost:3002/api/songs/add_song" method="post">
              <div className={styles.text_input}>
                <input
                  type="text"
                  className={styles.text}
                  placeholder="Naslov pesmi (*)"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <div className={styles.text_input}>
                <input
                  type="text"
                  className={styles.text}
                  placeholder="Izvajalec"
                  name="author"
                  value={this.state.author}
                  onChange={this.onChange}
                />
              </div>
              <div className={styles.text_input}>
                <input
                  type="text"
                  className={styles.text}
                  name="youtube_link"
                  placeholder="youtube link (*)"
                />
              </div>
              <div className={styles.area_input}>
                <textarea
                  name="text_content"
                  onChange={this.onChange_text_content}
                  placeholder={this.state.placeholder}
                ></textarea>
              </div>
              <div className={styles.pdf_upload}>
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
              <div className={styles.izberite}>
                Izberite vse kategorije v katere pesem spada:
              </div>
              <div className={styles.pick_categories}>
                <div className={styles.cat}>
                  <input type="checkbox" name="slovenska" />
                  <label>slovenska</label>
                </div>
                <div className={styles.cat}>
                  <input type="checkbox" name="narodna" />
                  <label>narodno zabavna</label>
                </div>
                <div className={styles.cat}>
                  <input type="checkbox" name="dalmatinska" />
                  <label>dalmatinska</label>
                </div>

                <div className={styles.cat}>
                  <input type="checkbox" name="otroska" />
                  <label>otroška</label>
                </div>
              </div>
              <div className={styles.pick_categories}>
                <div className={styles.cat}>
                  <input type="checkbox" name="angleska" />
                  <label>angleška&nbsp;</label>
                </div>

                <div className={styles.cat}>
                  <input type="checkbox" name="slovenska popevka" />
                  <label>slovenska popevka</label>
                </div>

                <div className={styles.cat}>
                  <input type="checkbox" name="ljudska" />
                  <label>ljudska</label>
                </div>

                <div className={styles.cat}>
                  <input type="checkbox" name="bozicna" />
                  <label>božična</label>
                </div>
              </div>
              <div className={styles.submit_button}>
                <input type="submit" value="Oddaj obrazec" />
              </div>
            </form>
          </div>
        </div>
        <div className={styles.display_wrapper}>
          <div className={styles.display_content}>
            <img
              className={styles.image_a4}
              src="../static/a4.png"
              alt="test"
            />
            <div className={styles.content}>
              <div className={styles.title}>
                <h2>{this.state.title}</h2>
              </div>
              <div className={styles.author}>
                <h2>{this.state.author}</h2>
              </div>
              <div className={styles.text_content}>
                <ul className={this.state.pdf_file ? "hidden" : "noclass"}>
                  {this.state.text_content.map((text_line, index) =>
                    index % 2 === 0 ? (
                      <li key={index} className={styles.li_akord}>
                        {text_line}
                      </li>
                    ) : (
                      <li key={index} className={styles.li_text}>
                        {text_line}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className={this.state.pdf_file ? "show" : "hidden"}>
              <div className={styles.file_name}>
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
