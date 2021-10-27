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
import { PlanetAnimation, Section } from '../sectionAnimation';

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
      <PlanetAnimation>
        <Box
          width={{ base: '300px', lg: '450px' }}
          height={{ base: '300px', lg: '450px' }}
          position="relative"
          marginRight={{ lg: '5em' }}
        >
          <Image className="image" src={handleSrc()} layout="fill" />
        </Box>
      </PlanetAnimation>
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
          <Section>
            <ButtonPl planet={Planet} numb={1} clickFunc={() => setPlanet(1)}>
              Moon
            </ButtonPl>
          </Section>
          <Section>
            <ButtonPl planet={Planet} numb={2} clickFunc={() => setPlanet(2)}>
              Mars
            </ButtonPl>
          </Section>
          <Section>
            <ButtonPl planet={Planet} numb={3} clickFunc={() => setPlanet(3)}>
              Europa
            </ButtonPl>
          </Section>
          <Section>
            <ButtonPl planet={Planet} numb={4} clickFunc={() => setPlanet(4)}>
              Titan
            </ButtonPl>
          </Section>
          </HStack>
        <Section delay={0.1}>
          <H2> {handleTextDesc().name}</H2>
        </Section>
        <Section delay={0.2}>
          <Text
            px={{ base: '10', lg: '0' }}
            fontSize="2xl"
            color="brand.200"
            align={{ base: 'center', lg: 'left' }}
            fontWeight={400}
          >
            {handleTextDesc().description}
          </Text>
        </Section>

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
          justifyContent={{
            base: 'center',
            sm: 'space-around',
            lg: 'space-between',
          }}
          color="brand.200"
        >
          <Stack align="center">
            <Section>
              <H5
                style={{
                  fontSize: '1.4rem',
                  marginTop: '40px',
                  color: '#868696',
                }}
              >
                AVG. DISTANCE
              </H5>
            </Section>
            <Section>
              <H4
                style={{
                  marginBottom: '40px',
                }}
              >
                {handleTextDesc().distance}
              </H4>
            </Section>
          </Stack>
          <Stack
            align="center"
            style={{
              marginTop: '0',
            }}
          >
            <Section>
              <H5
                style={{
                  fontSize: '1.4rem',
                  marginTop: '40px',
                  color: '#868696',
                }}
              >
                EST. TRAVEL TIME
              </H5>
            </Section>
            <Section>
              <H4
                style={{
                  marginBottom: '40px',
                }}
              >
                {handleTextDesc().travelTime}
              </H4>
            </Section>
          </Stack>
        </Stack>
      </VStack>
    </Stack>
  );
};

export default Planets;
