import React from 'react';
import { TableContainer, Table,Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { format } from 'date-fns'; // Import date-fns format function


const TransactionList = ({ transactions }) => {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal' size='sm'>
                <Thead>
                    <Tr>
                        <Th>Transaction ID</Th>
                        <Th>Amount(KSH)</Th>
                        <Th>Date</Th>
                        <Th>Narrative</Th>
                        <Th>Running Balance</Th>

                    </Tr>
                </Thead>
                <Tbody>
                    {transactions.map(transaction => (
                        <Tr key={transaction.transaction_id}>
                            <Td>{transaction.transaction_id}</Td>
                            <Td>{transaction.value}</Td>
                            <Td>{format(new Date(transaction.created_at), 'yyyy-MM-dd HH:mm:ss')}</Td> {/* Format created_at date */}
                            <Td>{transaction.narrative}</Td>
                            <Td>{transaction.running_balance}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TransactionList;
