import React, { Component } from "react";
import "../../scss/_form.scss";

class Form extends Component {
  state = {
    placeholder:
      "Tukaj piši besedilo in akorde \n \n1: Vsaka prva vrstica se bo izpisala rdeče in je namenjena za vpis akordov\n2: Vsaka druga vrstica se bo izpisala črno in je namenjena za vpis besedila\n1:\n2: Za 2 vrstice besedila brez akordov\n1:\n2: izpusti eno vrstico\n1:\n2:\n.\n.\n.\n\nGlej desno stran, ki prikazuje izgled na spletni strani"
  };
  render() {
    return (
      <div className="form">
        <div className="naslov_form">
          <h2>Obrazec za oddajo Besedil in Akordov:</h2>
        </div>
        <form action="">
          <div className="text_input">
            <input
              type="text"
              className="text"
              placeholder="Naslov pesmi (*)"
            />
          </div>
          <div className="text_input">
            <input type="text" className="text" placeholder="Izvajalec" />
          </div>
          <div className="text_input">
            <input
              type="text"
              className="text"
              placeholder="youtube link (*)"
            />
          </div>
          <div className="area_input">
            <textarea
              name=""
              id=""
              placeholder={this.state.placeholder}
            ></textarea>
          </div>
          <div className="pdf_upload">
            Če imate .pdf datoteko jo lahko oddate namesto vpisa besedila:
            <br />
            <input type="file" name="upload" accept="application/pdf" />
          </div>
          <div className="submit_button">
            <input type="submit" value="Oddaj obrazec" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
