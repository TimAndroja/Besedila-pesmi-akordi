import React, { Component } from "react";
import styles from "../../scss/_form_display_wrapper.module.scss";
import axios from "axios";

/* 210 × 297 */

class Form_display_wrapper extends Component {
  state = {
    title: "",
    author: "",
    youtube: "",
    text_content: [],
    text_area: "",
    pdf_bin: null,
    pdf_file: "",
    slovenska: false,
    narodna: false,
    dalmatinska: false,
    otroska: false,
    tuja: false,
    popevka: false,
    ljudska: false,
    bozicna: false,

    zamik: 0,
    font_size: 0.8,

    placeholder:
      "1: Tukaj piši besedilo in akorde \n2: \n1: Vsaka prva vrstica se bo izpisala rdeče in je namenjena za vpis akordov\n2: Vsaka druga vrstica se bo izpisala črno in je namenjena za vpis besedila\n1:\n2: Za 2 vrstice besedila brez akordov\n1:\n2: izpusti eno vrstico\n1:\n2:\n.\n.\n.\n\nGlej desno stran, ki prikazuje izgled na spletni strani",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChange_text_content = (e) => {
    this.setState({ text_area: e.target.value }, () => {
      this.refresh_zamik();
    });
  };
  handleFile = (e) => {
    let file = e.target.files[0];
    this.setState({ pdf_bin: file });

    //For displaying file name
    this.onChange(e);
  };

  checkbox_change = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState({ [item]: isChecked });
  };
  //zamik
  refresh_zamik = () => {
    let zamik = " ".repeat(this.state.zamik);
    let arr = this.state.text_area.split(/\r?\n/).map((i) => {
      if (i == "") return i;
      else return zamik + i;
    });
    this.setState({ text_content: arr });
  };

  update_state = (num) => {
    this.setState({ zamik: this.state.zamik + num }, () => {
      this.refresh_zamik();
    });
  };

  b2p = (e) => {
    e.preventDefault();
    this.update_state(1);
  };
  b2m = (e) => {
    e.preventDefault();
    if (this.state.zamik > 0) this.update_state(-1);
  };

  //Font size
  b1p = (e) => {
    e.preventDefault();
    let inc = 0.1;
    if (this.state.font_size < 1.8) {
      let res = parseFloat(this.state.font_size) + inc;
      this.setState({ font_size: res.toFixed(1) });
    }
  };
  b1m = (e) => {
    e.preventDefault();
    let inc = 0.1;
    if (this.state.font_size > 0.5) {
      let res = parseFloat(this.state.font_size) - inc;
      this.setState({ font_size: res.toFixed(1) });
    }
  };

  post_song = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("author", this.state.author);
    formData.append("youtube", this.state.youtube);
    formData.append("text_content", this.state.text_content.join("\n"));
    formData.append("pdf_file", this.state.pdf_bin);
    formData.append("slovenska", this.state.slovenska);
    formData.append("dalmatinska", this.state.dalmatinska);
    formData.append("tuja", this.state.tuja);
    formData.append("narodna", this.state.narodna);
    formData.append("otroska", this.state.otroska);
    formData.append("bozicna", this.state.bozicna);
    formData.append("popevka", this.state.popevka);
    formData.append("ljudska", this.state.ljudska);
    formData.append("font_size", this.state.font_size);
    console.log(formData);

    const contenttype = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:3002/api/songs/add_song", formData, contenttype)
      .then(function (response) {
        alert(JSON.stringify(response.data));
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className={styles.split_form_display}>
        <div className={styles.form_wrapper}>
          <div className={styles.form}>
            <div className={styles.naslov_form}>
              <h2>Obrazec za oddajo Besedil in Akordov:</h2>
            </div>
            <form onSubmit={this.post_song}>
              <div className={styles.text_input}>
                <div>
                  <label>Naslov: </label>
                </div>
                <input
                  type="text"
                  className={styles.text}
                  placeholder="Naslov pesmi (*)"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  required="1"
                />
              </div>
              <div className={styles.text_input}>
                <div>
                  <label>Avtor: </label>
                </div>

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
                <div>
                  <label>Youtube povezava: </label>
                </div>

                <input
                  type="text"
                  className={styles.text}
                  name="youtube"
                  value={this.state.youtube}
                  onChange={this.onChange}
                  placeholder="youtube link (*)"
                  required="1"
                />
              </div>

              <div className={styles.area_input}>
                <div>
                  <label>
                    Tukaj pišite besedilo in akorde pesmi ali spodaj pripnite
                    .pdf datoteko:
                  </label>
                </div>
                <div className={styles.options}>
                  <div className={styles.font_size}>
                    <div className={styles.select1}>
                      <div className={styles.velikost_pisave}>
                        Zamik besedila v desno:
                      </div>
                      <button onClick={this.b2m}>-</button>
                      <div className={styles.root_select}>
                        {this.state.zamik}
                      </div>
                      <button onClick={this.b2p}>+</button>
                    </div>
                  </div>
                  <div className={styles.font_size}>
                    <div className={styles.select1}>
                      <div className={styles.velikost_pisave}>
                        Velikost pisave:
                      </div>
                      <button onClick={this.b1m}>-</button>
                      <div className={styles.root_select}>
                        {this.state.font_size}
                      </div>
                      <button onClick={this.b1p}>+</button>
                    </div>
                  </div>
                </div>
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
                  accept="application/pdf"
                  name="pdf_file"
                  onChange={this.handleFile}
                  value={this.state.pdf_file}
                />
              </div>
              <div className={styles.izberite}>
                Izberite vse kategorije v katere pesem spada:
              </div>
              <div className={styles.pick_categories}>
                <div className={styles.cat}>
                  <input
                    type="checkbox"
                    name="slovenska"
                    onChange={this.checkbox_change}
                  />
                  <label>slovenska</label>
                </div>
                <div className={styles.cat}>
                  <input
                    type="checkbox"
                    name="narodna"
                    onChange={this.checkbox_change}
                  />
                  <label>narodno zabavna</label>
                </div>
                <div className={styles.cat}>
                  <input
                    type="checkbox"
                    name="dalmatinska"
                    onChange={this.checkbox_change}
                  />
                  <label>dalmatinska</label>
                </div>

                <div className={styles.cat}>
                  <input
                    type="checkbox"
                    name="otroska"
                    onChange={this.checkbox_change}
                  />
                  <label>otroška</label>
                </div>
              </div>
              <div className={styles.pick_categories}>
                <div className={styles.cat}>
                  <input
                    type="checkbox"
                    name="tuja"
                    onChange={this.checkbox_change}
                  />
                  <label>tuja&nbsp;</label>
                </div>

                <div className={styles.cat}>
                  <input
                    type="checkbox"
                    name="popevka"
                    onChange={this.checkbox_change}
                  />
                  <label>slovenska popevka</label>
                </div>

                <div className={styles.cat}>
                  <input
                    type="checkbox"
                    name="ljudska"
                    onChange={this.checkbox_change}
                  />
                  <label>ljudska</label>
                </div>

                <div className={styles.cat}>
                  <input
                    type="checkbox"
                    name="bozicna"
                    onChange={this.checkbox_change}
                  />
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
                <ul
                  style={
                    this.state.pdf_file
                      ? { visibility: "hidden" }
                      : { visibility: "visible" }
                  }
                >
                  {this.state.text_content.map((text_line, index) =>
                    index % 2 === 0 ? (
                      <li
                        key={index}
                        className={styles.li_akord}
                        style={{ fontSize: this.state.font_size + "vw" }}
                      >
                        {text_line}
                      </li>
                    ) : (
                      <li
                        key={index}
                        className={styles.li_text}
                        style={{ fontSize: this.state.font_size + "vw" }}
                      >
                        {text_line}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div
              className={styles.pdf_file}
              style={
                this.state.pdf_file
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            >
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
