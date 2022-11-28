import React, { useEffect, useState } from 'react';
import { Box, Flex, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { Business } from '../../../shared/interfaces/Business';
import { allBusinessState } from '../../../shared/recoilStates/all-business.state';
import { daysInText } from '../../../components/BusinessRegister/OpenHourSingelRow';

const ManageOpenHours: NextPage = () => {
    const allBusiness = useRecoilValue(allBusinessState);
    const [business, setBusiness] = useState<Business>();
    const router = useRouter();
    const businessUniqueId = router.query.businessId;
    useEffect(() => {
        setBusiness(allBusiness.find((b) => b.shortId === businessUniqueId));
    }, [allBusiness, businessUniqueId]);

    return (
        <Box w="100%" h="100%" mt={20}>
            <Flex w="100%" flexDir="column" fontSize={{ base: 'xs', md: 'md' }} gap={6} justifyContent="center">
                {business?.openHours.map((item) => (
                    <Flex w="100%" h="100%" flexDir="row" justify="center">
                        <Flex flexDir={{ base: 'column', md: 'row' }} gap={3} w="100%">
                            <Flex w={{ base: '100%', md: 'auto' }}>
                                <Text
                                    fontWeight="bold"
                                    textAlign="center"
                                    textDecor="underline"
                                    m="auto"
                                    w={{ base: '100%', md: 28 }}>
                                    {daysInText[item.day]}
                                </Text>
                            </Flex>
                            <Flex w="100%">
                                <Flex flexDir="column" gap={3} w="100%" justifyContent="center">
                                    <Flex w="100%">
                                        <Text fontWeight="bold" textAlign="left" w={{ base: '35%', md: 28 }} m="auto">
                                            First shift:
                                        </Text>
                                        <Flex flexDir={{ base: 'column', md: 'row' }} w="100%" textAlign="center">
                                            {!business?.continuousService ? (
                                                <FormControl
                                                    variant="floating"
                                                    id="street"
                                                    isRequired={!business?.continuousService}>
                                                    <Input
                                                        w="90%"
                                                        type="time"
                                                        borderWidth={2}
                                                        borderColor={
                                                            (item.first_period_close !== '' &&
                                                                item.first_period_close) ||
                                                            business?.continuousService
                                                                ? 'green.400'
                                                                : 'red'
                                                        }
                                                        value={item.first_period_close}
                                                        boxShadow={
                                                            business?.continuousService ? '10px 10px 8px green' : 'none'
                                                        }
                                                        disabled={business?.continuousService}
                                                        // onChange={(e) =>
                                                        //     handleOpenHourInput(
                                                        //         item.day,
                                                        //         OpenHourTypes.FIRST_PERIOD_CLOSE,
                                                        //         e.target.value
                                                        //     )
                                                        // }
                                                    />
                                                    <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                                                        {business?.continuousService ? 'Open' : 'First shift close'}
                                                    </FormLabel>
                                                    <FormHelperText textAlign="left" ml={4}>
                                                        From
                                                    </FormHelperText>
                                                </FormControl>
                                            ) : (
                                                <Box w={20} textAlign="center" color="green" borderRadius="md" p={1}>
                                                    Open
                                                </Box>
                                            )}

                                            {!business?.continuousService ? (
                                                <FormControl
                                                    variant="floating"
                                                    id="street"
                                                    isRequired={!business?.continuousService}>
                                                    <Input
                                                        w="90%"
                                                        type="time"
                                                        borderWidth={2}
                                                        borderColor={
                                                            (item.first_period_close !== '' &&
                                                                item.first_period_close) ||
                                                            business?.continuousService
                                                                ? 'green.400'
                                                                : 'red'
                                                        }
                                                        value={item.first_period_close}
                                                        boxShadow={
                                                            business?.continuousService ? '10px 10px 8px green' : 'none'
                                                        }
                                                        disabled={business?.continuousService}
                                                        // onChange={(e) =>
                                                        //     handleOpenHourInput(
                                                        //         item.day,
                                                        //         OpenHourTypes.FIRST_PERIOD_CLOSE,
                                                        //         e.target.value
                                                        //     )
                                                        // }
                                                    />
                                                    <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                                                        {business?.continuousService ? 'Open' : 'First shift close'}
                                                    </FormLabel>
                                                    <FormHelperText>To</FormHelperText>
                                                </FormControl>
                                            ) : (
                                                <Box
                                                    w={20}
                                                    textAlign="center"
                                                    bg="gray.300"
                                                    color="green"
                                                    borderRadius="md"
                                                    p={1}>
                                                    Open
                                                </Box>
                                            )}
                                        </Flex>
                                    </Flex>
                                    <Flex>
                                        <Text fontWeight="bold" textAlign="left" w={{ base: '35%', md: 28 }} m="auto">
                                            Second shift:
                                        </Text>

                                        <Flex flexDir={{ base: 'column', md: 'row' }} w="100%" textAlign="center">
                                            {!business?.continuousService ? (
                                                <FormControl
                                                    variant="floating"
                                                    id="street"
                                                    isRequired={!business?.continuousService}>
                                                    <Input
                                                        w="90%"
                                                        type="time"
                                                        borderWidth={2}
                                                        borderColor={
                                                            (item.first_period_close !== '' &&
                                                                item.first_period_close) ||
                                                            business?.continuousService
                                                                ? 'green.400'
                                                                : 'red'
                                                        }
                                                        value={item.first_period_close}
                                                        boxShadow={
                                                            business?.continuousService ? '10px 10px 8px green' : 'none'
                                                        }
                                                        disabled={business?.continuousService}
                                                        // onChange={(e) =>
                                                        //     handleOpenHourInput(
                                                        //         item.day,
                                                        //         OpenHourTypes.FIRST_PERIOD_CLOSE,
                                                        //         e.target.value
                                                        //     )
                                                        // }
                                                    />
                                                    <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                                                        {business?.continuousService ? 'Open' : 'First shift close'}
                                                    </FormLabel>
                                                    <FormHelperText textAlign="left" ml={4}>
                                                        From
                                                    </FormHelperText>
                                                </FormControl>
                                            ) : (
                                                <Box w={20} textAlign="center" color="green" borderRadius="md" p={1}>
                                                    Open
                                                </Box>
                                            )}

                                            {!business?.continuousService ? (
                                                <FormControl
                                                    variant="floating"
                                                    id="street"
                                                    isRequired={!business?.continuousService}>
                                                    <Input
                                                        w="90%"
                                                        type="time"
                                                        borderWidth={2}
                                                        borderColor={
                                                            (item.first_period_close !== '' &&
                                                                item.first_period_close) ||
                                                            business?.continuousService
                                                                ? 'green.400'
                                                                : 'red'
                                                        }
                                                        value={item.first_period_close}
                                                        boxShadow={
                                                            business?.continuousService ? '10px 10px 8px green' : 'none'
                                                        }
                                                        disabled={business?.continuousService}
                                                        // onChange={(e) =>
                                                        //     handleOpenHourInput(
                                                        //         item.day,
                                                        //         OpenHourTypes.FIRST_PERIOD_CLOSE,
                                                        //         e.target.value
                                                        //     )
                                                        // }
                                                    />
                                                    <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                                                        {business?.continuousService ? 'Open' : 'First shift close'}
                                                    </FormLabel>
                                                    <FormHelperText>To</FormHelperText>
                                                </FormControl>
                                            ) : (
                                                <Box
                                                    w={20}
                                                    textAlign="center"
                                                    bg="gray.300"
                                                    color="green"
                                                    borderRadius="md"
                                                    p={1}>
                                                    Open
                                                </Box>
                                            )}
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};

export default ManageOpenHours;
