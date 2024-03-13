class TrafficLight extends React.Component {
  
  componentDidMount(){
    //start the loop click
    Light.click();
  };

  render(){
    return (
      <div className="container">
        <div className="post" />
        <div className="traffic-light">
          <div className="traffic-light__light-rail">
            {/*Change color, add new lights and order as you will*/}
            <Light color="red" order={1} />
            <Light color="yellow" order={2} />
            <Light color="green" order={0} />
          </div>
        </div>
      </div>
    );
  }
};

class Light extends React.Component {
  static counter = 0;
  static timeLapse = 0;
  static numOfLights = 0;

  constructor(props) {
    super(props);
    this.state = {
      light: props.color,
      stop: "grey",
      on: false,
      order: props.order,
    };
  }

  static click() {
    setInterval(() => {
      Light.counter++;
    }, Light.timeLapse);
  }

  componentDidMount() {
    setInterval(() => {
      if (Light.counter % Light.numOfLights === this.state.order) {
        this.setState({ on: true });
      }
      if (this.state.on) {
        this.setState({ on: false });
      }
    }, Light.timeLapse);
  }

  render() {
    return (
      <div
        className="light"
        key={this.state.light}
        style={{
          backgroundColor: this.state.on ? this.state.light : this.state.stop,
        }}
      ></div>
    );
  }
}

//To change tick speed & quantity of Lights as config
Light.timeLapse = 1000;
Light.numOfLights = 3;
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<TrafficLight />);
