import {
  Link,
  Box,
  Container,
  Stack,
  Heading,
  IconButton,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  ListItem,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useRef } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import img from '../public/images/shared/logo.svg';
import { HamburgerIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  return (
    <NextLink href={href}>
      <Link
        color="#969696"
        fontWeight="500"
        _hover={{
          textDecoration: 'underline',
          textUnderlineOffset: '100%',
          textDecorationThickness: '25%',
          textDecorationColor: '#7F8694',
        }}
        px={['2', '1', '25']}
        backgroundColor={['none', 'none', 'none']}
        fontSize="xl"
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { path } = props;
  return (
    <Box
      //   position="fixed"
      as="nav"
      w="100%"
      h="100px"
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="full"
        align="center"
        justifyContent="space-between"
        wrap="wrap"
      >
        <Heading as="h1" size="lg" color="red.100" pl={35} mt={5}>
          <Image src={img} width="56px" height="56px" />
        </Heading>
        <Stack
          color="white"
          direction={{ base: 'column', sm: 'row' }}
          width={{ base: 'full', sm: 'auto' }}
          display={{ base: 'none', sm: 'flex' }}
          mt={5}
          pr={{base: '0', sm:'20px', md: '100px'}}
          py={['0', '0', '5']}
          fontWeight="700"
          style={{
            backdropFilter: 'blur(20px)',
          }}
        >
          <LinkItem href="/">
            <span>00</span> HOME
          </LinkItem>
          <LinkItem href="/destination">
            <span>01</span> DESTINATION
          </LinkItem>
          <LinkItem href="/crew">
            <span>02</span> CREW
          </LinkItem>
          <LinkItem href="/technology">
            <span>03</span> TECHNOLOGY
          </LinkItem>
        </Stack>

        {/* <Box align="right" display={{ base: 'inline-block', sm: 'none' }}>
          <Box display={{ base: 'inline-block', sm: 'none' }}>
            <Menu>
              <MenuButton
                mt={3}
                mr={15}
                as={IconButton}
                icon={<HamburgerIcon />}
                // variant='outline'
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/">
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/destination">
                  <MenuItem as={Link}>Destination</MenuItem>
                </NextLink>
                <NextLink href="/crew">
                  <MenuItem as={Link}>Crew</MenuItem>
                </NextLink>
                <NextLink href="/technology">
                  <MenuItem as={Link}>Technology</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box> */}
        <Button
          as={IconButton}
          icon={<HamburgerIcon color="gray.200" boxSize={45} />}
          ref={btnRef}
          mt={5}
          mr={5}
          colorScheme="teal"
          variant="ghost"
          onClick={onOpen}
          align="right"
          display={{ base: 'inline-block', sm: 'none' }}
        >
          Hello
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton size="lg" color="white" />
            <DrawerBody backgroundColor="#110221">
              <Box>
                <VStack mt="50%" align="left" ml={7}>
                  <NextLink href="/">
                    <Text fontSize="3xl" pt={5} color="white">
                      00 HOME
                    </Text>
                  </NextLink>
                  <NextLink href="/destination">
                    <Text fontSize="3xl" pt={5} color="white">
                      01 DESTINATION
                    </Text>
                  </NextLink>
                  <NextLink href='/crew'>
                    <Text fontSize="3xl" pt={5} color="white">
                      02 CREW
                    </Text>
                  </NextLink>
                  <NextLink href='/technology'>
                    <Text fontSize="3xl" pt={5} color="white">
                      03 TECHNOLOGY
                    </Text>
                  </NextLink>
                </VStack>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
      <style jsx>{`
        span {
          color: white;
        }
      `}</style>
    </Box>
  );
};

export default Navbar;
