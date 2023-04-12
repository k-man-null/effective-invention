
import theme from "../theme";
import {
    ChakraProvider,
    Heading,
    SimpleGrid
    
} from '@chakra-ui/react';
import Ticket from "./Ticket";
import { useState, useEffect } from "react";
import axios from "axios";

function Tickets() {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/tickets`, { withCredentials: true })
            .then((response) => {

                setTickets(response.data.tickets)

            })
            .catch((error) => {

                alert(error.message);
            })
    }

        , [])


    return (
        <ChakraProvider theme={theme}>

            <Heading mb='4'>Tickets Page</Heading>
            <SimpleGrid spacing={4} columns={["1", "2", "2"]} >

                {tickets?.map(ticket => <Ticket ticket={ticket} key={ticket.ticket_id}/>)}

            </SimpleGrid>


        </ChakraProvider>
    )
}

export default Tickets;