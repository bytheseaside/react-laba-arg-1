import React from 'react';
import refreshImg from '../assets/images/refresh.svg';

class AvatarCard extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card__avatar" src={this.props.avatarImg} alt=""></img>
        <img className="card__refresh-icon" src={refreshImg} onClick={this.props.onClick} alt=""></img>
      </div>
    );
  }
}

export default AvatarCard;
