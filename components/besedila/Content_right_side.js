import React, { Component } from "react";
import styles from "../../scss/_content_right_side.module.scss";

class Content_right_side extends Component {
  state = {
    tones: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"],
    select1: 0,
    select2: 7,
  };
 

  //TRANSPOSE FUNCTIONS
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
      <div className={styles.right_side_display}>
        <div className={styles.go_middle}>
          <div className={styles.space_vert}>
            <div>
              <div className={styles.meta_title}>
                <h1><span className={styles.span_title}>Besedilo z akordi za kitaro</span> <br /> {this.props.song.songData[0].title}</h1>
              </div>
              <div className={styles.author_views}>
                <div className={styles.meta_author}>
                  <h2>{this.props.song.songData[0].author}</h2>
                </div>
                <div className={styles.meta_views}>
                  {this.props.song.songData[0].views} ogledov
                </div>
              </div>

              <div className={styles.youtube_video}>
                <iframe
                  title={this.props.song.songData[0].title + " " + this.props.song.songData[0].author}
                  src={this.props.song.songData[0].youtube.replace("watch?v=", "embed/")}
                  frameBorder="0"
                  allowFullScreen="1"
                  className="video"
                ></iframe>
              </div>
            </div>
            <div>
              <div className={styles.wrapper_transpose}>
                <div className={styles.wrapper_select}>
                  <div className={styles.select1}>
                    <div className={styles.iz}> IZ:</div>
                    <button onClick={this.b1m}>-</button>
                    <div className={styles.root_select}>
                      {this.state.tones[this.state.select1]}
                    </div>
                    <button onClick={this.b1p}>+</button>
                  </div>
                  <div className={styles.transpose_title}>Transponator</div>
                  <div className={styles.select2}>
                    <div className={styles.iz}> V:</div>
                    <button onClick={this.b2m}>-</button>
                    <div className={styles.root_select}>
                      {this.state.tones[this.state.select2]}
                    </div>
                    <button onClick={this.b2p}>+</button>
                  </div>
                </div>
                <div className={styles.t_wrapper}>
                  <div className={styles.notes}>
                    <div className={styles.transpose1}>IZ:</div>
                    <div className={styles.arrow}>&nbsp; </div>
                    <div className={styles.transpose2}>V&nbsp;:</div>
                  </div>
                  <div className={styles.root}>
                    <div className={styles.transpose1}>
                      {this.transpose1(0)}
                    </div>
                    <div className={styles.arrow}>▼</div>
                    <div className={styles.transpose2}>
                      {this.transpose2(0)}
                    </div>
                  </div>
                  <div className={styles.notes}>
                    <div className={styles.transpose1}>
                      {this.transpose1(1)}
                    </div>
                    <div className={styles.arrow}>▼</div>
                    <div className={styles.transpose2}>
                      {this.transpose2(1)}
                    </div>
                  </div>
                  <div className={styles.notes}>
                    <div className={styles.transpose1}>
                      {this.transpose1(2)}
                    </div>
                    <div className={styles.arrow}>▼</div>
                    <div className={styles.transpose2}>
                      {this.transpose2(2)}
                    </div>
                  </div>
                  <div className={styles.notes}>
                    <div className={styles.transpose1}>
                      {this.transpose1(3)}
                    </div>
                    <div className={styles.arrow}>▼</div>
                    <div className={styles.transpose2}>
                      {this.transpose2(3)}
                    </div>
                  </div>
                  <div className={styles.notes}>
                    <div className={styles.transpose1}>
                      {this.transpose1(4)}
                    </div>
                    <div className={styles.arrow}>▼</div>
                    <div className={styles.transpose2}>
                      {this.transpose2(4)}
                    </div>
                  </div>
                  <div className={styles.notes}>
                    <div className={styles.transpose1}>
                      {this.transpose1(5)}
                    </div>
                    <div className={styles.arrow}>▼</div>
                    <div className={styles.transpose2}>
                      {this.transpose2(5)}
                    </div>
                  </div>
                  <div className={styles.notes}>
                    <div className={styles.transpose1}>
                      {this.transpose1(6)}
                    </div>
                    <div className={styles.arrow}>▼</div>
                    <div className={styles.transpose2}>
                      {this.transpose2(6)}
                    </div>
                  </div>
                  <div className={styles.notes}>
                    <div className={styles.transpose1}>
                      {this.transpose1(7)}
                    </div>
                    <div className={styles.arrow}>▼</div>
                    <div className={styles.transpose2}>
                      {this.transpose2(7)}
                    </div>
                  </div>
                  <div className={styles.notes}>
                    <div className={styles.transpose1}>
                      {this.transpose1(8)}
                    </div>
                    <div className={styles.arrow}>▼</div>
                    <div className={styles.transpose2}>
                      {this.transpose2(8)}
                    </div>
                  </div>
                  <div className={styles.notes}>
                    <div className={styles.transpose1}>
                      {this.transpose1(9)}
                    </div>
                    <div className={styles.arrow}>▼</div>
                    <div className={styles.transpose2}>
                      {this.transpose2(9)}
                    </div>
                  </div>
                  <div className={styles.notes}>
                    <div className={styles.transpose1}>
                      {this.transpose1(10)}
                    </div>
                    <div className={styles.arrow}>▼</div>
                    <div className={styles.transpose2}>
                      {this.transpose2(10)}
                    </div>
                  </div>
                  <div className={styles.notes}>
                    <div className={styles.transpose1}>
                      {this.transpose1(11)}
                    </div>
                    <div className={styles.arrow}>▼</div>
                    <div className={styles.transpose2}>
                      {this.transpose2(11)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.oglas}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content_right_side;
