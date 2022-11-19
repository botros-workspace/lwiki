import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import BusinessRegisterContainer from '../../components/BusinessRegister/BusinessRegisterContainer';

const RegisterBusiness: NextPage = () => (
    <Box minH="99vh">
        <Center>
            <BusinessRegisterContainer />
        </Center>
    </Box>
);

export default RegisterBusiness;
//  <Flex flexDir="column">
//                     <Flex>Payments</Flex>
//                     <Flex flexDir="column">
//                         {allPaymentMethods &&
//                             allPaymentMethods.map((item) => <Text>{item.name.replace('_', ' ')}</Text>)}
//                     </Flex>
//                 </Flex>
//                 <Flex flexDir="column">
//                     <RadioGroup>
//                         <Stack direction="column" gap={4}>
//                             {allFeatures &&
//                                 allFeatures.map((item) => (
//                                     <FeatureTemplate
//                                         feature={item}
//                                         isSelected={selectedFeatures.includes(item)}
//                                         selectedFeatures={selectedFeatures}
//                                         setSelectedFeatures={setSelectedFeatures}
//                                     />
//                                 ))}
//                         </Stack>
//                     </RadioGroup>
//                 </Flex>
//                 <Flex flexDir="column">
//                     <Flex>choosen features</Flex>
//                     <Flex flexDir="column">
//                         {selectedFeatures && selectedFeatures.map((item) => <Text>{item.feature_type}</Text>)}
//                     </Flex>
//                 </Flex>
// const fetch = useCallback(async () => {
//     try {
//         const result: any = await handleGetRequest(axiosInstance, BACKEND_GET_INDICATORS);
//         if (result) {
//             setIndicatorsResponseState(result);
//         }
//     } catch (errors: any) {
//         if (errors !== undefined) {
//             Object.keys(errors).forEach((key, index) => {
//                 errorToast(Object.keys(errors)[index], errors[key].toString());
//             });
//         }
//     }
// }, []);
// useEffect(() => {
//     setAllFeatures(featuresState);
//     setAllPaymentMethods(paymentMethodsState);
// }, [featuresState, paymentMethodsState]);
// useEffect(() => {
//     fetch();
// }, [fetch]);
