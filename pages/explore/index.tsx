import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Expolre: NextPage = () => (
    <Grid h="98%" templateRows="repeat(3, 1fr)" templateColumns="repeat(5, 1fr)" gap={2} m={1}>
        <GridItem rowSpan={3} colSpan={1} borderWidth={2} borderRadius="lg" borderColor="gray.600" />
        <GridItem colSpan={2} borderWidth={2} borderRadius="lg" borderColor="gray.600" />
        <GridItem colSpan={2} borderWidth={2} borderRadius="lg" borderColor="gray.600" />
        <GridItem colSpan={4} borderWidth={2} borderRadius="lg" borderColor="gray.600" />
        <GridItem colSpan={2} borderWidth={2} borderRadius="lg" borderColor="gray.600" />
        <GridItem colSpan={2} borderWidth={2} borderRadius="lg" borderColor="gray.600" />
    </Grid>
);

export default Expolre;
