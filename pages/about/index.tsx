import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';

const About: NextPage = () => (
    <Box borderWidth={2} borderColor="red" w="100%" minH="100%">
        <Center>This is information about us</Center>
    </Box>
);

export default About;
