import Layout from '../components/layouts/layout';
import bgDesktop from '../public/images/home/background-home-desktop.jpg';
import bgTablet from '../public/images/home/background-home-tablet.jpg';
import bgMobile from '../public/images/home/background-home-mobile.jpg';
import { Heading, Stack } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Layout
      title="Not Found :("
      desktop={bgDesktop}
      tablet={bgTablet}
      mobile={bgMobile}
    >
      <Stack align="center" justifyContent="center" mt="10%">
        <Heading color="white">404 Not found page</Heading>
      </Stack>
    </Layout>
  );
};

export default NotFound;
