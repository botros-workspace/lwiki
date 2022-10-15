import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../NavBar';

interface Props {
    children: ReactNode;
}

export const Layout: FunctionComponent<Props> = ({ children }) => (
    <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(24, 1fr)">
        <GridItem colSpan={{ base: 2, md: 1 }} h="100vh" pos="sticky" top={0}>
            <NavBar />
        </GridItem>

        <GridItem colSpan={{ base: 22, md: 23 }}>{children}</GridItem>
    </Grid>
);

export default Layout;
