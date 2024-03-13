import { useState } from 'react';
import './App.css';

export default function App() {
  /* we set the state */
  const [posts, setPosts] = useState([]);

  /* Fetchs a single user pressin "+" button function*/
  async function fetchOneUser() {
    let response = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    let postFetched = await response.json();
    setPosts(
      /* We add in "posts" the single element fetchet */
      [...posts, postFetched[0]],
    );
  }

  async function refreshOneUser(id) {
    let response = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    let postFetched = await response.json();
    let reFetch = [...posts];
    /* Here, the clicked picture runs this functions and fetches a new element from the API and is replaced using the ID number */
    reFetch[id] = postFetched[0];
    setPosts(reFetch);
  }

  async function refreshEveryUser() {
    /* For each element we fetched in "posts", we run the "refresh one user" funtion again to replace all pictures */
    posts.forEach((user, id) => {
      refreshOneUser(id);
    });
  }

  return (
    <div className="App">
      <ul>
        {/* For each element on "posts" we return a new "li" with the needed  data from the api */}
        {posts.map((posts, id) => {
          return (
            <li
              /* Calls the refresh user function on click */
              onClick={() => refreshOneUser(id)}
              key={posts.id}
              style={{
                backgroundImage: `url(${posts.url})`,
              }}
            >
              {/* Container where we have the filter and the refresh SVG added in hover */}
              <div className="imageRefresh"></div>
            </li>
          );
        })}
        {/* Calls the function to fetch a silgle user on click */}
        <button onClick={fetchOneUser} className="add-btn">
          <img className="line1" alt="" />
          <img className="line2" alt="" />
        </button>
      </ul>
      {/* Calls the function refreshEveryUser on click */}
      <button className="refresh-btn" onClick={refreshEveryUser}>
        REFRESH ALL
      </button>
    </div>
  );
}
