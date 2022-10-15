import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};

const theme = extendTheme({
    config,
    components: {
        Steps,
    },
});

export default theme;
