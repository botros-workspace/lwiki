import React, { FunctionComponent } from 'react';
import { Flex, Text, Icon } from '@chakra-ui/react';

type Props = {
    name: string;
    isSelected: boolean;
};
const FeatureTemplate: FunctionComponent<Props> = ({ name, isSelected }) => (
    <Flex w={44} gap={2} h={6} cursor="pointer">
        <Flex h="100%">
            <Icon m="auto" color={isSelected ? 'red' : 'whiteAlpha.800'} />
        </Flex>
        <Flex h="100%" alignContent="center">
            <Text m="auto" fontSize={{ base: 'xs', md: 'sm' }}>
                {name}
            </Text>
        </Flex>
    </Flex>
);
export default FeatureTemplate;
