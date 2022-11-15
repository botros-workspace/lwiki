import React, { FunctionComponent, useCallback } from 'react';
import { Flex, Text, Icon, Box } from '@chakra-ui/react';
import { Feature } from '../shared/recoilStates/indicators.state';

type Props = {
    feature: Feature;
    isSelected: boolean;
    selectedFeatures: Feature[];
    setSelectedFeatures: (features: Feature[]) => void;
};
const FeatureTemplate: FunctionComponent<Props> = ({ feature, isSelected, selectedFeatures, setSelectedFeatures }) => {
    const handleFeatureClick = useCallback(
        (selectedFeature: Feature) => {
            const index = selectedFeatures.findIndex((f) => f.id === feature.id);
            if (index === -1) {
                setSelectedFeatures([...selectedFeatures, selectedFeature]);
            } else if (index > -1) {
                selectedFeatures.splice(index, 1);
                setSelectedFeatures([...selectedFeatures]);
            }
        },
        [feature.id, selectedFeatures, setSelectedFeatures]
    );

    return (
        <Box h={6} cursor="pointer">
            <Flex
                w={44}
                gap={2}
                borderRadius="full"
                borderWidth={isSelected ? 1 : 0}
                borderColor="gray.400"
                onClick={() => handleFeatureClick(feature)}>
                <Flex h="100%">
                    <Icon m="auto" fontSize={{ base: 'xs', md: '2xl' }} color={isSelected ? 'red' : 'blue.400'} />
                </Flex>
                <Flex h="100%">
                    <Text m="auto" fontSize={{ base: 'xs', md: 'sm' }}>
                        {feature.feature_type}
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};
export default FeatureTemplate;
