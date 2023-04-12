import "@fontsource/poppins";
import theme from "../theme";
import {
    ChakraProvider,
    Box,
    Text
} from '@chakra-ui/react';

function Profile(){
    return(
        <ChakraProvider theme={theme}>
            <Box width="400px" height="400px">
                <Text>Profile page</Text>
            </Box>
        </ChakraProvider>
    )
}

export default Profile;