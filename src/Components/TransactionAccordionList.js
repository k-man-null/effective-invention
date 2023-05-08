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

const TransactionAccordionList = ({ transactions }) => {
    return (
        <Accordion allowToggle>
            {transactions.map(transaction => (
                <AccordionItem key={transaction.transaction_id}>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Transaction ID: {transaction.transaction_id}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Table size='sm' variant='striped' colorScheme='teal'>
                            <Tbody>
                                <Tr>
                                    <Th>Amount(KSH)</Th>
                                    <Td>{transaction.value}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Date</Th>
                                    <Td>{format(new Date(transaction.created_at), 'yyyy-MM-dd HH:mm:ss')}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Narrative</Th>
                                    <Td>{transaction.narrative}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Running Balance</Th>
                                    <Td>{transaction.running_balance}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default TransactionAccordionList;
