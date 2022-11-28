import { Flex, Icon } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { AiOutlineStop } from 'react-icons/ai';
import { BsCheck2All } from 'react-icons/bs';
import { OpenHourTypes } from '../../shared/enum/open-hour-types.enum';
import { OpenHour } from '../../shared/interfaces/OpenHour';
import OpenHourSingelRow from './OpenHourSingelRow';

type Props = {
    openHours: Array<OpenHour>;
    handleOpenHourInput: (day: number, shift: OpenHourTypes, value: string) => void;
    continuousService: boolean;
    setContinuousService: () => void;
};

const OpenHoursContainer: FunctionComponent<Props> = ({
    openHours,
    handleOpenHourInput,
    continuousService,
    setContinuousService,
}) => (
    <Flex flexDir="column" w="100%" h="100%" gap={6} my={{ base: 4, md: 8 }}>
        <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            justifyContent="space-evenly"
            w={{ base: '80%', md: '50%' }}
            gap={4}
            m="auto"
            my={4}>
            <Flex
                flexDir="row"
                justifyContent="flex-start"
                w="90%"
                h={10}
                m="auto"
                borderWidth={1}
                borderRadius="md"
                boxShadow={continuousService ? '10px 10px 12px green' : '10px 10px 12px red'}
                onClick={setContinuousService}
                cursor="pointer">
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
        <Flex flexDir="column" w="100%" gap={4}>
            {openHours.map((singelItem) => (
                <OpenHourSingelRow
                    singelRow={singelItem}
                    handleOpenHourInput={handleOpenHourInput}
                    continuousService={continuousService}
                />
            ))}
        </Flex>
    </Flex>
);

export default OpenHoursContainer;
