import React, { useEffect, useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { allBusinessState } from '../../shared/recoilStates/user.state';
import { Business } from '../../shared/models/BusinessModel';

const ManageBusiness: NextPage = () => {
    const businessState = useRecoilValue(allBusinessState);
    const [allBusiness, setallBusiness] = useState<Array<Business>>();
    useEffect(() => {
        setallBusiness(businessState);
        console.log(allBusiness);
    }, [allBusiness, businessState]);

    return (
        <Box w="100%" minH="100%">
            <Center borderWidth={2} borderColor="red">
                {allBusiness &&
                    allBusiness?.map((business) => (
                        <>
                            <Box h={72} w={72}>
                                {business.business_email}
                            </Box>
                            <Box h={72} w={72}>
                                {business.business_type}
                            </Box>
                        </>
                    ))}
            </Center>
        </Box>
    );
};

export default ManageBusiness;
