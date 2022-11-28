import React, { useEffect, useState } from 'react';
import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { Business } from '../../../shared/interfaces/Business';
import { allBusinessState } from '../../../shared/recoilStates/all-business.state';
import FeatureTemplate from '../../../components/FeatureTemplate';
import { FeatureName } from '../../../shared/enum/feature-types.enum';

const ManageFeatures: NextPage = () => {
    const allBusiness = useRecoilValue(allBusinessState);
    const [business, setBusiness] = useState<Business>();
    const router = useRouter();
    const businessUniqueId = router.query.businessId;
    const allFeatures: Array<FeatureName> = Object.values(FeatureName).filter(
        (feature) => feature !== FeatureName.UNDEFINED_FEATURE
    );
    useEffect(() => {
        setBusiness(allBusiness.find((b) => b.shortId === businessUniqueId));
    }, [allBusiness, businessUniqueId]);

    return (
        <Box w="100%" h="100%">
            <Center w="100%" h="100%">
                {business && (
                    <SimpleGrid
                        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                        my={8}
                        columnGap={8}
                        rowGap={8}
                        w="100%"
                        h="100%"
                        justifyItems="center">
                        {allFeatures.map((feature) => (
                            <FeatureTemplate feature={feature} isSelected={business.features.includes(feature)} />
                        ))}
                    </SimpleGrid>
                )}
            </Center>
        </Box>
    );
};

export default ManageFeatures;
