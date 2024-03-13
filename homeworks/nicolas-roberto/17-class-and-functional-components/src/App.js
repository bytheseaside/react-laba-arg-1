import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  /* we set the props */
  constructor(props) {
    super(props);
    /* here the elements are pushed from the api one by one */
    this.state = { posts: [] };
    this.fetchOneUser = this.fetchOneUser.bind(this);
  }
  /* Fetchs a single user pressin "+" button function*/
  fetchOneUser = async () => {
    let response = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    let posts = await response.json();
    this.setState({
      /* We add in "posts" the single element fetchet */
      posts: [...this.state.posts, posts[0]],
    });
  };

  refreshOneUser = async (id) => {
    let response = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    let posts = await response.json();
    let reFetch = { posts: [...this.state.posts] };
    /* Here, the clicked picture runs this functions and fetches a new element from the API and is replaced using the ID number */
    reFetch.posts[id] = posts[0];
    this.setState(reFetch);
  };

  refreshEveryUser = async () => {
    /* For each element we fetched in "posts", we run the "refresh one user" funtion again to replace all pictures */
    this.state.posts.forEach((user, id) => {
      this.refreshOneUser(id);
    });
  };

  render() {
    return (
      <div className="App">
        <ul>
          {/* For each element on "posts" we return a new "li" with the needed  data from the api */}
          {this.state.posts.map((posts, id) => {
            return (
              <li
                /* Calls the refresh user function on click */
                onClick={() => this.refreshOneUser(id)}
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
          <button onClick={this.fetchOneUser} className="add-btn">
            <img className="line1" alt="" />
            <img className="line2" alt="" />
          </button>
        </ul>
        {/* Calls the function refreshEveryUser on click */}
        <button className="refresh-btn" onClick={this.refreshEveryUser}>
          REFRESH ALL
        </button>
      </div>
    );
  }
}
