import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts:{
    body: `'Poppins', sans-serif`
  },
  colors: {
    background: {
      100: '#363746',
      200: '#242530',
    },
    yellow: {
      100: '#FFBB00',
    },
  },
});

export default theme;
