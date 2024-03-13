import React from 'react';
import '../styles.css';

export default class RefreshAllBtn extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="btnRefreshAll">
        Refresh All
      </button>
    );
  }
}
