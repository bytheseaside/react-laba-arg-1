const { useState, useEffect } = React;
const TrafficLight = () => {
  const [colorIdx, setColorIdx] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setColorIdx((idx) => idx + 1);
    }, 2500);
  }, []);
  if (colorIdx === 3) {
    setColorIdx(0);
  }
  return (
    <>
      <div className="traffic-light__head"></div>
      <div className="traffic-light__body">
        <div className={`light ${colorIdx === 0 ? 'light--red' : 'light--off'}`}></div>
        <div className={`light ${colorIdx === 1 ? 'light--yellow' : 'light--off'}`}></div>
        <div className={`light ${colorIdx === 2 ? 'light--green' : 'light--off'}`}></div>
      </div>
    </>
  );
};
const page = document.querySelector('.container');
const root = ReactDOM.createRoot(page);
root.render(<TrafficLight />);
