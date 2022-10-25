import React, { useEffect, useState } from 'react';
import { Center, Box, Input, Stack, Button, InputGroup, InputRightElement, Icon, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import axios from 'axios';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Router from 'next/router';
import { useErrorToast } from '../../shared/hooks/use-error-toast.hook';
import { useLoadingProgressBar } from '../../shared/hooks/use-loading-progressBar.hook';
import {
    BusinessOwnerData,
    businessOwnerDataState,
    consumerDataState,
    UserInfo,
    userInfoState,
} from '../../shared/recoilStates/user.state';
import { UserType } from '../../shared/enum/user-type.enum';

const Login: NextPage = () => {
    const [child, setChild] = useState<string | undefined>(undefined);
    const [email, setEmail] = useState<string>();
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [password, setPassword] = useState<string>();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const errorToast = useErrorToast();
    const { showLoadingBar, hideLoadingBar } = useLoadingProgressBar();
    const [user, setUser] = useRecoilState<UserInfo>(userInfoState);
    const setConsumerData = useSetRecoilState(consumerDataState);
    const setBusinessOwnerData = useSetRecoilState<BusinessOwnerData>(businessOwnerDataState);
    useEffect(() => {
        if (user.userType !== UserType.UNDEFINED_USER) {
            Router.push('/');
        }
    }, [user]);
    useEffect(() => {
        setChild(
            'http://localhost:8000/media/pictures/Django_REST_Framework_Full_Course_For_Beginners___Build_REST_API_With_Django_6CkM5uM.mp4'
        );
    }, [child]);
    const handleLogin = async () => {
        showLoadingBar();
        setEmailError('');
        setPasswordError('');
        axios
            .post('http://127.0.0.1:8000/login/', {
                email,
                password,
            })
            .then((response) => {
                setUser(response.data.user_type);
                if (response.data.user_type === 'CONSUMER') {
                    setUser({ userType: UserType.CONSUMER, userId: response.data.consumer.consumer_id });
                    setConsumerData(response.data.consumer);
                }
                if (response.data.user_type === 'BUSINESS_OWNER') {
                    setUser({
                        userType: UserType.BUSINESS_OWNER,
                        userId: response.data.business_owner.business_owner_id,
                    });
                    setBusinessOwnerData({
                        all_reservations: response.data.business_owner.all_reservations,
                        all_business: response.data.all_business,
                    });
                }
            })
            .catch((error) => {
                Object.keys(error.response.data.errors).forEach((key, index) => {
                    if (error.response.data.errors[key].toString() === 'Incorrect password!') {
                        setPasswordError(error.response.data.errors[key]);
                    } else if (
                        error.response.data.errors[key].toString() === "The provided email doesn't match any user!"
                    ) {
                        setEmailError('Incorrect Email!');
                    } else errorToast(Object.keys(error.response.data.errors)[index], error.response.data.errors[key]);
                });
            })
            .finally(() => hideLoadingBar());
    };
    return (
        <Box w="100%" minH="100%">
            <Center w="100%" h="100vh" m="auto">
                <Stack spacing={3} w={{ base: '80%', md: '25%' }}>
                    <Stack>
                        <Box>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                borderRadius="full"
                                variant="filled"
                                placeholder="user@email.com"
                                fontSize={{ base: 'xs', md: 'md' }}
                            />
                            {emailError && (
                                <Text fontSize={{ base: 'xs', md: 'md' }} color="red" ml={4}>
                                    {emailError}
                                </Text>
                            )}
                        </Box>
                        <Box>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    borderRadius="full"
                                    variant="filled"
                                    placeholder="Password"
                                    fontSize={{ base: 'xs', md: 'md' }}
                                />
                                <InputRightElement>
                                    <Icon
                                        _hover={{ color: 'red' }}
                                        cursor="pointer"
                                        mt={1}
                                        fontSize={{ base: 'md', md: 'lg' }}
                                        onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                                    </Icon>
                                </InputRightElement>
                            </InputGroup>
                            {passwordError && (
                                <Text fontSize={{ base: 'xs', md: 'md' }} ml={4} color="red">
                                    {passwordError}
                                </Text>
                            )}
                        </Box>
                    </Stack>
                    <Button
                        colorScheme="twitter"
                        onClick={() => handleLogin()}
                        mt={4}
                        size={{ base: 'xs', md: 'md' }}
                        borderRadius="full"
                        alignSelf="center"
                        w="50%">
                        Log in
                    </Button>
                </Stack>
            </Center>
        </Box>
    );
};

export default Login;
/*
{
    {child !== undefined && (
    <Box
        w={{ base: '70%', md: '50%' }}
        h={{ base: '70%', md: '50%' }}
        borderWidth={2}
        borderColor="red">
        <video autoPlay preload="metadata" width="100%" height="100%">
            <source src={child} />
            <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
        </video>
    </Box>
)} 
} */
