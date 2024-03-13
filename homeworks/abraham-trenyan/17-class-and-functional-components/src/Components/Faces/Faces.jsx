import React, { Component } from 'react';
import RefreshIcon from '../RefreshIcon/RefreshIcon';
import './faces.css';
class Faces extends Component {
  constructor() {
    super();
    this.state = { images: [] };
  }
  addImg = async () => {
    let response = await fetch(`https://tinyfac.es/api/data?limit=1&quality=0`);
    response.json().then((result) => {
      this.setState((prevState) => {
        return {
          images: [...prevState.images, result[0].url],
        };
      });
    });
  };
  refreshImg = async (e) => {
    let response = await fetch(`https://tinyfac.es/api/data?limit=1&quality=0`);
    response.json().then((result) => {
      this.setState((prevState) => {
        let newState = [...prevState.images];
        newState[e.target.parentElement.id] = result[0].url;
        return {
          images: [...newState],
        };
      });
    });
  };
  refreshAll = async () => {
    let response = await fetch(`https://tinyfac.es/api/data?limit=${this.state.images.length}&quality=0`);
    response.json().then((result) => {
      this.setState(() => {
        let newImgs = [];
        for (let i = 0; i < result.length; i++) {
          newImgs.push(result[i].url);
        }
        return {
          images: [...newImgs],
        };
      });
    });
  };
  render() {
    return (
      <main>
        <section className="faces__container">
          {this.state.images.map((url, index) => (
            <div className="face" id={index} key={index} onClick={(e) => this.refreshImg(e)}>
              <div className="face__img face__img--layer">
                <RefreshIcon />
              </div>
              <img className="face__img" src={url} loading="lazy" alt="random person"></img>
            </div>
          ))}
          <div className="add" onClick={this.addImg}>
            <div className="add__horizontal-line"></div>
            <div className="add__vertical-line"></div>
          </div>
        </section>
        <footer className="refresh-all">
          {this.state.images.length > 1 && (
            <button className="refresh-all__button" onClick={this.refreshAll}>
              Refresh All
            </button>
          )}
        </footer>
      </main>
    );
  }
}

export default Faces;
