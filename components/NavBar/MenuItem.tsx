import { Button, Icon, Text, Grid, GridItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useCallback } from 'react';
import { IconType } from 'react-icons/lib';
import { useColor } from '../../shared/hooks/use-color-library.hook';

type Props = {
    route: string;
    icon: IconType;
    text: string;
    closeModal: () => void;
    iconColor?: string;
};

const MenuItem: FunctionComponent<Props> = ({ route, icon, text, closeModal, iconColor }) => {
    const { textColor, textOnHover } = useColor();
    const router = useRouter();

    const changeRoute = useCallback(() => {
        router.push(`${route}`, undefined, { shallow: true });
        closeModal();
    }, [closeModal, route, router]);

    return (
        <Button
            bg="none"
            _hover={{ color: textColor }}
            _focus={{ background: 'none' }}
            _active={{ background: 'none' }}
            color={router.pathname === route ? textColor : textOnHover}
            variant="outline"
            size={{ base: 'sm', md: 'lg' }}
            onClick={() => {
                changeRoute();
            }}>
            <Grid
                fontSize={{ base: 'xs', md: 'md' }}
                w={{ base: 32, md: 44 }}
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(8, 1fr)">
                <GridItem colSpan={1}>
                    <Icon as={icon} color={iconColor} fontSize={{ base: 'sm', md: '2xl' }} />
                </GridItem>

                <GridItem colSpan={7} textAlign="center">
                    <Text mt={{ base: 0, md: 1 }} fontWeight="bold">
                        {text}
                    </Text>
                </GridItem>
            </Grid>
        </Button>
    );
};
export default MenuItem;
