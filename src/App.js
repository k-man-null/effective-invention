import "@fontsource/poppins";
import "@fontsource/abril-fatface";
import "@fontsource/libre-barcode-39"

import theme from "./theme";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import {
  ChakraProvider,
  Box,
  Text,
  Stack,
  Center,
  Hide,
  Show,
  Heading,
  Spacer,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  Divider,
  Button
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  PlusSquareIcon,
  SunIcon,
  MoonIcon,
  TriangleDownIcon,
  StarIcon,
  AttachmentIcon,
  SettingsIcon
} from '@chakra-ui/icons';


import { useRef, useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./urls";
function App() {

  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const { isOpen, onToggle, onClose } = useDisclosure();
  const iconRef = useRef();

  function logout() {

    axios.get(`${baseUrl}/session/logout`, { withCredentials: true })
      .then((response) => {
        setUser({});

        navigate("/");

      })
      .catch((error) => {

        console.log(error);

      })

  }



  useEffect(() => {
    axios.get(`${baseUrl}/session/minProfile`, { withCredentials: true })
      .then((response) => {

        setUser(response.data);

      })
      .catch((error) => {

        console.log(error);

      })
  }

    , [])

  return (
    <ChakraProvider theme={theme}>
      

      <Stack height="100vh" spacing={0} width="100vw" overflowX='hidden' overflowY='hidden'>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={iconRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              <Center height='60px'>
                <Heading
                  color='teal.500'
                  size='lg'
                  fontWeight='extrabold'
                  letterSpacing='widest'
                  marginRight='4'
                >TikiTiki</Heading>
              </Center>
            </DrawerHeader>

            <DrawerBody>

              <Stack>
                <Stack paddingLeft='4'>

                  {/* TODO: Add a user avatar */}
                  <Heading as='h2' size="md">Profile</Heading>
                  <Text>
                    {user?.user_name}
                  </Text>
                  <Text>
                    UserId {user?.user_id}
                  </Text>
                  <Text>
                    Credit: $678
                  </Text>
                  {/* TODO: Show the users account balance form intasend wallet */}

                  <Link to="profile" onClick={onClose}>
                    <Stack direction="row">
                      <Center>
                        <SettingsIcon marginRight="2"></SettingsIcon>
                        <Text>My Account</Text>
                      </Center>
                    </Stack>
                  </Link>
                </Stack>

                <Divider />

                <Stack paddingLeft='4'>
                  <Heading as='h2' size="md">Competitions</Heading>
                  <Link to="host" onClick={onClose}>
                    <Stack direction="row">
                      <Center>
                        <PlusSquareIcon marginRight="2"></PlusSquareIcon>
                        <Text>Host A Competition</Text>
                      </Center>
                    </Stack>
                  </Link>

                  <Link to="competitions" onClick={onClose}>
                    <Stack direction="row">
                      <Center>
                        <SunIcon marginRight="2"></SunIcon>
                        <Text>Live</Text>
                      </Center>
                    </Stack>
                  </Link>
                  <Link to="pending" onClick={onClose}>
                    <Stack direction="row">
                      <Center>
                        <MoonIcon marginRight="2"></MoonIcon>
                        <Text>Pending</Text>
                      </Center>
                    </Stack>
                  </Link>

                  <Link to="ended" onClick={onClose}>
                    <Stack direction="row">
                      <Center>
                        <TriangleDownIcon marginRight="2"></TriangleDownIcon>
                        <Text>Ended</Text>
                      </Center>
                    </Stack>
                  </Link>

                </Stack>

                <Divider />

                <Stack paddingLeft='4'>
                  <Heading as='h2' size="md">Tickets</Heading>
                  <Link to="tickets" onClick={onClose}>
                    <Stack direction="row">
                      <Center>
                        <AttachmentIcon marginRight="2"></AttachmentIcon>
                        <Text>My Tickets</Text>
                      </Center>
                    </Stack>
                  </Link>

                  <Link to="winners" onClick={onClose}>
                    <Stack direction="row">
                      <Center>
                        <StarIcon marginRight="2"></StarIcon>
                        <Text>Recent Winners</Text>
                      </Center>
                    </Stack>
                  </Link>

                </Stack>

                <Divider />

                <Stack paddingLeft='4' onClick={onClose}>
                  <Button
                    colorScheme='teal'
                    type="button"
                    variant="outline"
                    onClick={logout}

                  >Logout</Button>

                </Stack>

                <ColorModeSwitcher>

                </ColorModeSwitcher>

              </Stack>

            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Hide above="sm">

          <Stack
            backgroundColor='teal.100'
            height='60px'
            width='100%'
            direction='horizontal'
          >

            <Center>
              <HamburgerIcon
                as="button"
                color='teal'
                boxSize='8'
                marginLeft='4'
                onClick={onToggle}
              />
            </Center>
            <Spacer />
            <Center>
              <Heading
                color='teal'
                size='lg'
                fontWeight='extrabold'
                letterSpacing='widest'
                marginRight='4'
              >TikiTiki</Heading>

            </Center>
          </Stack>
        </Hide>

        <Stack direction='row' spacing={0} height={['calc(100% - 60px)', '100%']} width='100%'>

          <Show above='sm'>
            <Box
              width="250px"
              minWidth="200px"
              height='100%'
            >
              <Stack>

                <Center height='60px'>
                  <Heading
                    color='teal.900'
                    size='lg'
                    fontWeight='extrabold'
                    letterSpacing='widest'
                    marginRight='4'
                  >TikiTiki</Heading>
                </Center>


                <Stack paddingLeft='4'>
                  <Heading as='h2' size="md">Profile</Heading>
                  <Text>
                    {user?.user_name ?? "username"}
                  </Text>
                  <Text>
                    UserId {user?.user_id ?? "userid"}
                  </Text>
                  <Text>
                    Credit: $678
                  </Text>

                  <Link to="profile">
                    <Stack direction="row">
                      <Center>
                        <SettingsIcon marginRight="2"></SettingsIcon>
                        <Text as='a' href='#'>My Account</Text>
                      </Center>
                    </Stack>
                  </Link>
                </Stack>

                <Divider />

                <Stack paddingLeft='4'>
                  <Heading as='h2' size="md">Competitions</Heading>
                  <Link to="host">
                    <Stack direction="row">
                      <Center>
                        <PlusSquareIcon marginRight="2"></PlusSquareIcon>
                        <Text>Host A Competition</Text>
                      </Center>
                    </Stack>
                  </Link>

                  <Link to="competitions">
                    <Stack direction="row">
                      <Center>
                        <SunIcon marginRight="2"></SunIcon>
                        <Text>Live</Text>
                      </Center>
                    </Stack>
                  </Link>
                  <Link to="pending">
                    <Stack direction="row">
                      <Center>
                        <MoonIcon marginRight="2"></MoonIcon>
                        <Text>Pending</Text>
                      </Center>
                    </Stack>
                  </Link>

                  <Link to="ended">
                    <Stack direction="row">
                      <Center>
                        <TriangleDownIcon marginRight="2"></TriangleDownIcon>
                        <Text>Ended</Text>
                      </Center>
                    </Stack>
                  </Link>

                </Stack>

                <Divider />

                <Stack paddingLeft='4'>
                  <Heading as='h2' size="md">Tickets</Heading>
                  <Link to="tickets">
                    <Stack direction="row">
                      <Center>
                        <AttachmentIcon marginRight="2"></AttachmentIcon>
                        <Text>My Tickets</Text>
                      </Center>
                    </Stack>
                  </Link>

                  <Link to="winners">
                    <Stack direction="row">
                      <Center>
                        <StarIcon marginRight="2"></StarIcon>
                        <Text>Recent Winners</Text>
                      </Center>
                    </Stack>
                  </Link>

                </Stack>

                <Divider />

                <Stack paddingLeft='4'>
                  <Button
                    colorScheme='teal'
                    type="button"
                    variant="outline"
                    onClick={logout}
                  >Logout</Button>
                </Stack>
                <ColorModeSwitcher>

                </ColorModeSwitcher>

              </Stack>

            </Box>
          </Show>

          <Box height='100%' width='800px' padding='4' overflowY='scroll'>
            <Outlet />
          </Box>
        </Stack>

      </Stack>
    
    </ChakraProvider >
  )
}

export default App;