import { Grid } from '@mui/material';
import './styles.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ClearIcon from '@mui/icons-material/Clear';
import PercentIcon from '@mui/icons-material/Percent';

const CustomButton = ({ value, onClick }) => {
  const greyIcons = ['/', 'X', '-', '+'];

  const getIcon = () => {
    switch (value) {
      case '%':
        return <PercentIcon sx={{ color: 'white' }} />;
      case '+':
        return <AddIcon sx={{ color: '#FFBB00' }} />;
      case '<-':
        return <BackspaceIcon sx={{ color: '#FFBB00' }} />;
      case 'X':
        return <ClearIcon sx={{ color: '#FFBB00' }} />;
      case '-':
        return <RemoveIcon sx={{ color: '#FFBB00' }} />;
      default:
        return <h3 className="value"> {value} </h3>;
    }
  };
  return (
    <Grid className="buttons-container" item xs={3}>
      <span onClick={onClick}>
        <div
          className={
            value === '='
              ? 'buttons-container__button--equal'
              : value === 'C'
              ? 'buttons-container__button--grey--radius-left  '
              : value === '<-'
              ? 'buttons-container__button--grey--radius-rigth'
              : greyIcons.includes(value)
              ? 'buttons-container__button--grey'
              : 'buttons-container__button'
          }
        >
          {getIcon()}
        </div>
      </span>
    </Grid>
  );
};

export default CustomButton;
