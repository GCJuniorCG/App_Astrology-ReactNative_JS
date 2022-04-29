//import { ChakraProvider } from '@chakra-ui/react';
import {ThemeProvider} from 'react-native-magnus';

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
