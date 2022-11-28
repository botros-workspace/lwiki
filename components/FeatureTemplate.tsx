import React, { FunctionComponent, useCallback } from 'react';
import { Flex, Text, Icon, Box } from '@chakra-ui/react';
import { BsCheck2All } from 'react-icons/bs';
import { AiOutlineStop } from 'react-icons/ai';
import { FeatureName } from '../shared/enum/feature-types.enum';
import { capatalizeAndRemoveUnderScore } from '../shared/functions';

type Props = {
    feature: FeatureName;
    isSelected: boolean;
    selectedFeatures?: FeatureName[];
    setSelectedFeatures?: (features: FeatureName[]) => void;
};
const FeatureTemplate: FunctionComponent<Props> = ({ feature, isSelected, selectedFeatures, setSelectedFeatures }) => {
    const handleFeatureClick = useCallback(
        (selectedFeature: FeatureName) => {
            if (!selectedFeatures || !setSelectedFeatures) return;
            const index = selectedFeatures.findIndex((f) => f === feature);
            if (index === -1) {
                setSelectedFeatures([...selectedFeatures, selectedFeature]);
            } else if (index > -1) {
                selectedFeatures.splice(index, 1);
                setSelectedFeatures([...selectedFeatures]);
            }
        },
        [feature, selectedFeatures, setSelectedFeatures]
    );

    return (
        <Box h={6} cursor="pointer">
            <Flex
                w={52}
                gap={2}
                borderRadius="full"
                borderWidth={2}
                borderColor={isSelected ? 'green.300' : 'gray.400'}
                onClick={() => handleFeatureClick(feature)}>
                <Flex h="100%">
                    <Icon
                        as={isSelected ? BsCheck2All : AiOutlineStop}
                        m="auto"
                        fontSize={{ base: 'lg', md: '2xl' }}
                        color={isSelected ? 'green.300' : 'gray.400'}
                    />
                </Flex>
                <Flex h="100%" w="100%" m="auto">
                    <Text m="auto" fontWeight="semibold" fontSize={{ base: 'xs', md: 'sm' }}>
                        {capatalizeAndRemoveUnderScore(feature)}
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};
export default FeatureTemplate;
