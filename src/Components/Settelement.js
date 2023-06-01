import React from 'react';
import {
    Tag,
    TagLabel
} from '@chakra-ui/react';

const Settelement = ({ settled }) => {
    return (
        <>
            {
                settled ?
                    <Tag ize='lg' colorScheme='green' borderRadius='full'>
                        <TagLabel >Settled</TagLabel>
                    </Tag>
                    :
                    <Tag ize='lg' colorScheme='red' borderRadius='full'>
                        <TagLabel >Waiting</TagLabel>
                    </Tag>
            }
        </>

    )
}

export default Settelement;