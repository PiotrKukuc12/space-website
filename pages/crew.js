import { useState } from 'react';
import Layout from '../components/layouts/layout';
import desktop from '../public/images/crew/background-crew-desktop.jpg';
import tablet from '../public/images/crew/background-crew-tablet.jpg';
import mobile from '../public/images/crew/background-crew-mobile.jpg';
import { HStack, Text, Stack, Box, Divider } from '@chakra-ui/react';
import { H4 } from '../components/typography/headings';
import astronaut1 from '../public/images/crew/image-douglas-hurley.png';
import astronaut2 from '../public/images/crew/image-mark-shuttleworth.png';
import astronaut3 from '../public/images/crew/image-victor-glover.png';
import astronaut4 from '../public/images/crew/image-anousheh-ansari.png';
import Image from 'next/image';
import CrewButton from '../components/crew/buttons';
import { douglas, mark, victor, ano } from '../components/crew/crewText';
import HeadingNumb from '../components/headingNumb';
import { PlanetAnimation, Section } from '../components/sectionAnimation';

const Crew = () => {
  const [astronaut, setAstronaut] = useState(1);

  const handleSrc = () => {
    switch (astronaut) {
      case 1:
        return astronaut1;
      case 2:
        return astronaut2;
      case 3:
        return astronaut3;
      case 4:
        return astronaut4;
      default:
        return;
    }
  };

  const handleText = () => {
    switch (astronaut) {
      case 1:
        return douglas;
      case 2:
        return mark;
      case 3:
        return victor;
      case 4:
        return ano;
      default:
        return;
    }
  };

  const handleWidth = () => {
    switch (astronaut) {
      case 1:
        return { base: '215px', sm: '290px', lg: '370px' };
      case 2:
        return { base: '199px', lg: '340px' };
      case 3:
        return { base: '250px', lg: '430px' };
      case 4:
        return { base: '280px', lg: '480px' };
      default:
        return;
    }
  };

  return (
    <Layout title="crew" desktop={desktop} tablet={tablet} mobile={mobile}>
      <HeadingNumb number="02">PICK YOUR CREW</HeadingNumb>
      <Stack
        align={{ base: 'center' }}
        direction={{ base: 'column-reverse', sm: 'column', lg: 'row' }}
      >
        <Stack
          my={30}
          align="center"
          direction={{ base: 'column-reverse', sm: 'column' }}
        >
          <Stack align={{ base: 'center', lg: 'baseline' }}>
            <Section>
              <Text fontSize="2xl" textTransform="uppercase" color="#686868">
                {handleText().spec}
              </Text>
            </Section>
            <Section delay={0.1}>
              <H4>{handleText().name}</H4>
            </Section>
            <Section delay={0.2}>
              <Text
                fontSize="xl"
                color="white"
                pb={5}
                px={{ base: '5', sm: '20', lg: '0' }}
                pr={{ base: '0', lg: '20%' }}
                textAlign={{ base: 'center', lg: 'left' }}
              >
                {handleText().desc}
              </Text>
            </Section>
          </Stack>
          <HStack
            color="white"
            width={{ base: '70%', sm: '45%', md: '30%', lg: '30%' }}
            justifyContent={{ base: 'space-around', lg: 'space-between' }}
            pt={{ base: '0', lg: '20' }}
          >
            <CrewButton handleAstronaut={() => setAstronaut(1)} />
            <CrewButton handleAstronaut={() => setAstronaut(2)} />
            <CrewButton handleAstronaut={() => setAstronaut(3)} />
            <CrewButton handleAstronaut={() => setAstronaut(4)} />
          </HStack>
        </Stack>
        <Stack w="90%" align="center">
          <PlanetAnimation>
            <Box width={handleWidth()} height={{ base: '285px', lg: '495px' }}>
              <Image src={handleSrc()} />
            </Box>
          </PlanetAnimation>
          <Divider display={{ base: 'block', sm: 'none', lg: 'block' }} />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Crew;
