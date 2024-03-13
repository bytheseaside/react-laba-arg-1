import React from 'react';
import '../styles.css';
import AddButton from './AddButton';
import Img from './Img';
import RefreshAllBtn from './RefreshAllBtn';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  fetchAvatar = async () => {
    const resp = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    const data = await resp.json();
    return data[0];
  };

  addAvatar = () => {
    this.fetchAvatar().then((avatar) => {
      this.setState((prevState) => {
        return {
          people: [...prevState.people, { ...avatar }],
        };
      });
    });
  };

  refreshAvatar = (index) => {
    this.fetchAvatar().then((person) => {
      const refresh = [...this.state.people];
      refresh.splice(index, 1, person);
      this.setState({
        people: refresh,
      });
    });
  };

  refreshAll = async () => {
    const refreshAll = [...this.state.people];
    const refreshAvatar = await Promise.all(refreshAll.map(() => this.fetchAvatar()));
    this.setState({
      people: refreshAvatar,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div style={{ display: '-webkit-box' }}>
            {this.state.people.map((person, index) => (
              <Img src={person.url} onClick={() => this.refreshAvatar(index)} />
            ))}
            <AddButton onClick={this.addAvatar} />
          </div>
          <div className="refreshContainer">
            {this.state.people.length ? <RefreshAllBtn onClick={this.refreshAll} /> : null}
          </div>
        </div>
      </>
    );
  }
}
