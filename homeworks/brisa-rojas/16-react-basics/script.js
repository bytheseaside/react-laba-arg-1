const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);
const TIME_LAPSE = 1000;

class TrafficLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightColors: ['red', 'yellow', 'green'],
      counter: 0,
    };

    this.changeLight = this.changeLight.bind(this);
  }

  changeLight() {
    this.setState({ lightColors: ['red', 'yellow', 'green'], counter: this.state.counter + 1 });
  }

  render() {
    let lightIndex = this.state.counter % 3;
    let currentColor = this.state.lightColors[lightIndex];
    setTimeout(() => this.changeLight(), TIME_LAPSE);

    return (
      <div className="traffic-light">
        <div className="traffic-light__head"></div>
        <div className="traffic-light__body">
          <Light color='red' activeLight={currentColor}/>
          <Light color='yellow' activeLight={currentColor}/>
          <Light color='green' activeLight={currentColor}/>
        </div>
      </div>
    );
  }
}

function Light({color, activeLight}) {
  let className = 'traffic-light__light';
  if (color === activeLight) {
    className += ' traffic-light__light_' + color;
  }

  return <div className={className} key={color} />;
}

root.render(<TrafficLight />);
