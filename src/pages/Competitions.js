import "@fontsource/poppins";
import theme from "../theme";
import {
    ChakraProvider,
    Heading,
    SimpleGrid
} from '@chakra-ui/react';
import CompetitionCard from "../Components/CompetitionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../urls";

function Competitions() {

    const [competitions, setCompetitions] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/games/all`,{ withCredentials: true } )
            .then((response) => {

                
                setCompetitions([...response.data])

            })
            .catch((error) => {
            
                alert(error.message);
            })
    }

        , [])

        console.log(competitions)

    return (
        <ChakraProvider theme={theme}>

            <Heading mb='4'>Competitions page</Heading>
            <SimpleGrid spacing={4} columns={["1","2","2"]} >

                { competitions.map(competition => <CompetitionCard key={competition.game_id} competition={competition} />)}
                
                
            </SimpleGrid>


        </ChakraProvider>
    )
}

export default Competitions;