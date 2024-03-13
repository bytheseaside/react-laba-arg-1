import './styles.css';
import CalcButton from '../CalcButton/CalcButton.js';
import divideIcon from '../../assets/divide.svg';
import multiplyIcon from '../../assets/multiply.svg';
import minusIcon from '../../assets/minus.svg';
import plusIcon from '../../assets/plus.svg';
import equalsIcon from '../../assets/equals.svg';
import deleteIcon from '../../assets/delete.svg';


/* NUMBERS ARRAY */
const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/* THEMES */
const numberTheme = {
  bgColor: '#2E2F3E',
  color: '#fff',
  borderRadius: '0px',
  height: 1,
  width: 1,
};
const operatorsTheme = {
  bgColor: '#363746',
  color: '#FFBB00',
  borderRadius: '0px',
  height: 1,
  width: 1,
};
const equalsTheme = {
  bgColor: '#FFBB00',
  color: '#fff',
  borderRadius: '0px',
  height: 2,
  width: 1,
};
const clearTheme = {
  bgColor: '#363746',
  color: '#fff',
  borderRadius: '30px 0px 0px 0px',
  height: 1,
  width: 1,
};
const deleteTheme = {
  bgColor: '#363746',
  color: '#FFBB00',
  borderRadius: '0px 30px 0px 0px',
  height: 1,
  width: 1,
};

const Keyboard = ({
  handleClickOnNumber,
  handleClickOnClear,
  handleClickOnEquals,
  handleClickOnOperator,
  handleClickOnDelete,
  handleClickOnPercent
}) => {
  return (
    <div className="keyboard">
      {numberButtons.map((value) => {
        return (
          <CalcButton
            value={value.toString()}
            theme={numberTheme}
            key={value}
            onClick={() => handleClickOnNumber(value)}
            className={'button-number-' + value}
          >
            {value}
          </CalcButton>
        );
      })}

      {/* OPERATORS BUTTONS */}
      <CalcButton
        value="."
        key="dot"
        theme={numberTheme}
        className="button-dot"
        onClick={() => handleClickOnNumber('.')}
      >
        .
      </CalcButton>

      <CalcButton
        value="÷"
        key="divide"
        theme={operatorsTheme}
        className="button-operator-divide"
        onClick={() => handleClickOnOperator('/')}
      >
        <img src={divideIcon} alt="divide icon" />
      </CalcButton>

      <CalcButton
        value="x"
        key="multiply"
        theme={operatorsTheme}
        className="button-operator-multiply"
        onClick={() => handleClickOnOperator('*')}
      >
        <img src={multiplyIcon} alt="multiply icon" />
      </CalcButton>

      <CalcButton
        value="-"
        key="minus"
        theme={operatorsTheme}
        className="button-operator-minus"
        onClick={() => handleClickOnOperator('-')}
      >
        <img src={minusIcon} alt="minus icon" />
      </CalcButton>

      <CalcButton
        value="+"
        key="plus"
        theme={operatorsTheme}
        className="button-operator-plus"
        onClick={() => handleClickOnOperator('+')}
      >
        <img src={plusIcon} alt="plus icon" />
      </CalcButton>

      <CalcButton value="=" key="equals" theme={equalsTheme} className="button-equals" onClick={handleClickOnEquals}>
        <img src={equalsIcon} alt="equals icon" />
      </CalcButton>

      <CalcButton value="C" key="clear" theme={clearTheme} className="button-clear" onClick={handleClickOnClear}>
        c
      </CalcButton>

      <CalcButton value="DEL" key="delete" theme={deleteTheme} className="button-delete" onClick={() =>  handleClickOnDelete()}>
        <img src={deleteIcon} alt="delete icon" />
      </CalcButton>

      <CalcButton value="%" key="percent" theme={numberTheme} className="button-percent" onClick={() =>  handleClickOnPercent()}>
        %
      </CalcButton>
    </div>
  );
};

export default Keyboard;
