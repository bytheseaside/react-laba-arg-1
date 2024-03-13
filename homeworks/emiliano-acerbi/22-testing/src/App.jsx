import React, { useContext } from 'react';
import Button from './components/Button';
import Calculator from './components/Calculator';
import Container from './components/Container';
import Display from './components/Display';
import { CalculatorContext } from './context/CalculatorContext';
import { buttons } from './utils/buttons';

function App() {
  const { calculator, lastOperation } = useContext(CalculatorContext);

  return (
    <Container>
      <Calculator>
        <Display lastOperation={lastOperation} calculator={calculator} />
        <div className="grid grid-cols-4 mt-auto">
          {buttons.flat().map((btn, index) => {
            return <Button key={index} value={btn} />;
          })}
        </div>
      </Calculator>
    </Container>
  );
}

export default App;
