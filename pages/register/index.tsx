import React, { useState } from 'react';
import { Box, Button, Center, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { UserType } from '../../shared/enum/user-type.enum';
import { BusinessType } from '../../shared/enum/business-type.enum';
import ChooseBusinessType from '../../components/Registeration/ChooseBusinessType';
import ConsumerRegisterForm from '../../components/Registeration/ConsumerRegisterForm';
import { useColor } from '../../shared/hooks/use_color_library.hook';
import BusinessFormsContainer from '../../components/Registeration/BusinessFormsContainer';

const Register: NextPage = () => {
    const [userType, setUserType] = useState<UserType>(UserType.UNDEFINED_USER);
    const [businessType, setBusinessType] = useState<BusinessType>(BusinessType.UNDEFINED_BUSINESS);
    const { primaryColor, textOnHover } = useColor();

    if (userType === UserType.CONSUMER && businessType === BusinessType.UNDEFINED_BUSINESS) {
        return <ConsumerRegisterForm setUserType={setUserType} />;
    }
    if (userType === UserType.OWNER && businessType === BusinessType.UNDEFINED_BUSINESS) {
        return <ChooseBusinessType setUserType={setUserType} setBusinessType={setBusinessType} />;
    }
    if (userType === UserType.OWNER && businessType !== BusinessType.UNDEFINED_BUSINESS) {
        return <BusinessFormsContainer setBusinessType={setBusinessType} />;
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
                            setUserType(UserType.OWNER);
                        }}>
                        Business owner
                    </Button>
                </VStack>
            </Center>
        </Box>
    );
};

export default Register;
