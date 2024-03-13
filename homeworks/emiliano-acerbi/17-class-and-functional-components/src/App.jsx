import React, { Component } from 'react';

const URL = 'https://tinyfac.es/api/data?limit=1&quality=0';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isRefreshing: false,
    };

    this.fetchSingleUser = this.fetchSingleUser.bind(this);
    this.refreshUser = this.refreshUser.bind(this);
    this.refreshAllUsers = this.refreshAllUsers.bind(this);
  }

  async fetchSingleUser() {
    try {
      let response = await fetch(URL);
      if (response.status === 200) {
        let fetchedUsers = await response.json();
        this.setState({
          ...this.state,
          users: [...this.state.users, fetchedUsers[0]],
        });
      } else {
        throw 'Error fetching user. Try to slow down on the requests and try again.';
      }
    } catch (error) {
      console.error(error);
    }
  }

  async refreshUser(index) {
    try {
      this.setState({
        ...this.state,
        isRefreshing: true,
      });

      let response = await fetch(URL);

      if (response.status === 200) {
        let fetchedUsers = await response.json();
        let newState = {
          ...this.state,
        };
        newState.users[index] = fetchedUsers[0];
        this.setState(newState);
      } else {
        throw 'Error refreshing user. Please try again';
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({
        ...this.state,
        isRefreshing: false,
      });
    }
  }

  async refreshAllUsers() {
    try {
      let usersLength = this.state.users.length;
      let response = await fetch(`https://tinyfac.es/api/data?limit=${usersLength}&quality=0`);

      if (response.status === 200) {
        let fetchedUsers = await response.json();
        this.setState({
          ...this.state,
          users: fetchedUsers,
        });
      } else {
        throw 'Error refreshing all users. Please try again';
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    // If there are no users, the refresh all button will be disabled
    const isButtonDisabled = this.state.users.length === 0;

    return (
      <div className="container">
        <main className="main">
          {/* Iterates over all the users available */}
          {this.state.users.map((user, index) => {
            return (
              <div className="image" key={user.id} onClick={() => this.refreshUser(index)}>
                {/* Overylay */}
                <div className="image__overlay">
                  <img src="/001-refresh.svg" className={`${this.state.isRefreshing && 'image__animation'}`} alt="" />
                </div>
                <img src={user.url} width={240} height={240} />
              </div>
            );
          })}

          {/* Add users */}
          <div className="empty-user" onClick={this.fetchSingleUser}>
            <div className="plus-sign-hor"></div>
            <div className="plus-sign-ver"></div>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <button disabled={isButtonDisabled} className="refresh-btn" onClick={this.refreshAllUsers}>
            Refresh All
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
