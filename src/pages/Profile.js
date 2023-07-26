import "@fontsource/poppins";
import theme from "../theme";
import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    FormErrorMessage,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputStepper,
    useDisclosure,
    Input,
    Divider,
    ModalFooter,
    ModalContent,
    useToast,
    Show,
    Flex,
    Avatar,
    Badge,
    Spacer,
    Heading,
    Alert,
    Spinner
} from '@chakra-ui/react';

import { useState, useEffect, useRef } from "react";
import { baseUrl } from "../urls";
import axios from "axios";
import TransactionList from "../Components/TransactionList";
import TransactionAccordionList from "../Components/TransactionAccordionList";
import { useSelector } from "react-redux";
import { baseImageUrl } from "../urls";

function Profile() {

    const avatarInputRef = useRef(null);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { user } = useSelector((state) => state.user)
    const { wallet } = useSelector((state) => state.wallet)

    const [amount, setDepositAmount] = useState(50);
    const [phone_number, setPhoneNumber] = useState();
    const [phone_number_error, setPhoneNumberError] = useState();
    const [amount_error, setAmountError] = useState();
    const [isInvalidPhone, setIsInvalidPhone] = useState(false);
    const [isInvalidAmount, setIsinvalidAmount] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [avatar, setAvatarSrc] = useState(); // state for avatar image source
    const [isUploading, setIsUploading] = useState(false);


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

    const handleAvatarChange = (event) => {

        event.preventDefault()

        const file = event.target.files[0];

        setIsUploading(true);

        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {

            setIsUploading(false);
            return (
                <Alert status="error" mt={4}>
                    You can only upload JPG or PNG file!
                </Alert>
            );
        }

        const reader = new FileReader();

        reader.onloadend = () => {

            const formData = new FormData();
            formData.append('avatar', file);

            // Send the FormData object to the server using Axios or any other network request library
            axios.post(`${baseUrl}/session/avatar`, formData, { withCredentials: true })
                .then(response => {
                    // Handle successful response from the server
                    console.log('File uploaded successfully:', response.data);
                    setAvatarSrc(reader.result);

                    setIsUploading(false);
                })
                .catch(error => {
                    setIsUploading(false);
                    // Handle error response from the server
                    console.error('File upload failed:', error);
                    // You can perform further actions, such as displaying an error message
                    alert("Failed to upload avatar");
                });
        };

        reader.readAsDataURL(file);
    };


    function validatePhone(phone) {

        console.log(phone)

        let error;

        if (!phone) {
            error = "Phone number is required"

        } else {


            error = "Start the number with 254"

        }

        if (phone.length !== 12) {
            if (phone.trim().length !== 10) {

                error = "Enter a valid phone number"

            }
        }

        return error;

    }


    function depositFunds() {

        if (amount < 50) {

            setIsinvalidAmount(true);
            setAmountError("Minimum deposit is KSH 50");

            return;
        }

        if (phone_number === undefined) {

            setIsInvalidPhone(true);
            setPhoneNumberError("Phone number is required");

            return;
        }

        const result = validatePhone(phone_number);

        if (result !== undefined) {
            setIsInvalidPhone(true);
            setPhoneNumberError(result)
            return;
        }

        const data = {
            amount: amount,
            phone_number: "254" + phone_number.slice(1)
        };

        axios.post(`${baseUrl}/session/deposit`, data, { withCredentials: true })
            .then((response) => {
                showToast('success', "Your deposit was successful, refresh the page to see your new balance");

            })
            .catch((err) => {
                //showToast('error', "There was an error depositing");

            })

    }


    useEffect(() => {
        axios.get(`${baseUrl}/session/transactionhistory`, { withCredentials: true })
            .then((response) => {

                setTransactions(response.data.results);

            })
            .catch((error) => {


                alert(error.message);
            })
    }

        , [])

    function verifyEmail() {

        axios.get(`${baseUrl}/session/verifyemail`, { withCredentials: true })
            .then((response) => {

                console.log(response);
                showToast('success', response.data.message)

            })
            .catch((error) => {

                console.log(error);
            })
    }


    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay bg='none'
                    backdropFilter='auto'
                    backdropBlur='2px' />
                <ModalContent>
                    <ModalHeader>Deposit funds to join competitions</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <FormControl isInvalid={isInvalidAmount}>
                            <FormLabel>Enter your deposit amount</FormLabel>
                            <NumberInput
                                onChange={(value) => {
                                    setDepositAmount(value);
                                }}
                                value={amount}
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <FormErrorMessage>{amount_error}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={isInvalidPhone}>
                            <FormLabel>Enter your mpesa phone number</FormLabel>
                            <Input
                                onChange={(event) => {
                                    setPhoneNumber(event.target.value);
                                }}
                                value={phone_number}
                                placeholder="0722123456"
                                type="text"
                            >
                            </Input>
                            <FormErrorMessage>{phone_number_error}</FormErrorMessage>
                        </FormControl>

                        <Divider marginY={4}></Divider>

                    </ModalBody>

                    <ModalFooter>
                        <Button variant='outline' colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={depositFunds} colorScheme="teal" variant='solid'>Deposit</Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>

            <Flex mb='4'>
                <Avatar size='md'
                    name={user?.full_name}
                    src={`${baseImageUrl}${user?.avatar}`}
                    onClick={() => avatarInputRef.current.click()}
                    cursor="pointer" />
                <Spacer />
                {isUploading ? <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='teal.500'
                    size='l'
                /> : ""}
                <Text>Profile Photo</Text>
                <Input
                    type="file"
                    display="none"
                    onChange={handleAvatarChange}
                    ref={avatarInputRef}
                />
            </Flex>

            <Divider mb='4' />

            <Flex mb='4'>
                <Text>Current Balance</Text>
                <Spacer />
                <Text>{wallet.available_balance}</Text>
            </Flex>

            <Button mb='4' onClick={onOpen} colorScheme="teal">
                Deposit Funds
            </Button>

            <Divider mb='4' />

            <Flex mb='4'>
                <Text>Username</Text>
                <Spacer />
                <Text>{user.user_name}</Text>
            </Flex>

            <Divider mb='4' />

            <Flex mb='4'>
                <Text>Email</Text>
                <Spacer />
                <Text>{user.email}</Text>

            </Flex>

            {user.verified ? <Badge colorScheme='green'>Email Verified</Badge> : <Button colorScheme="teal" onClick={verifyEmail}>
                verifyEmail
            </Button>}

            <Divider my='4' />


            <Flex mb='4'>
                <Text>Phone</Text>
                <Spacer />
                <Text>{user.phone_number}</Text>
            </Flex>

            <Heading as='h2' size='md'>Transaction List</Heading>

            <Divider my='4' />

            <Show above='lg'>
                <TransactionList transactions={transactions} />

            </Show>
            {/* <Hide below='md'>
                <TransactionAccordionList transactions={transactions} />

            </Hide> */}

            <Show below='lg'>
                <TransactionAccordionList transactions={transactions} />

            </Show>

        </>
    )
}


export default Profile;