const TIME_INTERVAL = 1000;

class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  render() {
    return <div className={`light ${this.props.isActive ? `light--${this.props.type}` : ''} `} />;
  }
}

class TrafficLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 'red' };

    this.interval = setInterval(() => {
      this.setState({ active: this.getNewColor() });
    }, TIME_INTERVAL);
  }

  getNewColor() {
    switch (this.state.active) {
      case 'red':
        return 'orange';
      case 'orange':
        return 'green';
      case 'green':
        return 'red';
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <main className="page">
        <div className="traffic-light">
          {['red', 'orange', 'green'].map((type) => (
            <Light key={type} type={type} isActive={type === this.state.active} />
          ))}
        </div>
      </main>
    );
  }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<TrafficLight />);
