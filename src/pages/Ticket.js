import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import goldRaffleBg from '../assets/gold_raffle_background.png';


const Ticket = ({ ticket }) => {
  const { ticket_id, ticket_price, status, won } = ticket;

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
    console.log("Start the claim user journey")
  }

  return (
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
          {won ? <Button onClick={handleClaim} colorScheme='teal'>CLAIM</Button> : ""}
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
  );
};

export default Ticket;
