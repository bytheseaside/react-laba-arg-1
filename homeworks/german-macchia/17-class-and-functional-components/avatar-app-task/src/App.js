import "./App.css";
import React, { Component, createRef } from "react";
import GetButton from "./components/GetButton";
import PhotoList from "./components/PhotoList";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.list = createRef();
    this.button = createRef();
  }

  //when GetButton pushed, will trigger to PhotoList Children component addPhoto Function
  //After this, will trigger setLoading from GetButton to false
  pushPhoto = async () => {
    await this.list.current.addPhoto();
    this.button.current.setLoading(false);
  };

  //Will trigger RefreshList from PhotoList Children component
  refreshAll = () => {
    this.list.current.refreshList();
  };

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <ErrorBoundary>
            <PhotoList ref={this.list} />
            <GetButton ref={this.button} pushPhoto={this.pushPhoto} />
          </ErrorBoundary>
        </div>
        <footer>
          <button className="footer__button" onClick={this.refreshAll}>
            Refresh All
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
