const root = ReactDOM.createRoot(document.querySelector('#root'));

class TrafficLight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => {
        return {
          color: prevState.color + 1,
        };
      });

      if (this.state.color === 3) {
        this.setState({
          color: 0,
        });
      }
    }, 1000);
  }

  render() {
    return (
      <>
        <div>
          <div className="trafficLight_head"></div>
          <div className="trafficLight_body">
            <div className={`trafficLight_light ${this.state.color === 0 ? 'light-red' : 'light-grey'}`}></div>
            <div className={`trafficLight_light ${this.state.color === 1 ? 'light-yellow' : 'light-grey'}`}></div>
            <div className={`trafficLight_light ${this.state.color === 2 ? 'light-green' : 'light-grey'}`}></div>
          </div>
        </div>
      </>
    );
  }
}

root.render(<TrafficLight />);
