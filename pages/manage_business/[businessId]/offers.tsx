import React, { useEffect, useState } from 'react';
import { Box, Button, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { Business } from '../../../shared/interfaces/Business';
import { allBusinessState } from '../../../shared/recoilStates/user.state';
import { MANAGE_ALL_BUSINESS_PAGE } from '../../../shared/constants/endpoints';

const ManageOffers: NextPage = () => {
    const allBusiness = useRecoilValue(allBusinessState);
    const [business, setBusiness] = useState<Business>();
    const router = useRouter();
    const businessUniqueId = router.query.businessId;
    useEffect(() => {
        setBusiness(allBusiness.find((b) => b.businessId === businessUniqueId));
    }, [allBusiness, businessUniqueId]);

    return (
        <Box w="100%" h="100%">
            <Center>Offers{business?.businessEmail}</Center>
        </Box>
    );
};

export default ManageOffers;
