import { useColorModeValue } from '@chakra-ui/react';

export type colors = {
    primaryColor: string;
    secondaryColor: string;
    backgroundGrayColor: string;
    textColor: string;
    textOnHover: string;
    mainBackground: string;
};

export function useColor(): colors {
    return {
        primaryColor: useColorModeValue('blue.800', 'whiteAlpha.800'),
        secondaryColor: 'orange.400',
        backgroundGrayColor: useColorModeValue('gray.400', 'gray.600'),
        textColor: useColorModeValue('blue.800', 'whiteAlpha.800'),
        textOnHover: useColorModeValue('white', 'gray.800'),
        mainBackground: useColorModeValue('whiteAlpha.100', 'gray.800'),
    };
}
