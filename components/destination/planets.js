import { useState } from 'react';
import Image from 'next/image';
import { HStack, VStack, Text, Divider, Stack, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import moon from '../../public/images/destination/image-moon.png';
import mars from '../../public/images/destination/image-mars.png';
import europa from '../../public/images/destination/image-europa.png';
import titan from '../../public/images/destination/image-titan.png';
import ButtonPl from './buttons';
import { H1, H2, H5, H4 } from '../typography/headings';
import { moonText, marsText, europaText, titanText } from './planetText/text';

const Planets = () => {
  const [Planet, setPlanet] = useState(1);

  const handleSrc = () => {
    switch (Planet) {
      case 1:
        return moon;
      case 2:
        return mars;
      case 3:
        return europa;
      case 4:
        return titan;
      default:
        return;
    }
  };

  const handleTextDesc = () => {
    switch (Planet) {
      case 1:
        return moonText;
      case 2:
        return marsText;
      case 3:
        return europaText;
      case 4:
        return titanText;
      default:
        return;
    }
  };

  return (
    <Stack
      flexDirection={{ base: 'column', sm: 'column', lg: 'row' }}
      align="center"
      justifyContent="space-around"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <Box
          width={{ base: '300px', lg: '450px' }}
          height={{ base: '300px', lg: '450px' }}
          position="relative"
          marginRight={{ lg: '5em' }}
        >
          <Image className="image" src={handleSrc()} layout="fill" />
        </Box>
      </motion.div>
      <VStack
        width={{ base: '100%', lg: '30vw' }}
        align={{ base: 'center', lg: 'flex-start' }}
        style={{
          marginTop: '30px',
        }}
      >
        <HStack
          width={{ base: '70%', sm: '45%', md: '30%', lg: '50%' }}
          justifyContent={{ base: 'space-around', lg: 'space-between' }}
          marginBottom={{ base: '0px', lg: '40px' }}
        >
          <ButtonPl planet={Planet} numb={1} clickFunc={() => setPlanet(1)}>
            Moon
          </ButtonPl>
          <ButtonPl planet={Planet} numb={2} clickFunc={() => setPlanet(2)}>
            Mars
          </ButtonPl>
          <ButtonPl planet={Planet} numb={3} clickFunc={() => setPlanet(3)}>
            Europa
          </ButtonPl>
          <ButtonPl planet={Planet} numb={4} clickFunc={() => setPlanet(4)}>
            Titan
          </ButtonPl>
        </HStack>

        <H2> {handleTextDesc().name}</H2>
        <Text
          px={{ base: '10', lg: '0' }}
          fontSize="2xl"
          color="brand.200"
          align={{ base: 'center', lg: 'left' }}
          fontWeight={400}
        >
          {handleTextDesc().description}
        </Text>
        <Divider
          width="90%"
          style={{
            marginTop: '30px',
            color: '#434345',
          }}
        />
        <Stack
          flexDirection={{ base: 'column', sm: 'row' }}
          width="100%"
          align="center"
          justifyContent={{ base: 'center', sm: 'space-around', lg:'space-between' }}
          color="brand.200"
        >
          <Stack align="center">
            <H5
              style={{
                fontSize: '1.4rem',
                marginTop: '40px',
                color: '#868696',
              }}
            >
              AVG. DISTANCE
            </H5>
            <H4
              style={{
                marginBottom: '40px',
              }}
            >
              {handleTextDesc().distance}
            </H4>
          </Stack>
          <Stack
            align="center"
            style={{
              marginTop: '0',
            }}
          >
            <H5
              style={{
                fontSize: '1.4rem',
                marginTop: '40px',
                color: '#868696',
              }}
            >
              EST. TRAVEL TIME
            </H5>
            <H4
              style={{
                marginBottom: '40px',
              }}
            >
              {handleTextDesc().travelTime}
            </H4>
          </Stack>
        </Stack>
      </VStack>
    </Stack>
  );
};

export default Planets;
