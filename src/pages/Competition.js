import {
    Text,
    Stack,
    Heading,
    Image,
    Flex,
    Box,
    Button,
    Avatar,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,

} from "@chakra-ui/react";

import Error from "../pages/Error"

import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import axios from "axios";

import CountDown from "../Components/CountDown";
import { baseUrl } from "../urls";

export default function Competition() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [competition, setCompetition] = useState(null);
    const [creator, setCreator] = useState(null);

    let params = useParams();

    const { competitionId } = { ...params };

    useEffect(() => {

        axios.get(`${baseUrl}/games/${competitionId}`, { withCredentials: true })
            .then((response) => {
                console.log(response.data);
                setCompetition(response.data);
                getCreator(response.data.host_id)

            })
            .catch((error) => {

                alert(error.message);
            })
    }

        , []);


    function getCreator(id) {

        axios.get(`${baseUrl}/games/gamecreator/${id}`, { withCredentials: true })
            .then((response) => {


                setCreator(response.data);

            })
            .catch((error) => {

                alert(error.message);
            })

    }

    function enterCompetition() {
        console.log("Enetring competition flow here.......")
        //
    }

    return (

        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Select the number of tickets you want</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            This is the body of the modal, will be a form selecting the number 
                            of tickets to purchase.
                            Also ability to enter promo code for discounts if game if discount eleigible
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button  variant='outline' colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button  onClick={enterCompetition} variant='solid'>Purchase</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {competition !== null ?

                <Stack
                    border="1px solid pink"
                    borderRadius='10'
                    padding='4'
                >

                    <Heading mb='2' size="lg" color='teal.400'>{competition?.title}</Heading>

                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={creator?.name} src={creator?.avatar} />

                        <Box>
                            <Heading size='sm'>{creator?.name}</Heading>

                        </Box>
                    </Flex>

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

                    <Flex>

                        <Box w="50%">
                            <Heading size="sm">Total Tickets</Heading>
                            <Text> {competition?.tickets_total} </Text>
                        </Box>
                        <Box w="50%">
                            <Heading size="sm">Tickets Sold</Heading>
                            <Text>{competition?.tickets_sold}</Text>
                        </Box>

                    </Flex>

                    <Flex>

                        <Button onClick={onOpen} w="100%" colorScheme='teal'>Enter</Button>

                    </Flex>

                    <Heading mb='2' size="sm" color='teal.400'>Whats the prize?</Heading>

                    <Box>
                        <Text>
                            {competition?.prize_description}
                        </Text>

                    </Box>
                    <Heading mb='2' size="sm" color='teal.400'>Prize Images</Heading>

                    {competition?.prize_images.map((image) =>

                        <Image
                            objectFit='cover'
                            src={`${image}`}
                            alt='Caffe Latte'
                            width="100%"
                            align='center'
                            loading="lazy"
                            borderRadius='4'
                            key={image}
                        />

                    )}

                    <Heading mb='2' size="lg" color='teal.400'>Winner</Heading>

                    {competition?.released ?

                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name={creator?.name} src={creator?.avatar} />

                            <Box>
                                <Heading size='sm'>{creator?.name}</Heading>

                            </Box>
                        </Flex> : <Text>The competition has not ended! </Text>
                    }

                </Stack>

                :

                <Error />

            }

        </>

    );
}