import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Flex, RadioGroup, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useLoadingProgressBar } from '../../shared/hooks/use-loading-progressBar.hook';
import { allFeaturesState, Feature, featuresResponseState } from '../../shared/recoilStates/features.state';
import FeatureTemplate from '../../components/FeatureTemplate';

const RegisterBusiness: NextPage = () => {
    const { showLoadingBar, hideLoadingBar } = useLoadingProgressBar();
    const setFeaturesResponseState = useSetRecoilState(featuresResponseState);
    const featuresState = useRecoilValue(allFeaturesState);
    const [allFeatures, setAllFeatures] = useState<Array<Feature>>([]);
    const [selectedFeatures, setSelectedFeatures] = useState<Array<Feature>>([]);
    const handleFeatureClick = (feature: Feature) => {
        const index = selectedFeatures.findIndex((f) => f.id === feature.id);
        if (index === -1) {
            setSelectedFeatures([...selectedFeatures, feature]);
        } else if (index > -1) {
            selectedFeatures.splice(index, 1);
            setSelectedFeatures([...selectedFeatures]);
        }
    };
    useEffect(() => {
        setAllFeatures(featuresState);
    }, [featuresState]);
    useEffect(() => {
        showLoadingBar();
        (async () => {
            await axios.get('http://127.0.0.1:8000/get_features/').then((res) => {
                setFeaturesResponseState(res.data);
            });
        })();
        hideLoadingBar();
    }, [hideLoadingBar, setFeaturesResponseState, showLoadingBar]);
    return (
        <Box borderWidth={2} borderColor="red" h="99vh">
            <Center>
                <Flex flexDir="column">
                    <RadioGroup>
                        <Stack direction="column">
                            {allFeatures &&
                                allFeatures?.map((item) => (
                                    <Button onClick={() => handleFeatureClick(item)}>
                                        <FeatureTemplate
                                            name={item.feature_type}
                                            isSelected={selectedFeatures.includes(item)}
                                        />
                                    </Button>
                                ))}
                        </Stack>
                    </RadioGroup>
                </Flex>
                <Flex flexDir="column">
                    <Flex>choosen features</Flex>
                    <Flex flexDir="column">
                        {selectedFeatures && selectedFeatures?.map((item) => <Text>{item.feature_type}</Text>)}
                    </Flex>
                </Flex>
            </Center>
        </Box>
    );
};

export default RegisterBusiness;
