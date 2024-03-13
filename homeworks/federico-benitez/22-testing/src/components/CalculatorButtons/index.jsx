import { Grid, GridItem } from '@chakra-ui/react';
import { KEYS } from '../../helpers/keys';
import { useCalculatorContext } from '../../context/CalculatorContext';
import Button from '../Button';

export default function CalculatorButtons() {
  const { doAction } = useCalculatorContext();

  return (
    <Grid>
      {KEYS.map((key) => (
        <GridItem key={key.value} area={key.value === 'equal' ? '4 / 4 / 6 / 5' : ''}>
          <Button button={key} onClick={() => doAction(key)} />
        </GridItem>
      ))}
    </Grid>
  );
}
