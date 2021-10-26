import bgDesktop from '../public/images/home/background-home-desktop.jpg';
import bgTablet from '../public/images/home/background-home-tablet.jpg';
import bgMobile from '../public/images/home/background-home-mobile.jpg';
import Layout from '../components/layouts/layout';
import { Stack, Text, VStack, Box } from '@chakra-ui/react';
import { H1, H5 } from '../components/typography/headings';
import RoundedButton from '../components/button';

const index = () => {
  return (
      <Layout
        title="Home"
        desktop={bgDesktop}
        tablet={bgTablet}
        mobile={bgMobile}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align='center'
          mt="10%"
          justifyContent="space-around"
        >
          <Stack width={{base:'100%' ,lg:"500px"}} align='center' color="white">
            <H5>SO, YOU WANT TO TRAVEL TO</H5>
            <H1>SPACE</H1>
            <Text color="gray.300" px={{base:'10', sm:'5', lg:'0'}} textAlign={{base:"center",lg:"left"}} fontSize="xl">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Text>
          </Stack>
          <Stack align="center" justifyContent="center">
            <RoundedButton>EXPLORE</RoundedButton>
          </Stack>
        </Stack>
        <Stack align='center' w='100%' mt={100}>
          <Text fontSize='sm' color='gray.600'> &copy; 2021 Frontend Mentor challange by Piotr Kukuć </Text>
        </Stack>
      </Layout>
  );
};

export default index;
