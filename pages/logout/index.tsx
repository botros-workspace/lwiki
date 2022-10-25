import React, { useEffect } from 'react';
import { Box, Button, Center, VStack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import axios from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Link from 'next/link';
import {
    BusinessOwnerData,
    businessOwnerDataState,
    ConsumerData,
    consumerDataState,
    UserInfo,
    userInfoState,
} from '../../shared/recoilStates/user.state';
import { useLoadingProgressBar } from '../../shared/hooks/use-loading-progressBar.hook';
import { useErrorToast } from '../../shared/hooks/use-error-toast.hook';
import { UserType } from '../../shared/enum/user-type.enum';

const Logout: NextPage = () => {
    const { showLoadingBar, hideLoadingBar } = useLoadingProgressBar();
    const [userInfo, setUserInfo] = useRecoilState<UserInfo>(userInfoState);
    const setConsumerData = useSetRecoilState<ConsumerData>(consumerDataState);
    const setBusinessOwnerData = useSetRecoilState<BusinessOwnerData>(businessOwnerDataState);

    const errorToast = useErrorToast();

    useEffect(() => {
        showLoadingBar();
        (async () => {
            if (userInfo.userId !== undefined && userInfo.userType !== undefined) {
                await axios
                    .post('http://127.0.0.1:8000/logout/', {
                        user_type: userInfo.userType.toString(),
                        user_id: userInfo.userId,
                    })
                    .then(() => {
                        if (userInfo.userType === 'CONSUMER') {
                            setConsumerData({
                                name: undefined,
                                image: undefined,
                                saved_business: undefined,
                                saved_products: undefined,
                                purchased_recipes: undefined,
                                consumer_reservations: undefined,
                                reviews: undefined,
                                allergies: undefined,
                                phone_number: undefined,
                                search_history: undefined,
                                scanned_resturants: undefined,
                                creation_date: undefined,
                            });
                        }
                        if (userInfo.userType === 'BUSINESS_OWNER') {
                            setBusinessOwnerData({ all_business: undefined, all_reservations: undefined });
                        }
                        setUserInfo({ userType: UserType.UNDEFINED_USER, userId: undefined });
                    })
                    .catch((error) => {
                        Object.keys(error.response.data.errors).forEach((key, index) => {
                            errorToast(Object.keys(error.response.data.errors)[index], error.response.data.errors[key]);
                        });
                        setUserInfo({ userType: UserType.UNDEFINED_USER, userId: undefined });
                    });
            }
        })();
        hideLoadingBar();
    }, [
        errorToast,
        hideLoadingBar,
        setBusinessOwnerData,
        setConsumerData,
        setUserInfo,
        showLoadingBar,
        userInfo.userId,
        userInfo.userType,
    ]);

    return (
        <Box w="100%" minH="100%">
            <Center w="100%" h="100vh" m="auto">
                <VStack>
                    <Text fontSize="3xl">Logout</Text>
                    <Link href="/">
                        <Button p={8} borderRadius="full" colorScheme="purple" fontSize="4xl">
                            Go Home
                        </Button>
                    </Link>
                </VStack>
            </Center>
        </Box>
    );
};

export default Logout;
