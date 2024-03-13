import React, { Component } from 'react';
import styles from './style.module.css';
export default class AddNewPhoto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className={styles.addButton} onClick={this.props.onClick} />
      </div>
    );
  }
}
