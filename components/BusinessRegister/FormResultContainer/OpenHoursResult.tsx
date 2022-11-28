import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { AiOutlineStop } from 'react-icons/ai';
import { BsCheck2All } from 'react-icons/bs';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { TiWarningOutline } from 'react-icons/ti';
import { OpenHour } from '../../../shared/interfaces/OpenHour';
import TooltipTemplate from '../../Shared/TooltipTemplate';
import { daysInText } from '../OpenHourSingelRow';

type Props = {
    openHours: Array<OpenHour>;
    continuousService: boolean;
    isComplete: boolean;
};

const OpenHoursResult: FunctionComponent<Props> = ({ openHours, continuousService, isComplete }) => (
    <Flex h="100%" w="100%" mx="auto" flexDir="column" gap={{ base: 2, md: 12 }} mt={{ base: 4, md: 12 }}>
        <Flex w="100%" flexDir="column" textAlign="center">
            <Flex justifyContent="center" gap={2}>
                <Flex>
                    <Text fontWeight="bold" fontSize={{ base: 'md', md: '2xl' }} m={1}>
                        Open hours
                    </Text>
                </Flex>

                <Flex>
                    {isComplete ? (
                        <TooltipTemplate label="Complete" hasArrow placement="bottom" shouldWrapChildren>
                            <Icon
                                m="auto"
                                mt={2}
                                as={IoCheckmarkDoneCircleOutline}
                                fontSize={{ base: 'xl', md: '3xl' }}
                                color="green.400"
                            />
                        </TooltipTemplate>
                    ) : (
                        <TooltipTemplate label="Not complete" hasArrow placement="bottom" shouldWrapChildren>
                            <Icon as={TiWarningOutline} fontSize={{ base: 'xl', md: '3xl' }} color="red" mt={1} />
                        </TooltipTemplate>
                    )}
                </Flex>
            </Flex>
            <Box h={1} bg="tomato" w="100%" />
        </Flex>
        <Flex my={6}>
            <Flex
                flexDir="row"
                justifyContent="flex-start"
                w={{ base: '80%', md: '40%' }}
                h={10}
                m="auto"
                borderWidth={1}
                borderRadius="md"
                boxShadow={continuousService ? '10px 10px 12px green' : '10px 10px 12px red'}>
                <Flex fontWeight="bold" m="auto" fontSize={{ base: 'xs', md: 'md' }}>
                    Are you open 24/7?
                </Flex>
                <Flex m="auto">
                    <Icon
                        color={continuousService ? 'green.400' : 'red'}
                        as={continuousService ? BsCheck2All : AiOutlineStop}
                        fontSize={{ base: 'xl', md: '3xl' }}
                    />
                </Flex>
            </Flex>
        </Flex>
        <Flex w="100%" flexDir="column" fontSize={{ base: 'xs', md: 'md' }} gap={6}>
            {openHours.map((item) => (
                <Flex w="100%" h="100%" justifyContent="center" flexDir="row">
                    <Flex flexDir={{ base: 'column', md: 'row' }} gap={3}>
                        <Flex w="100%">
                            <Text
                                fontWeight="bold"
                                textAlign="center"
                                textDecor="underline"
                                m="auto"
                                w={{ base: '100%', md: 28 }}>
                                {daysInText[item.day]}
                            </Text>
                        </Flex>
                        <Flex>
                            <Flex flexDir={{ base: 'column', lg: 'row' }} gap={3}>
                                <Flex>
                                    <Text fontWeight="bold" textAlign="left" w={{ base: '60%', md: 28 }}>
                                        First shift:
                                    </Text>
                                    {!continuousService ? (
                                        <Box
                                            w={20}
                                            textAlign="center"
                                            borderRadius="md"
                                            p={1}
                                            color={
                                                item.first_period_open !== undefined && item.first_period_open !== ''
                                                    ? 'black'
                                                    : 'red'
                                            }
                                            fontSize={{ base: 'xx-small', md: 'xs' }}>
                                            {item.first_period_open !== undefined && item.first_period_open !== ''
                                                ? item.first_period_open
                                                : 'Required'}
                                        </Box>
                                    ) : (
                                        <Box w={20} textAlign="center" color="green" borderRadius="md" p={1}>
                                            Open
                                        </Box>
                                    )}

                                    {!continuousService ? (
                                        <Box
                                            w={20}
                                            textAlign="center"
                                            borderRadius="md"
                                            bg="gray.300"
                                            p={1}
                                            color={
                                                item.first_period_close !== undefined && item.first_period_close !== ''
                                                    ? 'black'
                                                    : 'red'
                                            }
                                            fontSize={{ base: 'xx-small', md: 'xs' }}>
                                            {item.first_period_close !== undefined && item.first_period_close !== ''
                                                ? item.first_period_close
                                                : 'Required'}
                                        </Box>
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
                                <Flex>
                                    <Text fontWeight="bold" textAlign="left" w={{ base: '60%', md: 28 }}>
                                        Second shift:
                                    </Text>

                                    {!continuousService ? (
                                        <Box
                                            w={20}
                                            textAlign="center"
                                            borderRadius="md"
                                            p={1}
                                            color={
                                                item.second_period_open !== undefined && item.second_period_open !== ''
                                                    ? 'black'
                                                    : 'red'
                                            }
                                            fontSize={{ base: 'xx-small', md: 'xs' }}>
                                            {item.second_period_open !== undefined && item.second_period_open !== ''
                                                ? item.second_period_open
                                                : 'Required'}
                                        </Box>
                                    ) : (
                                        <Box w={20} textAlign="center" color="green" borderRadius="md" p={1}>
                                            Open
                                        </Box>
                                    )}

                                    {!continuousService ? (
                                        <Box
                                            w={20}
                                            textAlign="center"
                                            borderRadius="md"
                                            p={1}
                                            bg="gray.300"
                                            color={
                                                item.second_period_close !== undefined &&
                                                item.second_period_close !== ''
                                                    ? 'black'
                                                    : 'red'
                                            }
                                            fontSize={{ base: 'xx-small', md: 'xs' }}>
                                            {item.second_period_close !== undefined && item.second_period_close !== ''
                                                ? item.second_period_close
                                                : 'Required'}
                                        </Box>
                                    ) : (
                                        <Box
                                            w={20}
                                            textAlign="center"
                                            color="green"
                                            bg="gray.300"
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
            ))}
        </Flex>
    </Flex>
);

export default OpenHoursResult;
