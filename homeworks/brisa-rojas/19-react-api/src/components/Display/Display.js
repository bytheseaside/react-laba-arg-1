import './styles.css';

const Display = (props) => {
  return (
    <div className="display">
      <p className="display__calculation" onClick={props.handleClickOnHistory}>
        {props.calculation}
      </p>
      <p className="display__result">{props.result}</p>
    </div>
  );
};

export default Display;
