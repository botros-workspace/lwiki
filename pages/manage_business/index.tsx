import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Flex, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import Router from 'next/router';
import { allBusinessState } from '../../shared/recoilStates/user.state';
import { Business } from '../../shared/interfaces/Business';
import BusinessPreviewContainer from '../../components/BusinessManage/AllBusinessPreview/BusinessPreviewContainer';
import { REGISTER_BUSINESS_PAGE } from '../../shared/constants/endpoints';
import { useLoadingProgressBar } from '../../shared/hooks/use-loading-progressBar.hook';

const ManageBusiness: NextPage = () => {
    const businessState = useRecoilValue(allBusinessState);
    const [allBusiness, setallBusiness] = useState<Array<Business>>();
    const { showLoadingBar, hideLoadingBar } = useLoadingProgressBar();
    useEffect(() => {
        setallBusiness(businessState);
        console.log(allBusiness);
    }, [allBusiness, businessState]);
    useEffect(() => {
        if (!allBusiness) showLoadingBar();
        else hideLoadingBar();
    }, [allBusiness, hideLoadingBar, showLoadingBar]);

    return (
        <Box w="100%" h="100%">
            <Center w="100%" h="100%">
                <Flex flexDir="column" my={16} gap={12}>
                    {allBusiness?.length ? (
                        allBusiness?.map((business) => <BusinessPreviewContainer business={business} />)
                    ) : (
                        <VStack gap={8}>
                            <Text align="center" fontWeight="bold">
                                NO REGISTERED BUSINESS TO SHOW!
                            </Text>
                            <Button colorScheme="linkedin" onClick={() => Router.push(REGISTER_BUSINESS_PAGE)}>
                                Register a business
                            </Button>
                        </VStack>
                    )}
                </Flex>
            </Center>
        </Box>
    );
};

export default ManageBusiness;
