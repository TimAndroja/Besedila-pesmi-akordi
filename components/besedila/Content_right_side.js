import React, { Component } from "react";
import "../../scss/_content_right_side.scss";

class Content_right_side extends Component {
  state = {
    tones: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"],
    select1: 0,
    select2: 7,
  };
  transpose1(index) {
    return this.state.tones[(this.state.select1 + index) % 12];
  }
  transpose2(index) {
    return this.state.tones[(this.state.select2 + index) % 12];
  }
  b1p = (e) => {
    let res = 0;
    if (this.state.select1 != 11) {
      res = this.state.select1 + 1;
    }
    this.setState({ select1: res });
  };
  b1m = (e) => {
    let res = 11;
    if (this.state.select1 != 0) {
      res = this.state.select1 - 1;
    }
    this.setState({ select1: res });
  };
  b2p = (e) => {
    let res = 0;
    if (this.state.select2 != 11) {
      res = this.state.select2 + 1;
    }
    this.setState({ select2: res });
  };
  b2m = (e) => {
    let res = 11;
    if (this.state.select2 != 0) {
      res = this.state.select2 - 1;
    }
    this.setState({ select2: res });
  };
  render() {
    return (
      <div className="right_side_display">
        <div className="go_middle">
          <div class="space_vert">
            <div>
              <div className="meta_title">
                <h1>Zvončki in trobentice</h1>
              </div>
              <div className="author_views">
                <div className="meta_author">
                  <h2>Ansambel Objem</h2>
                </div>
                <div className="meta_views">123 ogledov</div>
              </div>

              <div className="youtube_video">
                <iframe
                  src="//www.youtube.com/embed/yCOY82UdFrw"
                  frameborder="0"
                  allowfullscreen
                  width="60%"
                  class="video"
                ></iframe>
              </div>
            </div>
            <div>
              <div className="wrapper_transpose">
                <div className="wrapper_select">
                  <div className="select1">
                    <button onClick={this.b1m}>-</button>
                    <div className="root_select">
                      {this.state.tones[this.state.select1]}
                    </div>
                    <button onClick={this.b1p}>+</button>
                  </div>
                  <div className="transpose_title">Transponator</div>
                  <div className="select2">
                    <button onClick={this.b2m}>-</button>
                    <div className="root_select">
                      {this.state.tones[this.state.select2]}
                    </div>
                    <button onClick={this.b2p}>+</button>
                  </div>
                </div>
                <div className="t_wrapper">
                  <div className="root">
                    <div className="transpose1">{this.transpose1(0)}</div>
                    <div className="transpose2">{this.transpose2(0)}</div>
                  </div>
                  <div className="notes">
                    <div className="transpose1">{this.transpose1(1)}</div>
                    <div className="transpose2">{this.transpose2(1)}</div>
                  </div>
                  <div className="notes">
                    <div className="transpose1">{this.transpose1(2)}</div>
                    <div className="transpose2">{this.transpose2(2)}</div>
                  </div>
                  <div className="notes">
                    <div className="transpose1">{this.transpose1(3)}</div>
                    <div className="transpose2">{this.transpose2(3)}</div>
                  </div>
                  <div className="notes">
                    <div className="transpose1">{this.transpose1(4)}</div>
                    <div className="transpose2">{this.transpose2(4)}</div>
                  </div>
                  <div className="notes">
                    <div className="transpose1">{this.transpose1(5)}</div>
                    <div className="transpose2">{this.transpose2(5)}</div>
                  </div>
                  <div className="notes">
                    <div className="transpose1">{this.transpose1(6)}</div>
                    <div className="transpose2">{this.transpose2(6)}</div>
                  </div>
                  <div className="notes">
                    <div className="transpose1">{this.transpose1(7)}</div>
                    <div className="transpose2">{this.transpose2(7)}</div>
                  </div>
                  <div className="notes">
                    <div className="transpose1">{this.transpose1(8)}</div>
                    <div className="transpose2">{this.transpose2(8)}</div>
                  </div>
                  <div className="notes">
                    <div className="transpose1">{this.transpose1(9)}</div>
                    <div className="transpose2">{this.transpose2(9)}</div>
                  </div>
                  <div className="notes">
                    <div className="transpose1">{this.transpose1(10)}</div>
                    <div className="transpose2">{this.transpose2(10)}</div>
                  </div>
                  <div className="notes">
                    <div className="transpose1">{this.transpose1(11)}</div>
                    <div className="transpose2">{this.transpose2(11)}</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="oglas"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content_right_side;
