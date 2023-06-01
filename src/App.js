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
import { UserContext } from "./userContext";
import { WalletContext } from "./walletContext";

function App() {

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [wallet, setWallet] = useState({});

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

  useEffect(() => {
    axios.get(`${baseUrl}/session/wallet`, { withCredentials: true })
      .then((response) => {

        setWallet(response.data);

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
                    Credit: KSH: {wallet?.available_balance}
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
                  <Link to="/app" onClick={onClose}>
                    <Stack direction="row">
                      <Center>
                        <TriangleDownIcon marginRight="2"></TriangleDownIcon>
                        <Text>All Competitions</Text>
                      </Center>
                    </Stack>
                  </Link>

                  <Link to="host" onClick={onClose}>
                    <Stack direction="row">
                      <Center>
                        <PlusSquareIcon marginRight="2"></PlusSquareIcon>
                        <Text>Host A Competition</Text>
                      </Center>
                    </Stack>
                  </Link>

                  <Link to="mylive" onClick={onClose}>
                    <Stack direction="row">
                      <Center>
                        <SunIcon marginRight="2"></SunIcon>
                        <Text>My Live Competitions</Text>
                      </Center>
                    </Stack>
                  </Link>


                  <Link to="myended" onClick={onClose}>
                    <Stack direction="row">
                      <Center>
                        <MoonIcon marginRight="2"></MoonIcon>
                        <Text>My Ended Competitions</Text>
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



                <Stack paddingLeft='4'>
                  <Heading as='h2' size="md">Affiliate Cash</Heading>
                  <Link to="affiliates" onClick={onClose}>
                    <Stack direction="row">
                      <Center>
                        <AttachmentIcon marginRight="2"></AttachmentIcon>
                        <Text>My Account</Text>
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
                    Credit: KSH: {wallet?.available_balance}
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
                  <Link to="/app">
                    <Stack direction="row">
                      <Center>
                        <TriangleDownIcon marginRight="2"></TriangleDownIcon>
                        <Text>All Competitions</Text>
                      </Center>
                    </Stack>
                  </Link>
                  <Link to="host">
                    <Stack direction="row">
                      <Center>
                        <PlusSquareIcon marginRight="2"></PlusSquareIcon>
                        <Text>Host A Competition</Text>
                      </Center>
                    </Stack>
                  </Link>

                  <Link to="mylive">
                    <Stack direction="row">
                      <Center>
                        <SunIcon marginRight="2"></SunIcon>
                        <Text>My Live Competitions</Text>
                      </Center>
                    </Stack>
                  </Link>

                  <Link to="myended">
                    <Stack direction="row">
                      <Center>
                        <MoonIcon marginRight="2"></MoonIcon>
                        <Text>My Ended Competitions</Text>
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
                  <Heading as='h2' size="md">Affiliate Cash</Heading>
                  <Link to="affiliates">
                    <Stack direction="row">
                      <Center>
                        <AttachmentIcon marginRight="2"></AttachmentIcon>
                        <Text>My Account</Text>
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
          {/* The main part of the app i.e outlet for routing */}
          <Box height='100%' width='1000px' padding='4' overflowY='scroll'>
            <UserContext.Provider value={user}>
              <WalletContext.Provider value={wallet}>
                <Outlet />
              </WalletContext.Provider>
            </UserContext.Provider>
          </Box>
        </Stack>

      </Stack>

    </ChakraProvider >
  )
}

export default App;