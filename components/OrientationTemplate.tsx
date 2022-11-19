import React, { FunctionComponent, useCallback } from 'react';
import { Flex, Text, Icon, Box } from '@chakra-ui/react';
import { BsCheck2All } from 'react-icons/bs';
import { AiOutlineStop } from 'react-icons/ai';
import { capatalizeAndRemoveUnderScore } from '../shared/functions';
import { OrientationName } from '../shared/enum/orientation-types.enum';

type Props = {
    orientation: OrientationName;
    isSelected: boolean;
    selectedOrientations: OrientationName[];
    setSelectedOrientations: (orientation: OrientationName[]) => void;
};
const OrientationTemplate: FunctionComponent<Props> = ({
    orientation,
    isSelected,
    selectedOrientations,
    setSelectedOrientations,
}) => {
    const handleFeatureClick = useCallback(
        (selectedOrientation: OrientationName) => {
            const index = selectedOrientations.findIndex((o) => o === orientation);
            if (index === -1) {
                setSelectedOrientations([...selectedOrientations, selectedOrientation]);
            } else if (index > -1) {
                selectedOrientations.splice(index, 1);
                setSelectedOrientations([...selectedOrientations]);
            }
        },
        [orientation, selectedOrientations, setSelectedOrientations]
    );

    return (
        <Box h={6} cursor="pointer">
            <Flex
                w={48}
                gap={2}
                borderRadius="full"
                borderWidth={2}
                borderColor={isSelected ? 'green.300' : 'gray.400'}
                onClick={() => handleFeatureClick(orientation)}>
                <Flex h="100%">
                    <Icon
                        as={isSelected ? BsCheck2All : AiOutlineStop}
                        m="auto"
                        fontSize={{ base: 'lg', md: '2xl' }}
                        color={isSelected ? 'green.300' : 'gray.400'}
                    />
                </Flex>
                <Flex h="100%" w="100%">
                    <Text m="auto" fontWeight="bold" fontSize={{ base: 'xs', md: 'sm' }}>
                        {capatalizeAndRemoveUnderScore(orientation)}
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};
export default OrientationTemplate;
