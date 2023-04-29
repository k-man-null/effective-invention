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
    Alert
} from '@chakra-ui/react';

import { useState, useEffect, useRef } from "react";
import { baseUrl } from "../urls";
import axios from "axios";
import TransactionList from "../Components/TransactionList";
import TransactionAccordionList from "../Components/TransactionAccordionList";

function Profile() {

    const avatarInputRef = useRef(null);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [amount, setDepositAmount] = useState(50);
    const [phone_number, setPhoneNumber] = useState();
    const [phone_number_error, setPhoneNumberError] = useState();
    const [amount_error, setAmountError] = useState();
    const [isInvalidPhone, setIsInvalidPhone] = useState(false);
    const [isInvalidAmount, setIsinvalidAmount] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [user, setUser] = useState({});
    const [wallet, setWallet] = useState({});
    const [avatar, setAvatarSrc] = useState(); // state for avatar image source


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

    // Implement the handleAvatarChange function to handle file selection
    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        // You can now perform further processing on the selected file, such as uploading it to a server or displaying a preview of the image.

        //You can now perform further processing on the selected file, such as uploading it to a server or displaying a preview of the image.

        // Update the avatar source with the selected file

        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            return (
                <Alert status="error" mt={4}>
                    You can only upload JPG/PNG file!
                </Alert>
            );
        }

        const reader = new FileReader();
        reader.onloadend = () => {

            const formData = new FormData();
            formData.append('avatar', file); // Assuming the file field on the server is named 'avatar'

            // Send the FormData object to the server using Axios or any other network request library
            axios.post(`${baseUrl}/session/avatar`, formData, { withCredentials: true })
                .then(response => {
                    // Handle successful response from the server
                    console.log('File uploaded successfully:', response.data);
                    // You can perform further actions, such as updating UI or displaying a success message
                    setAvatarSrc(reader.result);
                })
                .catch(error => {
                    // Handle error response from the server
                    console.error('File upload failed:', error);
                    // You can perform further actions, such as displaying an error message
                });
        };
        reader.readAsDataURL(file);
    };


    function validatePhone(phone) {

        let error;

        if (!phone) {
            error = "Phone number is required"

        } else {
            if (phone.slice(0, 3) !== "254") {

                error = "Start the number with 254"

            }

            if (phone.length !== 12) {

                error = "Enter a valid phone number"

            }
        }

        return error;

    }

    function depositFunds() {

        if (amount < 10) {

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
            phone_number: phone_number
        };

        axios.post(`${baseUrl}/session/deposit`, data, { withCredentials: true })
            .then((response) => {
                showToast('success', "Your deposit was successful, refresh the page to see your new balance");

            })
            .catch((err) => {
                showToast('error', "There was an error depositing");

            })

    }


    useEffect(() => {
        axios.get(`${baseUrl}/session/transactionhistory`, { withCredentials: true })
            .then((response) => {

                console.log(response);


                setTransactions(response.data.results);

            })
            .catch((error) => {

                alert(error.message);
            })
    }

        , [])


    useEffect(() => {
        axios.get(`${baseUrl}/session/fullProfile`, { withCredentials: true })
            .then((response) => {

                console.log(response);

                setUser(response.data);

            })
            .catch((error) => {

                alert(error.message);
            })
    }

        , [])

    useEffect(() => {
        axios.get(`${baseUrl}/session/wallet`, { withCredentials: true })
            .then((response) => {

                console.log(response);

                setWallet(response.data);

            })
            .catch((error) => {

                alert(error.message);
            })
    }

        , [])

    function verifyEmail() {

        axios.get(`${baseUrl}/session/verifyemail`, { withCredentials: true })
            .then((response) => {

                alert(response.data);

            })
            .catch((error) => {

                alert(error.message);
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
                                placeholder="254722000000"
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
                    name={user.full_name}
                    src={avatar || user.avatar}
                    onClick={() => avatarInputRef.current.click()}
                    cursor="pointer" />
                <Spacer />
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