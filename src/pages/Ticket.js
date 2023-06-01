import React from 'react';
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
  colorScheme,
  Textarea

} from "@chakra-ui/react";
import axios from "axios";
import { baseUrl } from "../urls";


import goldRaffleBg from '../assets/gold_raffle_background.png';
import { useState } from 'react';

const Ticket = ({ ticket }) => {
  const { ticket_id, ticket_price, won } = ticket;


  const { isOpen, onOpen, onClose } = useDisclosure();

  const [contact, setContact] = useState("");


  let ticketColor = '';
  switch (won) {
    case true:
      ticketColor = 'green.500';
      break;
    case false:
      ticketColor = 'red.500';
      break;
    default:
      break;
  }

  function handleClaim() {
    if (contact.length < 10) {
      console.log("Enter a valid contact")
    }

    const data = {
      ticket: ticket,
      contact: contact
    }

    axios.post(`${baseUrl}/claim`, data, { withCredentials: true })
      .then((response) => {
        onClose()
        showToast("success", "response.data.message")
      })
      .catch((error) => {
        console.log(error.response)
        showToast("error", "error.response.data")
      })



  }

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
            <FormControl isRequired>
              <FormLabel>How you would like to be contacted eg.. watsapp number, phone</FormLabel>

              <Textarea
                onChange={(event) => {
                  setContact(event.target.value);
                }}
                value={contact}
              />

            </FormControl>


            <Divider marginY={4}></Divider>

          </ModalBody>

          <ModalFooter>

            <Button type='submit' colorScheme="teal" variant='solid' onClick={handleClaim}>Continue</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex
        width="100%"
        height="200px"
        borderWidth="2px"
        borderRadius="md"
        borderColor={ticketColor}
        backgroundImage={`url(${goldRaffleBg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundBlendMode="none"
        boxShadow="md"
        _hover={{ transform: 'scale(1.05)' }}
        transition="transform 0.3s ease"
        overflow="hidden"
      >
        {/* Left column */}
        <Flex flex="1" flexDirection="column" justifyContent="space-between" >
          {/* Title */}
          <Box p="0.5rem" >
            <Heading size="md" fontFamily='cardFont' textAlign="center">TikiTiki.me</Heading>


            {/* Price */}

            <Text lineHeight={1} fontSize="60" fontWeight="bold" fontFamily='cardFont'>{ticket_price}</Text>
          </Box>

          {/* Barcode */}
          <Box ml={2}>
            <Text lineHeight={0.3} fontSize="sm" fontWeight="bold" fontFamily="body">ID: {ticket_id}</Text>

            <Text fontFamily='barcode' fontSize="50">vavckvavb</Text>
          </Box>
        </Flex>

        {/* Right column */}
        <Flex flex="1" flexDirection="column" justifyContent="space-between" p="1rem">
          {/* Status */}
          <Flex justifyContent="space-between" >
            {won ? <Text fontSize="l" mr={2} fontWeight="bold" fontFamily="heading">WON</Text> :
              <Text fontSize="l" mr={2} fontWeight="bold" fontFamily="heading">LOST</Text>}
            {won ? <Button onClick={onOpen} colorScheme='teal'>CLAIM</Button> : ""}
          </Flex>

          {/* Message */}
          <Box>
            <Text fontSize="md" my="0.5rem" fontFamily="body">Thank you for participating</Text>
          </Box>

          {/* Disclaimer */}
          <Box>
            <Text fontSize="xs" my="0.5rem" fontFamily="body" color="gray.500">This ticket is non-transferable and non-refundable.</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Ticket;
