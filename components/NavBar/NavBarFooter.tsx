import { useColorMode, Flex, Icon, Avatar, Tooltip } from '@chakra-ui/react';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { BsLightbulb } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { BASE_URL } from '../../shared/endpoints';
import { ConsumerData, consumerDataState } from '../../shared/recoilStates/user.state';

const NavBarFooter: FunctionComponent = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const consumer = useRecoilValue(consumerDataState);
    const [mountedConsumer, setMounterConsumer] = useState<ConsumerData>();

    useEffect(() => setMounterConsumer(consumer), [consumer]);
    return (
        <Flex flexDir="column" justifyContent="space-between" mb={1} maxW="100%">
            <Flex m="auto">
                <Tooltip label={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'} placement="top" shouldWrapChildren>
                    <Icon
                        onClick={toggleColorMode}
                        aria-label="Toggle"
                        maxW="100%"
                        ml={1}
                        mb={1}
                        fontSize={{ base: 'lg', md: 'xl' }}
                        cursor="pointer">
                        {colorMode === 'light' ? <MdDarkMode /> : <BsLightbulb />}
                    </Icon>
                </Tooltip>
            </Flex>
            <Flex m="auto">
                <Avatar
                    size={{ base: 'xs', md: 'sm' }}
                    src={consumer?.image ? `${BASE_URL}${consumer.image}` : 'https://bit.ly/dan-abramov'}
                />
            </Flex>
        </Flex>
    );
};
export default NavBarFooter;
