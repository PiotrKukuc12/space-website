import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../components/fonts';
import theme from '../libs/theme';

const _app = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
    <Fonts />
      <Component {...pageProps}  />
    </ChakraProvider>
  );
};

export default _app;
