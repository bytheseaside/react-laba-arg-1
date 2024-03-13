import React from 'react';

class AddButton extends React.Component {
  render() {
    return (
      <div className="add-avatar-tile tile" onClick={this.props.onClick}>
        +
      </div>
    );
  }
}

export default AddButton;
