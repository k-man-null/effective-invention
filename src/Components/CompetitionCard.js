import {
    LinkBox,
    LinkOverlay,
    Text,
    Stack,
    Heading,
    Image,
    Flex,
    Box
} from "@chakra-ui/react";

import CountDown from "../Components/CountDown";

const baseUrl = 'http://localhost:5000/imageserver/'

export default function CompetitionCard({ competition }) {

    console.log(competition)

    return (

        <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>

            <Stack
                border="1px solid pink"
                borderRadius='10'
                padding='4'
            >
                <LinkOverlay  href={`/app/competitions/${competition?.game_id}`}>
                    <Heading mb='2' size="sm" color='teal.400'>{competition?.title}</Heading>
                </LinkOverlay>
                <Image
                    objectFit='cover'
                    src={`${baseUrl}${competition?.prize_images[0]}`}
                    alt='Caffe Latte'
                    height={"150px"}
                    width="100%"
                    align='center'
                    loading="lazy"
                    borderRadius='4'
                />

                <Flex>
                    <Box w="50%">
                        <Heading size="sm">Ends In</Heading>
                        <CountDown targetDate={competition?.end_date} />
                    </Box>
                    <Box w="50%">
                        <Heading size="sm">Ticket Price</Heading>
                        <Text>KSH {competition?.ticket_price}</Text>
                    </Box>
                </Flex>

            </Stack>
        </LinkBox>

    );
}