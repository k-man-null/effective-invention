import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Table,
    Tbody,
    Td,
    Th,
    Tr
} from "@chakra-ui/react";
import { format } from 'date-fns';
import Settelement from "./Settelement";

function timestampValue(referral) {

    return referral.timestamp._seconds * 1000 + referral.timestamp._nanoseconds / 1000000;
}


const ReferralsAccordionList = ({ referrals }) => {

    return (
        <Accordion allowToggle>
            {referrals.map((referral) => (

                <AccordionItem key={referral.commission_id}>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            DATE: {format(new Date(timestampValue(referral)), 'yyyy-MM-dd HH:mm:ss')}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Table size='sm' variant='striped' colorScheme='teal'>
                            <Tbody>
                                <Tr>
                                    <Th>CODE</Th>
                                    <Td>{referral.code}</Td>
                                </Tr>
                                <Tr>
                                    <Th>CUSTOMER</Th>
                                    <Td>{referral.customer}</Td>
                                </Tr>
                                <Tr>
                                    <Th>GAMEID</Th>
                                    <Td>{referral.game_id}</Td>
                                </Tr>
                                <Tr>
                                    <Th>TICKETS</Th>
                                    <Td>{referral.number_of_tickets}</Td>
                                </Tr>
                                <Tr>
                                    <Th>AMOUNT</Th>
                                    <Td>{referral.amount}</Td>
                                </Tr>
                                <Tr>
                                    <Th>SETTLED</Th>
                                    <Td><Settelement settled={referral.settled} /></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default ReferralsAccordionList;
