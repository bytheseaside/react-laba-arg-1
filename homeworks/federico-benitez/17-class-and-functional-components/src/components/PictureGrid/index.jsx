import React, { Component } from 'react';
import { AddNewPhoto, Picture, RefreshButton } from '../../components';

import styles from './style.module.css';

export default class PictureGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { images: props.data, refetchingImages: [] };
    this.refreshAll = this.refreshAll.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.refetchingImages.length > 0) {
      const index = state.refetchingImages[0];
      if (props.data[index] !== state.images[index]) {
        return { images: props.data, refetchingImages: [] };
      }
    }

    return { ...state, images: props.data };
  }

  handleRefresh(index) {
    this.setState({ refetchingImages: [index] });
    this.props.handleRefresh(index);
  }

  refreshAll() {
    const loadingImagesIndex = [...Array(this.state.images.length)].map((_, i) => i);
    this.setState({ refetchingImages: loadingImagesIndex });
    this.props.handleRefreshAll();
  }

  render() {
    return (
      <>
        <ul className={styles.gridPhotos}>
          {this.state.images.map((img, i) => (
            <li key={i} onClick={() => this.handleRefresh(i)}>
              <Picture url={img} index={i} refetchingImages={this.state.refetchingImages} />
            </li>
          ))}
          <AddNewPhoto onClick={this.props.handleAdd} />
        </ul>
        <footer className={styles.footer}>
          {this.state.images.length > 0 && <RefreshButton onClick={this.refreshAll} />}
        </footer>
      </>
    );
  }
}
