import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../components/fonts';
import theme from '../libs/theme';
import Navbar from '../components/navbar';

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
    <Fonts />
    <Navbar router={router} />
      <Component {...pageProps} key={router.route}   />
    </ChakraProvider>
  );
};

export default Website;
