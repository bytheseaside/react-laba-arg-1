import { Flex, Text } from '@chakra-ui/react';
import { useCalculatorContext } from '../context/CalculatorContext';

export default function Screen() {
  const { current, previous } = useCalculatorContext();

  return (
    <Flex
      height={'342px'}
      bg="background.200"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="flex-end"
      paddingRight="19px"
    >
      <Text color="white" fontSize="26px">
        {previous}
      </Text>
      <Text fontSize="55px" fontWeight="bold" color="white">
        {current}
      </Text>
    </Flex>
  );
}
