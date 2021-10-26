import { Box, Container } from '@chakra-ui/layout';
import Head from 'next/head';
import Navbar from '../navbar';

const Layout = ({ children,desktop, tablet, mobile, title }) => {
  return (
    <>
      <Box as="main">
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        </Head>


        <Navbar />


        <Container p={0} maxW='container.xl' position='relative'>
        {children}
        </Container>
      </Box>
      <style jsx global>
        {`
          body {
            background: url(${desktop.src}) no-repeat center center fixed !important;
            -webkit-background-size: cover !important;
            -moz-background-size: cover !important;
            -o-background-size: cover !important;
            background-size: cover !important;
            color: white;
          }
          @media only screen and (max-width: 768px) {
            body {
              background: url(${tablet.src}) no-repeat center center fixed !important;
              -webkit-background-size: cover !important;
              -moz-background-size: cover !important;
              -o-background-size: cover !important;
              background-size: cover !important;
              color: white;
            }
          @media only screen and (max-width: 480px) {
            body {
              background: url(${mobile.src}) no-repeat center center fixed !important;
              -webkit-background-size: cover !important;
              -moz-background-size: cover !important;
              -o-background-size: cover !important;
              background-size: cover !important;
              color: white;
            }
          }
        `}
      </style>
    </>
  );
};

export default Layout;
