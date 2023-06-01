import "@fontsource/poppins";
import theme from "../theme";
import {
    Button,
    ChakraProvider,
    Heading,
    Flex,
    Spacer,
    Stat,
    StatLabel,
    StatNumber,
    StatGroup,
    Divider,
    Show,
    useDisclosure,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Tag,
    Wrap,
    WrapItem,
    Text
} from '@chakra-ui/react';
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../urls";
import ReferralsList from "../Components/ReferralsList";
import ReferralsAccordionList from "../Components/ReferralsAccordionList";


function Affiliate() {

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

    const [referrals, setReferrals] = useState([]);
    const [commissions, setCommissions] = useState([]);
    const [earnings, setEarnings] = useState([]);
    const [code, setCode] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {

        axios.get(`${baseUrl}/referrals/mycodes`, { withCredentials: true })
            .then((response) => {
                setReferrals([...response.data.codes]);
            })
            .catch((error) => {
                console.log(error)
                //showToast("error", error.response.data)
            });
        
    }, [])

    useEffect(() => {

        axios.get(`${baseUrl}/referrals/commissions`, { withCredentials: true })
            .then((response) => {
                setCommissions([...response.data.commissions]);
            })
            .catch((error) => {
                console.log(error)
            });
        
    }, [])

    useEffect(() => {

        axios.get(`${baseUrl}/referrals/earnings`, { withCredentials: true })
            .then((response) => {
                setEarnings(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
        
    }, [])

    function requestCode() {

        if (code.length < 3 || code.length > 10) {
            showToast('error', "code can only be 3 characters and not more then 10 characters")
            return;
        }

        const data = {
            coupon_code: code
        }

        axios.post(`${baseUrl}/referrals`, data, { withCredentials: true })
            .then((response) => {
                onClose()
                showToast("success", response.data.message)
            })
            .catch((error) => {
                console.log(error)
                showToast("error", error.response.data)
            })

    }

    return (
        <ChakraProvider theme={theme}>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay bg='none'
                    backdropFilter='auto'
                    backdropBlur='2px' />
                <ModalContent>
                    <ModalHeader>Enter your code, we will let you know if it is available</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <FormControl>
                            <FormLabel>Enter New Code</FormLabel>
                            <Input

                                onChange={(event) => {
                                    setCode(event.target.value);
                                }}

                                value={code}

                                placeholder="LUCKYCODE"
                            >
                            </Input>
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button variant='outline' colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={requestCode} colorScheme="teal" variant='solid'>Create</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Flex>

                <Heading mb='4'>Overview</Heading>
                <Spacer />
                <Button colorScheme="teal" onClick={onOpen}>
                    Create New Code
                </Button>

            </Flex>

            <StatGroup>

                <Stat>
                    <StatLabel>Total Earning (KSH)</StatLabel>
                    <StatNumber>
                        {earnings.settledEarnings}
                    </StatNumber>

                </Stat>

                <Stat>
                    <StatLabel>Pending Earning (KSH)</StatLabel>
                    <StatNumber>
                        {earnings.pendingEarnings}
                    </StatNumber>

                </Stat>

            </StatGroup>

            <Heading as='h2' size='md'>Your Referral Codes</Heading>

            <Text>
                Share your codes and earn 10% of every tickest sold, win or lose
            </Text>
            <Text>Earnings are pending because the competition has not yet ended.
                Earnings will be paid out every 2 weeks.
            </Text>

            <Wrap backgroundColor={"teal.200"} padding={4}>

                {referrals.map((code) =>
                    
                        <WrapItem key={code.refcode_id}>
                            <Tag>{code.code}</Tag>
                        </WrapItem>
                    
                )}

            </Wrap>

            <Heading as='h2' size='md'>Your Referrals List</Heading>

            <Divider my='4' />

            <Show above='lg'>
                <ReferralsList referrals={commissions} />
            </Show>

            <Show below='lg'>
                <ReferralsAccordionList referrals={commissions} />
            </Show>

        </ChakraProvider>
    )
}

export default Affiliate;