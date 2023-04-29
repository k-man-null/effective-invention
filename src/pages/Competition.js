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
    NumberInputField,
    FormControl,
    FormLabel,
    NumberInput,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInputStepper,
    Divider,
    Input,
    FormErrorMessage,
    useToast,
    colorScheme

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
    const [ticketPurchase, setTicketPurchase] = useState(1);
    // const [phone_number, setPhoneNumber] = useState("");
    // const [phone_number_error, setPhoneNumberError] = useState("");

    let params = useParams();

    const toast = useToast();

    const showToast = (status, message) => {

        toast({
            title: status === 'error' ? 'Error' : 'Success',
            description: message,
            status: status,
            duration: 9000,
            isClosable: true,
        });
    }

    const { competitionId } = { ...params };

    useEffect(() => {

        axios.get(`${baseUrl}/games/${competitionId}`, { withCredentials: true })
            .then((response) => {
                
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

                alert("There was an error! Try again later");

            })

    }

    function enterCompetition() {

        if (competitionId === null) {
            return;
        }

        if (ticketPurchase === null) {
            return;
        }

        const data = {
            game_id: competitionId,
            total_tickets: ticketPurchase
        }

        axios.post(`${baseUrl}/tickets/enterGame`, data, { withCredentials: true })
            .then((response) => {
                onClose()
                showToast("success", response.data.message)
            })
            .catch((error) => {
                console.log(error.response)
                showToast("error", error.response.data)
            })

    }

    return (

        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay bg='none'
                    backdropFilter='auto'
                    backdropBlur='2px' />
                <ModalContent>
                    <ModalHeader>Select the number of tickets</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter number of tickets</FormLabel>
                            <NumberInput
                                onChange={(value) => {
                                    setTicketPurchase(value);
                                }}
                                value={ticketPurchase}
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        {/* <FormControl>
                            <FormLabel>Enter your mpesa phone number</FormLabel>
                            <Input
                                onChange={(event) => {
                                    setPhoneNumber(event.target.value);
                                }}
                                value={phone_number}
                                placeholder="254722000000"
                                type="text"
                            >
                            </Input>
                            <FormErrorMessage>{phone_number_error}</FormErrorMessage>
                        </FormControl> */}

                        <Divider marginY={4}></Divider>

                        <Flex>
                            <Box w="50%">
                                <Heading size="sm">Total Tickets</Heading>
                                <Text>{ticketPurchase}</Text>
                            </Box>
                            <Box w="50%">
                                <Heading size="sm">Total Amount</Heading>
                                <Text color={"teal.400"}>KSH {ticketPurchase * competition?.ticket_price}</Text>
                            </Box>

                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='outline' colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={enterCompetition} colorScheme="teal" variant='solid'>Purchase</Button>
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