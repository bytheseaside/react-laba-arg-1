import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CalcButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.bgColor,
  color: theme.color,
  fontFamily: 'Poppins',
  fontSize: '24px',
  border: '0.5px solid #242530',
  borderRadius: theme.borderRadius,
  height: '100%',
  width: '100%',
}));

export default CalcButton;
