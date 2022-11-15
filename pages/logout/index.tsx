import React from 'react';
import { Box, Button, Center, VStack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Logout: NextPage = () => (
    <Box w="100%" minH="100%">
        <Center w="100%" h="100vh" m="auto">
            <VStack>
                <Text fontSize="3xl">Logout</Text>
                <Link href="/">
                    <Button p={8} borderRadius="full" colorScheme="purple" fontSize="4xl">
                        Go Home
                    </Button>
                </Link>
            </VStack>
        </Center>
    </Box>
);

export default Logout;
