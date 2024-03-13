import React from 'react';
import '../styles.css';

export default class AddButton extends React.Component {
  render() {
    return (
      <>
        <div className="addButton" onClick={this.props.onClick}>
          <div className="verticalLine"></div>
          <div className="horizontalLine"></div>
        </div>
      </>
    );
  }
}
