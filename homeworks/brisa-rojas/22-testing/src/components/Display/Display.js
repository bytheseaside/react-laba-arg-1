import './styles.css';

const Display = (props) => {
  return (
    <div className="display" data-testid= 'display'>
      <p className="display__calculation" onClick={props.handleClickOnHistory} data-testid="display__calculation">
        {props.calculation}
      </p>
      <p className="display__result" data-testid = 'display__result'>{props.result}</p>
    </div>
  );
};

export default Display;
