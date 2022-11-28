import { Flex, Text, Box, SimpleGrid } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { FeatureName } from '../../../shared/enum/feature-types.enum';
import { capatalizeAndRemoveUnderScore } from '../../../shared/functions';

type Props = { selectedFeatures: Array<FeatureName> };

const FeaturesResult: FunctionComponent<Props> = ({ selectedFeatures }) => (
    <Flex h="100%" w="100%" flexDir="column" gap={{ base: 8, md: 12 }} mt={{ base: 8, md: 12 }}>
        <Flex w="100%" flexDir="column" textAlign="center">
            <Text fontWeight="bold" fontSize={{ base: 'md', md: '2xl' }} m={1}>
                {selectedFeatures.length} Selected {selectedFeatures.length === 1 ? 'feature' : 'features'}
            </Text>
            <Box h={1} bg="tomato" w="100%" />
        </Flex>

        <SimpleGrid justifyItems="center" gap={4} minChildWidth={{ base: '80px', md: '120px' }} w="80%" m="auto">
            {selectedFeatures.length > 0 ? (
                selectedFeatures.map((feature) => (
                    <Text
                        fontWeight="semibold"
                        fontSize={{ base: 'sm', md: 'xl' }}
                        borderWidth={2}
                        borderRadius="lg"
                        w={{ base: 24, md: 32 }}
                        h={{ base: 12, md: 16 }}
                        m="auto"
                        textAlign="center">
                        {capatalizeAndRemoveUnderScore(feature)}
                    </Text>
                ))
            ) : (
                <Text w="100%" fontWeight="bold" textColor="red" fontSize={{ base: 'xs', md: 'xl' }} textAlign="center">
                    Adding features will help your business to reach more customer!
                </Text>
            )}
        </SimpleGrid>
    </Flex>
);

export default FeaturesResult;
