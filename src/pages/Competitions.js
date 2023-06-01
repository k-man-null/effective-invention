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

function Competitions({ type }) {

    const [competitions, setCompetitions] = useState([]);

    useEffect(() => {
        let url;

        const fetchData = async () => {

            console.log("I got called")

            try {
                setCompetitions([]);
                if (type === "mylive") {
                    url = `${baseUrl}/games/my/live`;
                } else if (type === "myended") {
                    url = `${baseUrl}/games/my/ended`;
                } else {
                    url = `${baseUrl}/games/all`;
                }

                const response = await axios.get(url, { withCredentials: true });
                setCompetitions([...response.data]);
            } catch (error) {
                console.log(error)
                //alert(error.message);
            }
        }

        fetchData();

    }, [type]);

    return (
        <ChakraProvider theme={theme}>

            <Heading mb='4'>{type} Competitions page</Heading>
            <SimpleGrid spacing={4} columns={["1", "2", "2"]} >

                {competitions.map(competition => <CompetitionCard key={competition.game_id} competition={competition} />)}

            </SimpleGrid>

        </ChakraProvider>
    )
}

export default Competitions;