import React from 'react';
import refreshIcon from '../refresh-icon.svg';

class AvatarTile extends React.Component {
  render() {
    return (
      <div className="avatar-tile tile" onClick={this.props.onClick}>
        <img className="avatar-tile__img" src={this.props.avatarURL} alt="avatar img" />
        <div
          className={
            this.props.isLoading ? 'avatar-tile__overlay avatar-tile__overlay_loading' : 'avatar-tile__overlay'
          }
        >
          <img
            className={
              this.props.isLoading
                ? 'avatar-tile__refresh-icon avatar-tile__refresh-icon_loading'
                : 'avatar-tile__refresh-icon'
            }
            src={refreshIcon}
            alt="refresh img"
          />
        </div>
      </div>
    );
  }
}

export default AvatarTile;
