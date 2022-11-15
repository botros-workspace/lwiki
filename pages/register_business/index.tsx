import React, { useCallback, useEffect, useState } from 'react';
import { Box, Center, Flex, RadioGroup, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
    allFeaturesState,
    allPaymentMethodsState,
    Feature,
    indicatorsResponseState,
    Payment,
} from '../../shared/recoilStates/indicators.state';
// import Axios from '../../axios/api';
import FeatureTemplate from '../../components/FeatureTemplate';
import { axiosInstance } from '../../axios/axiosInstance';
import { useAxios } from '../../shared/hooks/use-axios.hook';
import { useErrorToast } from '../../shared/hooks/use-error-toast.hook';
import { BACKEND_GET_INDICATORS } from '../../shared/constants/endpoints';

const RegisterBusiness: NextPage = () => {
    const setIndicatorsResponseState = useSetRecoilState(indicatorsResponseState);
    const featuresState = useRecoilValue(allFeaturesState);
    const paymentMethodsState = useRecoilValue(allPaymentMethodsState);
    const [allFeatures, setAllFeatures] = useState<Array<Feature>>([]);
    const [allPaymentMethods, setAllPaymentMethods] = useState<Array<Payment>>([]);
    const [selectedFeatures, setSelectedFeatures] = useState<Array<Feature>>([]);
    const { handleGetRequest } = useAxios();
    const errorToast = useErrorToast();

    const fetch = useCallback(async () => {
        try {
            const result: any = await handleGetRequest(axiosInstance, BACKEND_GET_INDICATORS);
            if (result) {
                setIndicatorsResponseState(result);
            }
        } catch (errors: any) {
            if (errors !== undefined) {
                Object.keys(errors).forEach((key, index) => {
                    errorToast(Object.keys(errors)[index], errors[key].toString());
                });
            }
        }
    }, []);
    useEffect(() => {
        setAllFeatures(featuresState);
        setAllPaymentMethods(paymentMethodsState);
    }, [featuresState, paymentMethodsState]);
    useEffect(() => {
        fetch();
    }, [fetch]);

    return (
        <Box h="99vh">
            <Center>
                <Flex flexDir="column">
                    <Flex>Payments</Flex>
                    <Flex flexDir="column">
                        {allPaymentMethods &&
                            allPaymentMethods.map((item) => <Text>{item.name.replace('_', ' ')}</Text>)}
                    </Flex>
                </Flex>
                <Flex flexDir="column">
                    <RadioGroup>
                        <Stack direction="column" gap={4}>
                            {allFeatures &&
                                allFeatures.map((item) => (
                                    <FeatureTemplate
                                        feature={item}
                                        isSelected={selectedFeatures.includes(item)}
                                        selectedFeatures={selectedFeatures}
                                        setSelectedFeatures={setSelectedFeatures}
                                    />
                                ))}
                        </Stack>
                    </RadioGroup>
                </Flex>
                <Flex flexDir="column">
                    <Flex>choosen features</Flex>
                    <Flex flexDir="column">
                        {selectedFeatures && selectedFeatures.map((item) => <Text>{item.feature_type}</Text>)}
                    </Flex>
                </Flex>
            </Center>
        </Box>
    );
};

export default RegisterBusiness;
