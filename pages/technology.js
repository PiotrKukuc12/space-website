import { useState, useEffect } from 'react';
import { Text, Box, HStack, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import Layout from '../components/layouts/layout';
import desktop from '../public/images/technology/background-technology-desktop.jpg';
import tablet from '../public/images/technology/background-technology-tablet.jpg';
import mobile from '../public/images/technology/background-technology-mobile.jpg';
import HeadingNumb from '../components/headingNumb';
import img1 from '../public/images/technology/image-launch-vehicle-landscape.jpg';
import img2 from '../public/images/technology/image-space-capsule-landscape.jpg';
import img3 from '../public/images/technology/image-spaceport-landscape.jpg';
import img1Higher from '../public/images/technology/image-launch-vehicle-portrait.jpg'
import img2Higher from '../public/images/technology/image-space-capsule-portrait.jpg'
import img3Higher from '../public/images/technology/image-spaceport-portrait.jpg'
import TechButton from '../components/technology/buttons';

import { launch, capsule, port } from '../components/technology/text';

const Technology = () => {
  const [img, setImg] = useState(1);
  const [windowSize, setWindowSize] = useState(null)

  useEffect(() => {
      const handleResize = () => {
          setWindowSize(window.innerWidth)
      }
  
      window.addEventListener('resize', handleResize)
      window.addEventListener('load', handleResize)
  
      return () => window.removeEventListener('resize', handleResize)
  }, [])

  


  const handleSrc = () => {
    switch (img) {
      case 1:
          if(windowSize > 992) {
              return img1Higher;
          } else {
              return img1
          }
      case 2:
        if(windowSize > 992) {
            return img2Higher;
        } else {
            return img2
        }
      case 3:
        if(windowSize > 992) {
            return img3Higher;
        } else {
            return img3
        }
      default:
        return;
    }
  };

  const handleText = () => {
    switch (img) {
      case 1:
        return launch;
      case 2:
        return capsule;
      case 3:
        return port;
      default:
        return;
    }
  };

  return (
    <Layout
      title="Technology"
      desktop={desktop}
      tablet={tablet}
      mobile={mobile}
    >
      <HeadingNumb number="03">SPACE LAUNCH 101</HeadingNumb>
      <Stack w='100%' align='center' direction={{base:"column",lg:"row-reverse"}} justifyContent="space-between">
        <Box  width={{base:"100%",mg:'500px', lg:'600px'}} height="100%">
          <Image src={handleSrc()} />
        </Box>
        <Stack
          align={{ base: 'center' }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Stack
            direction={{ base: 'row', lg: 'column' }}
            mt={10}
            color="white"
            width={{ base: '70%', sm: '45%', md: '30%', lg: '20%' }}
            justifyContent={{ base: 'space-around', lg: 'space-between' }}
            pt={{ base: '0', lg: '20' }}
          >
            <TechButton state={img} num={1} func={() => setImg(1)}>
              1
            </TechButton>
            <TechButton state={img} num={2} func={() => setImg(2)}>
              2
            </TechButton>
            <TechButton state={img} num={3} func={() => setImg(3)}>
              3
            </TechButton>
          </Stack>
          <Stack
            width={{ base: '', lg: '400px' }}
            align={{ base: 'center', lg: 'baseline' }}
          >
            <Text
              pt={5}
              color="gray.200"
              textTransform="uppercase"
              fontSize="2xl"
            >
              The terminology...
            </Text>
            <Text color="white" fontSize="5xl" textTransform="uppercase">
              {handleText().name}
            </Text>
            <Text
              pt={5}
              fontSize="xl"
              px={{ base: '12', sm: '40', lg: '0' }}
              textAlign={{ base: 'center', lg: 'left' }}
              color="gray.300"
            >
              {handleText().desc}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Technology;
