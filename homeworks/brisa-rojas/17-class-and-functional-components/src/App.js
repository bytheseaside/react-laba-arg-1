import './App.css';
import React from 'react';
import AddButton from './components/AddButton';
import AvatarTile from './components/AvatarTile';
import RefreshAllButton from './components/RefreshButton';
import errorImg from './error.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarCounter: 0,
      avatarImages: [],
      avatarLoading: [],
    };
    this.addAvatar = this.addAvatar.bind(this);
    this.getNewAvatarImage = this.getNewAvatarImage.bind(this);
    this.refreshAvatarImage = this.refreshAvatarImage.bind(this);
    this.RefreshAllHandler = this.RefreshAllHandler.bind(this);
  }

  async addAvatar() {
    const newAvatarImage = await this.getNewAvatarImage();
    this.setState((state) => ({
        avatarCounter: state.avatarCounter + 1,
        avatarImages: [...state.avatarImages, newAvatarImage],
        avatarLoading: [...state.avatarLoading, false],
      })
    );
  }

  async getNewAvatarImage() {
    return fetch('https://tinyfac.es/api/data?limit=1')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('image could not be fecthed');
        }
      })
      .then((data) => {
        return data[0].url;
      })
      .catch((e) => {
        return errorImg;
      });
  }

  async refreshAvatarImage(avatarId) {
    let onLoadAvatar = [...this.state.avatarLoading];
    onLoadAvatar[avatarId] = true;
    this.setState(() => ({ avatarLoading: onLoadAvatar }));

    let newAvatarURL = await this.getNewAvatarImage();

    let newAvatarImages = this.state.avatarImages.map((avatarImage, index) => {
      if (index === avatarId) {
        return newAvatarURL;
      } else {
        return avatarImage;
      }
    });
    onLoadAvatar[avatarId] = false;
    this.setState({ avatarImages: newAvatarImages, avatarLoading: onLoadAvatar });
  }

  async RefreshAllHandler() {
    let onLoadAvatar = [...this.state.avatarLoading];
    onLoadAvatar.fill(true);
    this.setState(() => ({ avatarLoading: onLoadAvatar }));

    let newAvatarImages = await Promise.all(
      this.state.avatarImages.map((avatarImage) => {
        return this.getNewAvatarImage();
      })
    );
    onLoadAvatar.fill(false);
    this.setState({ avatarImages: newAvatarImages, avatarLoading: onLoadAvatar });
  }
  render() {
    return (
      <div className="App">
        <div className="avatar-container">
          {this.state.avatarImages.map((avatarImage, index) => {
            return (
              <AvatarTile
                key={'Avatar #' + index}
                avatarURL={avatarImage}
                isLoading={this.state.avatarLoading[index]}
                onClick={() => this.refreshAvatarImage(index)}
              />
            );
          })}
          <AddButton onClick={this.addAvatar} />
        </div>
        <RefreshAllButton
          onClick={() => this.RefreshAllHandler()}
        />
      </div>
    );
  }
}

export default App;
