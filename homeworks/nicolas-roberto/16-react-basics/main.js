const rootContainer = document.querySelector('#root_container');

const TrafficLight = () => {
  //Set a second coundtown, it starts in 2 to have 3 cowndown in total (2, 1, 0)
  let [second, setSecond] = React.useState(2);
  React.useEffect(() => {
    //We make a countdown to rest rest a second (each 1,5 seconds)
    second > 0 && setTimeout(() => setSecond(second - 1), 1500);
    //When the timer gets to 0. We set the timer to 2, so it starts over again.
    second === 0 && setTimeout(() => setSecond((second = 2)), 1500);
  }, [second]);
  return (
    <>
      <div className="traffic--light__top"></div>
      <div className="traffic--light__body">
        <ul className="traffic--light">
          {/* I used a ternary operator to change between classes depending on the "second" we're in.*/}
          {/* the traffic light starts on green light and the next light is the red one */}
          <li className={second === 1 ? 'red' : 'light'}></li>
          <li className={second === 0 ? 'yellow' : 'light'}></li>
          <li className={second === 2 ? 'green' : 'light'}></li>
        </ul>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(rootContainer);
//Render the whole functional component
root.render(<TrafficLight />);
