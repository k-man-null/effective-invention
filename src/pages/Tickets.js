
import theme from "../theme";
import {
    ChakraProvider,
    Heading,
    SimpleGrid

} from '@chakra-ui/react';
import Ticket from "./Ticket";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../urls";
import Loading from "../Components/Loading";

function Tickets() {

    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${baseUrl}/tickets`, { withCredentials: true })
            .then((response) => {

                setTickets(response.data.tickets)
                setLoading(false);

            })
            .catch((error) => {
                setLoading(false);
            })
    }
        , [])

    return (
        <ChakraProvider theme={theme}>

            <Heading mb='4'>Your Tickets</Heading>
            {loading ? <Loading /> :
                <SimpleGrid spacing={4} columns={["1", "2", "2"]} >

                    {tickets?.map(ticket => <Ticket ticket={ticket} key={ticket.ticket_id} />)}

                </SimpleGrid>
            }

        </ChakraProvider>
    )
}

export default Tickets;