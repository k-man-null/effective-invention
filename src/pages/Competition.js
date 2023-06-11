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
    useToast,
    Input

} from "@chakra-ui/react";



import Error from "../pages/Error"

import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';

import axios from "axios";

import CountDown from "../Components/CountDown";
import { baseUrl } from "../urls";
import { UserContext } from "../userContext";


async function getCompetition(game_id) {
    try {
        const response = await axios.get(`${baseUrl}/games/${game_id}`, { withCredentials: true })

        return response.data;
    } catch (error) {
        return null
    }
}

async function getCreator(id) {

    try {

        const response = await axios.get(`${baseUrl}/games/gamecreator/${id}`, { withCredentials: true });

        return response.data;

    } catch (error) {

        return null;
    }

}

async function getWinnerNameAvatar(game_id, won_ticket_id) {

    try {
        const response = await axios.get(`${baseUrl}/session/winner/?game=${game_id}&won_ticket_id=${won_ticket_id}`, { withCredentials: true })
        return response.data;
    } catch (error) {
        return null
    }

}

function calcRevenue(game) {

    if (game.status === "ended" && game.winning_ticket_id) {

        const ticketsSold = game.tickets_sold;

        const ticketPrice = parseInt(game.ticket_price);

        //account for commisions too.

        const revenue = 0.75 * ticketsSold * ticketPrice;

        

        return revenue;

    }

}

async function getClaim(competitionId) {

    try {

        const response = await axios.get(`${baseUrl}/claim/${competitionId}`, { withCredentials: true })
        return response.data.claim;
    } catch (error) {
        return null
    }

}

function toShowClaim(user, competition, winner) {

    if (user.user_id === competition.host_id || user.user_name === winner.user_name) {
        return true;
    } else {
        return false;
    }
}

function isTheCurrentUserTheHost(user, competition) {

    if (user.user_id === competition.host_id) {

        return true;

    }

    return false;

}

export default function Competition() {

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
    const user = useContext(UserContext);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [ticketPurchase, setTicketPurchase] = useState(1);
    const [code, setCode] = useState(null);

    const [competition, setCompetition] = useState(null);
    const [creator, setCreator] = useState(null);
    const [winner, setWinner] = useState(null);
    const [claim, setClaim] = useState(null);
    const [revenue, setRevenue] = useState();
    const [loading, setLoading] = useState(true);

    const [showClaim, setShowClaim] = useState(false);

    let params = useParams();

    const { competitionId } = { ...params };

    useEffect(() => {
        const fetchData = async () => {
            try {

                const result1 = await getCompetition(competitionId);
                setCompetition(result1);

                const has_a_winner = !!result1.winning_ticket_id;

                if (has_a_winner) {
                    const result2 = await getWinnerNameAvatar(competitionId, result1.winning_ticket_id);
                    setWinner(result2);

                }

                const creator_id = result1.host_id;
                const result3 = await getCreator(creator_id);
                setCreator(result3);

                const result4 = await getClaim(competitionId);
                setClaim(result4);

                if (result4) {
                    const result5 = calcRevenue(result1)
                    setRevenue(result5)
                }

                setLoading(false);

            } catch (error) {
                setLoading(false);
                console.error(error);
            }
        };

        fetchData();
    }, []);
    
    useEffect(() => {
        if (!loading && user.user_id) {
            console.log("user,competition,winner");
            if ((user.user_id === competition.host_id || user.user_name === winner?.user_name) && !!claim) {
                setShowClaim(true)
            } else {
                setShowClaim(false);
            }

        }

    }, [loading]);


    function handleProvidePrize(option) {
        if (option === "forfeit") {

            const data = {
                creator_has_made_choice: true,
                to_give_winner_cash: true
            }

            axios.put(`${baseUrl}/claim/${competitionId}`, data, { withCredentials: true })
                .then((response) => {
                    onClose()
                    showToast("success", response.data.message)
                })
                .catch((error) => {
                    console.log(error.response)
                    showToast("error", error.response.data)
                })
        } else if (option === "supply") {
            const data = {
                creator_has_made_choice: true,
                creator_will_give_prize: true,
                to_give_creator_cash: true
            }
            axios.put(`${baseUrl}/claim/${competitionId}`, data, { withCredentials: true })
                .then((response) => {
                    onClose()
                    showToast("success", response.data.message)
                })
                .catch((error) => {
                    console.log(error.response)
                    showToast("error", error.response.data)
                })

        }
    }

    function handleAccept(option) {
        if (option === "dispute") {

            const data = {
                winner_has_made_choice: true,
                disputed: true,
                dispute_resolved: false
            }

            axios.put(`${baseUrl}/claim/${competitionId}`, data, { withCredentials: true })
                .then((response) => {
                    onClose()
                    showToast("success", response.data.message)
                })
                .catch((error) => {
                    console.log(error.response)
                    showToast("error", error.response.data)
                })
        } else if (option === "accept") {
            const data = {
                winner_has_made_choice: true,
                accepted: true,
            }
            axios.put(`${baseUrl}/claim/${competitionId}`, data, { withCredentials: true })
                .then((response) => {
                    onClose()
                    showToast("success", response.data.message)
                })
                .catch((error) => {
                    console.log(error.response)
                    showToast("error", error.response.data)
                })
            console.log("I have chosen to supply")
        }
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
            total_tickets: ticketPurchase,
            coupon_code: code
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

    const baseImageUrl = "https://storage.googleapis.com/tikitiki-compressed-images/compressed/"

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

                        <Divider marginY={4}></Divider>

                        <FormControl>
                            <FormLabel>Do you have a coupon code?</FormLabel>
                            <Input

                                onChange={(event) => {
                                    setCode(event.target.value);
                                }}
                                value={code}
                                placeholder="LUCKYCODE"
                            >
                            </Input>
                        </FormControl>

                        <Flex mt={4}>
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
                        <Button disabled={competition?.status === "ended"} onClick={enterCompetition} colorScheme="teal" variant='solid'>Purchase</Button>
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
                        <Avatar name={creator?.name} src={`${baseImageUrl}thumb_${creator?.avatar}`} />

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

                        <Button  isDisabled={competition?.status === "ended"} onClick={onOpen} w="100%" colorScheme='teal'>Enter</Button>

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
                            src={`${baseImageUrl}${image}`}
                            alt='Caffe Latte'
                            width="100%"
                            align='center'
                            loading="lazy"
                            borderRadius='4'
                            key={image}
                        />

                    )}


                    <Heading mb='2' size="lg" color='teal.400'>Winner</Heading>

                    {competition?.status === "ended" ?

                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name={`${winner?.first_name} ${winner?.last_name}}`} src={`${baseImageUrl}${winner?.profile_image}`} />

                            <Box>
                                <Heading size='sm'>{winner?.user_name}</Heading>
                                <Text>Winning ticket id: {competition.winning_ticket_id}</Text>
                            </Box>

                        </Flex> : <Text>The competition has not ended, then you will see the winner here! </Text>
                    }

                    {showClaim ?

                        <div>
                            <Heading >Claim</Heading>
                            <>

                                {isTheCurrentUserTheHost(user, competition) ?
                                    <Box border="1px solid teal" padding={5} w="100%">
                                        <Heading size="sm">Below is your projected revenue from the ticket sales(75%)</Heading>
                                        <Text fontSize={30} color='teal.400' fontWeight='bold'>
                                            KSH {revenue}
                                        </Text>
                                        <Heading size="sm">To get this cash, you need to give the prize
                                            to the winner in the means agreed, and they should accept
                                            the prize. Only when the winner accepts the prize will this
                                            amount be released to you as a means of protection.
                                            It is advised that you keep evidence of delivery or receipts etc..
                                            incase of a dispute to help us solve any cases which is rare.
                                            If you don't supply the prize, the cash will be given to the winner
                                            automatically.
                                        </Heading>
                                        <Heading color='red' my={2} size="sm"> Do you intend to provide the prize?</Heading>
                                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                            <Button colorScheme="red" onClick={() => handleProvidePrize("forfeit", competitionId)}>
                                                Forfeit Cash
                                            </Button>
                                            <Button colorScheme="green" onClick={() => handleProvidePrize("supply", competitionId)}>
                                                Supply Prize
                                            </Button>

                                        </Flex>
                                        <Text my='2' color="teal.800">
                                            Choice:  {claim?.creator_will_give_prize ? "Will provide prize" : "Forfeited cash"}
                                        </Text>

                                    </Box> :
                                    <Box border="1px solid teal" padding={5} w="100%">

                                        <Heading size="sm" mb={2}>
                                            If the host is delivering the prize, do not click accept until you receive
                                            the prize. If you click accept, we will release the revenue to the
                                            host. Once you accept, there is no going back.
                                        </Heading>
                                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                            <Button colorScheme="red" onClick={() => handleAccept("dispute", competitionId)}>
                                                Dispute
                                            </Button>
                                            <Button colorScheme="green" onClick={() => handleAccept("accept", competitionId)}>
                                                Accept
                                            </Button>
                                        </Flex>
                                    </Box>

                                }
                            </>
                        </div>
                        :
                        ""

                    }

                </Stack>

                :

                <Error />

            }

        </>

    );
}