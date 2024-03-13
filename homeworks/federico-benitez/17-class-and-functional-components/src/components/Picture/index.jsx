import React from 'react';
import styles from './style.module.css';
class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: props.index, url: props.url, isLoading: false, isHover: false };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const isLoading = props.refetchingImages.some((imgIndex) => imgIndex === state.index);
    return { ...state, url: props.url, isLoading };
  }

  onMouseEnter() {
    this.setState({ isHover: true });
  }

  onMouseLeave() {
    this.setState({ isHover: false });
  }

  render() {
    return (
      <div className={styles.card} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {(this.state.isLoading || this.state.isHover) && (
          <div className={styles.overlay}>
            <img
              src="/001-refresh.svg"
              alt="reloading"
              className={`${styles.loading} ${this.state.isLoading ? styles.spin : ''}`}
            />
          </div>
        )}
        <img src={this.state.url} className={styles.photo} alt="photo" />
      </div>
    );
  }
}

export default Picture;
