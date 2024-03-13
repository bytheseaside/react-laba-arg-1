import React from 'react';
import '../styles.css';
import Refresh from '../assets/refresh-button.svg';

export default class Img extends React.Component {
  render() {
    return (
      <>
        <img src={Refresh} className="refresh-button" onClick={this.props.onClick} />
        <img src={this.props.src} alt="" className="avatar" />
      </>
    );
  }
}
