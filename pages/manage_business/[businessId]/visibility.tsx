import React, { useEffect, useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { Business } from '../../../shared/interfaces/Business';
import { allBusinessState } from '../../../shared/recoilStates/user.state';

const ManageVisibility: NextPage = () => {
    const allBusiness = useRecoilValue(allBusinessState);
    const [business, setBusiness] = useState<Business>();
    const router = useRouter();
    const businessUniqueId = router.query.businessId;
    useEffect(() => {
        setBusiness(allBusiness.find((b) => b.businessId === businessUniqueId));
    }, [allBusiness, businessUniqueId]);

    return (
        <Box w="100%" h="100%">
            <Center w="100%" h="100%">
                Test{business?.businessEmail}
            </Center>
        </Box>
    );
};

export default ManageVisibility;
