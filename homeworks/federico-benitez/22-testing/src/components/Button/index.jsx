import { Button as ButtonComponent } from '@chakra-ui/react';
import { iconSources } from '../../helpers/keys';

export default function Button({ button, ...rest }) {
  const isBtnEqual = button.value === 'equal';
  const borderRadius = button.text === 'C' ? '30px 0 0 0' : button.text === 'delete' ? '0 30px 0 0' : '';

  const keyIcon = iconSources[`${button.text}`];

  return (
    <ButtonComponent
      {...rest}
      borderRadius={borderRadius}
      bg={isBtnEqual ? 'yellow.100' : 'background.100'}
      color="white"
      width="93.75px"
      height={isBtnEqual ? '188px' : '93.75px'}
      fontSize="24px"
      fontWeight="400"
    >
      {keyIcon ? <img src={keyIcon} /> : button.text}
    </ButtonComponent>
  );
}
