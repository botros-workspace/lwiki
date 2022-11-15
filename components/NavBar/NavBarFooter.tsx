import { useColorMode, Flex, Icon, Avatar } from '@chakra-ui/react';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { BsLightbulb } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { BASE_URL } from '../../shared/constants/endpoints';
import { UserType } from '../../shared/enum/user-type.enum';
import { ConsumerData, consumerDataState, UserInfo, userInfoState } from '../../shared/recoilStates/user.state';
import TooltipTemplate from '../Shared/TooltipTemplate';

const NavBarFooter: FunctionComponent = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [mountedColor, setColor] = useState<string>(colorMode);
    const [mountedConsumer, setConsumer] = useState<ConsumerData>();
    const [mountedUserInfo, setUserInfo] = useState<UserInfo>();
    const consumer = useRecoilValue(consumerDataState);
    const userInfo = useRecoilValue(userInfoState);
    useEffect(() => {
        setColor(colorMode);
        setConsumer(consumer);
        setUserInfo(userInfo);
    }, [colorMode, consumer, userInfo]);
    return (
        <>
            <Flex m="auto">
                <TooltipTemplate
                    label={mountedColor === 'light' ? 'Dark Mode' : 'Light Mode'}
                    placement="right"
                    shouldWrapChildren
                    hasArrow>
                    <Icon
                        onClick={toggleColorMode}
                        aria-label="Toggle"
                        maxW="100%"
                        ml={1}
                        mb={1}
                        fontSize={{ base: 'lg', md: 'xl' }}
                        cursor="pointer">
                        {mountedColor === 'light' ? <MdDarkMode /> : <BsLightbulb />}
                    </Icon>
                </TooltipTemplate>
            </Flex>
            {mountedUserInfo?.userType !== UserType.BUSINESS_OWNER && (
                <Flex m="auto" maxW="100%">
                    <Avatar
                        size={{ base: 'xs', md: 'sm' }}
                        src={
                            mountedConsumer?.image
                                ? `${BASE_URL}${mountedConsumer.image}`
                                : 'https://bit.ly/dan-abramov'
                        }
                    />
                </Flex>
            )}
        </>
    );
};
export default NavBarFooter;
