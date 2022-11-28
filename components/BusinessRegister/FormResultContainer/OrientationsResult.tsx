import { Flex, Text, Box, SimpleGrid } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { OrientationName } from '../../../shared/enum/orientation-types.enum';
import { capatalizeAndRemoveUnderScore } from '../../../shared/functions';

type Props = { selectedOrientations: Array<OrientationName> };

const OrientationsResult: FunctionComponent<Props> = ({ selectedOrientations }) => (
    <Flex h="100%" w="100%" flexDir="column" gap={{ base: 8, md: 12 }} mt={{ base: 8, md: 12 }}>
        <Flex w="100%" flexDir="column" textAlign="center">
            <Text fontWeight="bold" fontSize={{ base: 'md', md: '2xl' }} m={1}>
                {selectedOrientations.length} Selected{' '}
                {selectedOrientations.length === 1 ? 'orientation' : 'orientations'}
            </Text>
            <Box h={1} bg="tomato" w="100%" />
        </Flex>

        <SimpleGrid justifyItems="center" gap={4} minChildWidth={{ base: '80px', md: '120px' }} w="80%" m="auto">
            {selectedOrientations.length > 0 ? (
                selectedOrientations.map((orientation) => (
                    <Text
                        fontWeight="semibold"
                        fontSize={{ base: 'sm', md: 'xl' }}
                        borderWidth={2}
                        borderRadius="lg"
                        w={{ base: 24, md: 32 }}
                        h={{ base: 12, md: 16 }}
                        m="auto"
                        p="auto"
                        textAlign="center">
                        {capatalizeAndRemoveUnderScore(orientation)}
                    </Text>
                ))
            ) : (
                <Text w="100%" fontWeight="bold" textColor="red" fontSize={{ base: 'xs', md: 'xl' }} textAlign="center">
                    Required! adding orientations will help your business to reach customer who are searching for that
                    type of products!
                </Text>
            )}
        </SimpleGrid>
    </Flex>
);

export default OrientationsResult;
