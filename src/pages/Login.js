import "@fontsource/poppins";
import theme from '../theme'

import {
    ChakraProvider,
    Box,
    Center,
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels
} from '@chakra-ui/react';
import { useState } from "react";

import Login from "../Components/Login";
import Register from "../Components/Register";
import ForgotPass from "../Components/ForgotPass";

function Enter() {

    const [tabIndex, setTabIndex] = useState(0);

    function setTab(index) {
        setTabIndex(index);
    }

    return (
        <ChakraProvider theme={theme}>
            <Center
                h='100vh'
                w='100vw'
            >
                <Box
                    width='400px'
                    border='1px solid teal'
                    marginY='10'
                >
                    <Tabs 
                    isFitted
                    variant='enclosed'
                    onChange={(index) => setTabIndex(index)}
                    index={tabIndex}
                    >
                        <TabList mb='1em'>
                            <Tab>Signup</Tab>
                            <Tab>Login</Tab>
                            <Tab>Reset</Tab>
                        </TabList>
                        <TabPanels
                        >
                            <TabPanel>
                                <Register setTab={ setTab } ></Register>
                            </TabPanel>
                            <TabPanel>
                                <Login  setTab={ setTab } ></Login>
                            </TabPanel>
                            <TabPanel>
                                <ForgotPass  setTab={ setTab } ></ForgotPass>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Center>

        </ChakraProvider>
    )
}

export default Enter;