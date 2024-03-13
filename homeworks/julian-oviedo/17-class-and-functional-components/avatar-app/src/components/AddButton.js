import React from 'react';

class AddButton extends React.Component {
  render() {
    return (
      <button className="bttn-add" onClick={this.props.onClick}>
        +
      </button>
    );
  }
}

export default AddButton;
