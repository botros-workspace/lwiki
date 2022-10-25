import React, { useEffect, useState } from 'react';
import { Box, Button, Center, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import Router from 'next/router';
import { UserType } from '../../shared/enum/user-type.enum';
import ConsumerRegisterForm from '../../components/Registeration/ConsumerRegisterForm';
import { useColor } from '../../shared/hooks/use-color-library.hook';
import { userInfoState } from '../../shared/recoilStates/user.state';
import BusinessOwnerRegisterForm from '../../components/Registeration/BusinessOwnerRegisterForm';

const Register: NextPage = () => {
    const [userType, setUserType] = useState<UserType>(UserType.UNDEFINED_USER);
    const { primaryColor, textOnHover } = useColor();
    const user = useRecoilValue(userInfoState);
    useEffect(() => {
        if (user.userType !== UserType.UNDEFINED_USER) {
            Router.push('/');
        }
    }, [user]);
    if (userType === UserType.CONSUMER) {
        return <ConsumerRegisterForm setUserType={setUserType} />;
    }
    if (userType === UserType.BUSINESS_OWNER) {
        return <BusinessOwnerRegisterForm setUserType={setUserType} />;
    }

    return (
        <Box w="100%" minH="100%">
            <Center w="100%" h="100vh" m="auto">
                <VStack spacing={6} w={['60%', '40%', '20%']}>
                    <Button
                        color={primaryColor}
                        bg={textOnHover}
                        variant="outline"
                        borderWidth={2}
                        fontSize={{ base: 'sm', lg: 'lg' }}
                        borderRadius="full"
                        w="100%"
                        onClick={() => {
                            setUserType(UserType.CONSUMER);
                        }}>
                        User
                    </Button>
                    <Button
                        color={primaryColor}
                        bg={textOnHover}
                        variant="outline"
                        borderWidth={2}
                        fontSize={{ base: 'sm', lg: 'lg' }}
                        borderRadius="full"
                        w="100%"
                        onClick={() => {
                            setUserType(UserType.BUSINESS_OWNER);
                        }}>
                        Business owner
                    </Button>
                </VStack>
            </Center>
        </Box>
    );
};

export default Register;
