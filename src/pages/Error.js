import { Heading, Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
function Error() {
    return (
        <ChakraProvider theme={theme}>
            <Box>
                <Heading>
                    Not Found
                </Heading>
            </Box>
        </ChakraProvider>
    )
}

export default Error;