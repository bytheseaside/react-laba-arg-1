function TrafficLight() {
  const [count, setCount] = React.useState(0);
  const colors = {
    0: 'red',
    1: 'yellow',
    2: 'green',
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (count === 3) {
    setCount(0);
  }

  return (
    <div className="container">
      <div className="traffic-light">
        <div className={`light red-light ${colors[count] === 'red' && 'active'}`}></div>
        <div className={`light yellow-light ${colors[count] === 'yellow' && 'active'}`}></div>
        <div className={`light green-light ${colors[count] === 'green' && 'active'}`}></div>
      </div>
    </div>
  );
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(TrafficLight));
