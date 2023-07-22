import { Box, Image, Spacer, ChakraProvider, Center } from '@chakra-ui/react'
import Countdown from '../Components/CountDown'
import "@fontsource/poppins";
import theme from '../theme';

export default function PublicGiveaway() {

    const giveaway = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        endDate: '2023-09-13T16:02:00.000Z',
        entries: 200,
        title: 'Win an incredible expreince at this exquisite airbnb for 3 days',
        yourEntries: 3
    }

    return (
        <ChakraProvider theme={theme}>
            <Center width='100vw' height='100vh'>
                <Box maxW='400px' overflow='hidden' border='2px solid teal'>
                    <Box display='flex' alignItems='center' border='1px solid teal'>
                        <Box >
                            <p>Entries</p>
                            <p>{giveaway.entries}</p>
                        </Box>
                        <Spacer></Spacer>
                        <Box >
                            <p> Your Entries</p>
                            <p>{giveaway.yourEntries}</p>
                        </Box>
                        <Spacer></Spacer>
                        <Box>
                            <p>Ends In</p>
                            <Countdown targetDate={giveaway.endDate} />
                        </Box>
                    </Box>
                    <Box
                        fontFamily=''
                        mt='1'
                        fontWeight='semibold'
                        as='h2'
                        color='teal.400'
                        noOfLines={2}
                    >
                        {giveaway.title}
                    </Box>
                    <Image src={giveaway.imageUrl} />
                    <Box display='flex' alignItems='center' border='1px solid teal'>
                        
                    </Box>
                </Box>
            </Center>
        </ChakraProvider>
    )
}