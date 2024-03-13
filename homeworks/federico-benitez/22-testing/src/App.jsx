import { Flex } from '@chakra-ui/react';
import { Buttons, Screen } from './components';
import { CalculatorProvider } from './context';

function App() {
  return (
    <CalculatorProvider>
      <Flex bg="gray.300" height="100vh" align="center" justify="center">
        <Flex width="375px" direction="column" bg="background.200">
          <Screen />
          <Buttons />
        </Flex>
      </Flex>
    </CalculatorProvider>
  );
}

export default App;
