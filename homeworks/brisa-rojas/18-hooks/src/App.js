import './styles/App.css';
import { React, useState } from 'react';
import AddButton from './components/AddButton/AddButton.js';
import AvatarTile from './components/AvatarTile/AvatarTile.js';
import RefreshButton from './components/RefreshButton/RefreshButton.js';
import errorImg from './assets/error.jpg';

const URL = 'https://tinyfac.es/api/data?limit=1&quality=0';

function App() {
  const [avatars, setAvatars] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState([]);

  async function getImage() {
    return fetch(URL)
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

  async function addAvatar() {
    let newAvatars = [...avatars];
    let newAvatar = await getImage();
    newAvatars.push(newAvatar);
    setAvatars(newAvatars);
    setIsRefreshing([...isRefreshing, false]);
  }

  async function refreshAvatar(index) {
    let refreshingState = [...isRefreshing];
    refreshingState[index] = true;
    setIsRefreshing(refreshingState);
    let modifiedAvatars = [...avatars];
    let modifiedAvatar = await getImage();
    modifiedAvatars[index] = modifiedAvatar;
    refreshingState[index] = false;
    setIsRefreshing(refreshingState);
    setAvatars(modifiedAvatars);
  }

  async function refreshAll() {
    let onLoadAvatar = [...isRefreshing];
    onLoadAvatar.fill(true);
    setIsRefreshing(onLoadAvatar);

    let newAvatarImages = await Promise.all(
      avatars.map((avatarImage, index) => {
        return getImage();
      }),
    );

    onLoadAvatar.fill(false);
    setIsRefreshing(onLoadAvatar);
    setAvatars(newAvatarImages);
  }

  return (
    <div className="App">
      <div className="avatar-container">
        {avatars.map((avatar, index) => (
          <AvatarTile
            key={index}
            avatarURL={avatar}
            isRefreshing={isRefreshing[index]}
            onClick={() => {
              refreshAvatar(index);
            }}
          />
        ))}
        <AddButton onClick={addAvatar} />
      </div>

      <RefreshButton onClick={refreshAll} />
    </div>
  );
}

export default App;
