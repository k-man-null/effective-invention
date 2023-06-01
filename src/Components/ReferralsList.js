import React from 'react';
import {
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import { format } from 'date-fns'; 
import Settelement from './Settelement';

function timestampValue(referral) {

    return referral.timestamp._seconds * 1000 + referral.timestamp._nanoseconds / 1000000;
}

const ReferralsList = ({ referrals }) => {

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal' size='sm'>
                <Thead>
                    <Tr>
                        <Th>Code</Th>
                        <Th>Customer</Th>
                        <Th>GameID</Th>
                        <Th>Tickets</Th>
                        <Th>Amount</Th>
                        <Th>Settled</Th>
                        <Th>Time</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {referrals.map((referral) => (
                        <Tr key={referral.commission_id}>
                            <Td>{referral.code}</Td>
                            <Td>{referral.customer}</Td>
                            <Td>{referral.game_id}</Td>
                            <Td>{referral.number_of_tickets}</Td>
                            <Td>{referral.amount}</Td>

                            <Td>
                                <Settelement settled={referral.settled}/>
                            </Td>
                            <Td>{format(new Date(timestampValue(referral)), 'yyyy-MM-dd HH:mm:ss')}</Td> {/* Format created_at date */}
    
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default ReferralsList;