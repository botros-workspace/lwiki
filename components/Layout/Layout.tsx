import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../NavBar';
import ProgressBar from '../ProgessBar';
import { useColor } from '../../shared/hooks/use-color.hook';

interface Props {
    children: ReactNode;
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
    const { mainBackground } = useColor();
    return (
        <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(24, 1fr)" bg={mainBackground}>
            <GridItem colSpan={{ base: 2, md: 1 }} h="100vh" pos="sticky" top={0}>
                <NavBar />
            </GridItem>

            <GridItem colSpan={{ base: 22, md: 23 }}>
                <ProgressBar />
                {children}
            </GridItem>
        </Grid>
    );
};

export default Layout;
