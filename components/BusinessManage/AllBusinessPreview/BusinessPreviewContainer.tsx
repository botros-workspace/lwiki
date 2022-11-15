import { Grid, GridItem, Image } from '@chakra-ui/react';
import router from 'next/router';
import React, { FunctionComponent, useCallback } from 'react';
import { BASE_URL } from '../../../shared/constants/endpoints';
import { Business } from '../../../shared/interfaces/Business';
import ShortcutMenuContainer from './ShortcutMenuContainer';
import PreviewInformationContainer from './PreviewInformationContainer';
import { useColor } from '../../../shared/hooks/use-color.hook';

type Props = {
    business: Business;
};

const BusinessPreviewContainer: FunctionComponent<Props> = ({ business }) => {
    const colors = useColor();
    const changeRoute = useCallback(() => {
        router.push(`/manage_business/${business.businessId}/general_information`, undefined, { shallow: true });
    }, [business.businessId]);
    return (
        <Grid
            templateRows={{ base: 'repeat(16, 1fr)', md: 'repeat(1, 1fr)' }}
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(24, 1fr)' }}
            cursor="pointer"
            w={{ base: 52, sm: 72, md: 'xl' }}
            h={{ base: 72, sm: 80, md: 52 }}
            transition="top 0.5s ease"
            _hover={{
                shadow: 'xl',
                transform: 'translateY(-10px) translateX(-10px)',
                transitionDuration: '0.5s',
                boxShadow: 'dark-lg',
            }}
            borderRadius="md"
            borderWidth={2}
            onClick={changeRoute}>
            <GridItem rowSpan={{ base: 4, md: 1 }} colSpan={{ base: 1, md: 5 }}>
                <Image
                    h={{ base: '80%', md: '100%' }}
                    mx="auto"
                    mt={{ base: 2, md: 0 }}
                    borderRadius={{ base: 'full', md: 'md' }}
                    src={`${BASE_URL}${business.logo}`}
                />
            </GridItem>
            <GridItem rowSpan={{ base: 10, md: 1 }} colSpan={{ base: 1, md: 16 }} overflowY="scroll">
                <PreviewInformationContainer business={business} />
            </GridItem>
            <GridItem
                rowSpan={{ base: 2, md: 1 }}
                colSpan={{ base: 1, md: 3 }}
                overflowY="scroll"
                // boxShadow=" 0px 0px 20px 0px white inset"
                bg={colors.businessPreviewShortcutMenuBG}>
                <ShortcutMenuContainer business={business} />
            </GridItem>
        </Grid>
    );
};

export default BusinessPreviewContainer;
