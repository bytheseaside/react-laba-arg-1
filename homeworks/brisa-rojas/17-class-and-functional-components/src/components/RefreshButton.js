import React from 'react';

class RefreshAllButton extends React.Component {
  render() {
    return (
      <div className="refresh-all-button" onClick={this.props.onClick}>
        REFRESH ALL
      </div>
    );
  }
}

export default RefreshAllButton;
