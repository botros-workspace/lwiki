import { Flex, FormControl, Input, FormLabel, Text } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { OpenHourTypes } from '../../shared/enum/open-hour-types.enum';
import { OpenHour } from '../../shared/interfaces/OpenHour';

export const daysInText = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
type Props = {
    singelRow: OpenHour;
    handleOpenHourInput: (day: number, shift: OpenHourTypes, value: string) => void;
    continuousService: boolean;
};
const OpenHourSingelRow: FunctionComponent<Props> = ({ singelRow, handleOpenHourInput, continuousService }) => (
    <Flex flexDir={{ base: 'column', lg: 'row' }} justifyContent="space-evenly" w="100%" gap={4}>
        <Flex mt={2} w={{ base: 36, md: 72 }}>
            <Text fontWeight="bold" fontSize={{ base: 'sm', md: 'lg' }} textDecor="underline">
                {daysInText[singelRow.day]}
            </Text>
        </Flex>
        <Flex flexDir={{ base: 'column', md: 'row' }} justifyContent="space-evenly" w="100%" gap={4}>
            <Flex w={{ base: '100%', md: '50%' }}>
                <FormControl variant="floating" isRequired={!continuousService}>
                    <Input
                        w="90%"
                        type="time"
                        value={singelRow.first_period_open}
                        boxShadow={
                            continuousService || singelRow.first_period_open !== undefined
                                ? '10px 10px 8px green'
                                : 'none'
                        }
                        disabled={continuousService}
                        onChange={(e) =>
                            handleOpenHourInput(singelRow.day, OpenHourTypes.FIRST_PERIOD_OPEN, e.target.value)
                        }
                    />
                    <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                        {continuousService ? 'Open' : 'First shift open'}
                    </FormLabel>
                </FormControl>
            </Flex>
            <Flex w={{ base: '100%', md: '50%' }}>
                <FormControl variant="floating" id="street" isRequired={!continuousService}>
                    <Input
                        w="90%"
                        type="time"
                        value={singelRow.first_period_close}
                        boxShadow={
                            continuousService || singelRow.first_period_close !== undefined
                                ? '10px 10px 8px green'
                                : 'none'
                        }
                        disabled={continuousService}
                        onChange={(e) =>
                            handleOpenHourInput(singelRow.day, OpenHourTypes.FIRST_PERIOD_CLOSE, e.target.value)
                        }
                    />
                    <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                        {continuousService ? 'Open' : 'First shift close'}
                    </FormLabel>
                </FormControl>
            </Flex>
        </Flex>
        <Flex flexDir={{ base: 'column', md: 'row' }} justifyContent="space-evenly" w="100%" gap={4}>
            <Flex w={{ base: '100%', md: '50%' }}>
                <FormControl variant="floating" id="street" isRequired={!continuousService}>
                    <Input
                        w="90%"
                        type="time"
                        value={singelRow.second_period_open}
                        boxShadow={
                            continuousService || singelRow.second_period_open !== undefined
                                ? '10px 10px 8px green'
                                : 'none'
                        }
                        disabled={continuousService}
                        onChange={(e) =>
                            handleOpenHourInput(singelRow.day, OpenHourTypes.SECOND_PERIOD_OPEN, e.target.value)
                        }
                    />
                    <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                        {continuousService ? 'Open' : 'Second shift open'}
                    </FormLabel>
                </FormControl>
            </Flex>

            <Flex w={{ base: '100%', md: '50%' }}>
                <FormControl variant="floating" id="street" isRequired={!continuousService}>
                    <Input
                        w="90%"
                        type="time"
                        value={singelRow.second_period_close}
                        boxShadow={
                            continuousService || singelRow.second_period_close !== undefined
                                ? '10px 10px 8px green'
                                : 'none'
                        }
                        disabled={continuousService}
                        onChange={(e) =>
                            handleOpenHourInput(singelRow.day, OpenHourTypes.SECOND_PERIOD_CLOSE, e.target.value)
                        }
                    />
                    <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                        {continuousService ? 'Open' : 'Second shift close'}
                    </FormLabel>
                </FormControl>
            </Flex>
        </Flex>
    </Flex>
);

export default OpenHourSingelRow;
