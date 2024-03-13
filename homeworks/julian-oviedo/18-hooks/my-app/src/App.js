import { React, useState } from 'react';
import './App.css';
import RefreshAllButton from './components/RefreshAllButton';
import AddButton from './components/AddButton';
import AvatarCard from './components/AvatarCard';
import fetchErrorImg from './assets/images/fetchErrorImg.svg';

const URL = 'https://tinyfac.es/api/data?limit=1&quality=0';

function App() {
  const [avatars, setAvatars] = useState([]);

  function getAvatar() {
    return fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Something went wrong please try again later');
      })
      .then((dataJson) => {
        return dataJson[0].url;
      })
      .catch((err) => {
        console.log(err);
        return fetchErrorImg;
      });
  }

  async function addAvatar() {
    const newAvatar = await getAvatar();
    const newList = [...avatars, newAvatar];
    setAvatars(newList);
  }

  async function refreshClickedAvatar(avatarId) {
    const newAvatar = await getAvatar();
    let newList = avatars.map((avatar, index) => {
      if (index === avatarId) {
        return newAvatar;
      }
      return avatar;
    });
    setAvatars(newList);
  }

  async function refreshAllAvatars() {
    let newList = await Promise.all(
      avatars.map(() => {
        return getAvatar();
      }),
    );
    setAvatars(newList);
  }

  return (
    <div className="App">
      <div className="cards-container">
        {avatars.map((avatar, index) => {
          return <AvatarCard key={index} avatarImg={avatar} onClick={() => refreshClickedAvatar(index)} />;
        })}
        <AddButton onClick={addAvatar} />
      </div>
      <RefreshAllButton onClick={refreshAllAvatars} />
    </div>
  );
}

export default App;
