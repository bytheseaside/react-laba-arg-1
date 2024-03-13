import CalcButton from './CalcButton';
import { render, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';

const theme = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Poppins',
  fontSize: '24px',
  border: '0.5px solid #242530',
  borderRadius: '0.5',
  height: '240',
  width: '240',
};

describe('CalcButton renders correctly', () => {
  afterEach(() => {
    cleanup();
  });
  test(`button renders with text "Here's the button text!"`, () => {
    render(<CalcButton>{"Here's the button text!"} </CalcButton>);
    const buttonElement = screen.getByText(/ button text/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test(`button renders with text "Another text"`, () => {
    render(<CalcButton>{'Another text'} </CalcButton>);
    const buttonElement = screen.getByText(/another/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
