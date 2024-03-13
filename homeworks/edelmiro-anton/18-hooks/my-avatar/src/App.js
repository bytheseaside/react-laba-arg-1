import React, { useState } from 'react';
import './styles.css';
import { AddButton } from './components/AddButton';
import { Img } from './components/Img';
import { RefreshAllBtn } from './components/RefreshAllBtn';
import { Loader } from './components/Loader';

export const App = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAvatar = async () => {
    const resp = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    if (!resp.ok) {
      alert('Sorry, the web site brokes down :( Try again in a few minutes.');
    }
    const data = await resp.json();
    return data[0];
  };

  const addAvatar = () => {
    fetchAvatar().then((person) => {
      setPeople([...people, { ...person }]);
    });
    setLoading(false);
  };

  const refreshAvatar = (index) => {
    fetchAvatar().then((person) => {
      const refresh = [...people];
      refresh.splice(index, 1, person);
      setPeople([...refresh]);
    });
    setLoading(false);
  };

  // When the user clicks on the "refresh all button", 
  //loading text appears for a few moment
  const refreshAll = async () => {
    setLoading(true);
    const refreshAvatar = await Promise.all([...people].map(() => fetchAvatar()));
    setPeople(refreshAvatar);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div style={{ display: '-webkit-box' }}>
            {people.map((person, index) => (
              <Img src={person.url} onClick={() => refreshAvatar(index)} />
            ))}
            <AddButton onClick={addAvatar} />
          </div>
          <div className="refreshContainer">{people.length ? <RefreshAllBtn onClick={refreshAll} /> : null}</div>
        </div>
      )}
    </>
  );
};
