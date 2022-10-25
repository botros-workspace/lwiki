import React, { FunctionComponent } from 'react';
import { Box, Button, Center, Flex, Input, Text } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { UserType } from '../../shared/enum/user-type.enum';

type Props = {
    setUserType: (userType: UserType) => void;
};

const ConsumerRegisterForm: FunctionComponent<Props> = ({ setUserType }) => (
    <Box w="100%" h="100%">
        <Flex>
            <Flex flexDir="column">
                <Button
                    variant="gohst"
                    w="100%"
                    _active={{ background: 'none' }}
                    onClick={() => {
                        setUserType(UserType.UNDEFINED_USER);
                    }}>
                    <ArrowLeftIcon float="left" fontSize={{ base: 'xs', md: 'xl' }} />
                </Button>
            </Flex>
        </Flex>

        <Center h="95vh">
            <Flex flexDir={{ base: 'column', md: 'row' }}>
                <Flex flexDir="column" mr={{ base: 0, md: 8 }} w={72}>
                    <Flex flexDir="column">
                        <Text fontSize="xl" fontWeight="semibold" w="100%">
                            Email:
                        </Text>
                        <Input placeholder="user@email.com" type="email" />
                    </Flex>

                    <Flex flexDir="column">
                        <Text fontSize="xl" fontWeight="semibold" w="100%">
                            Password:
                        </Text>
                        <Input placeholder="Password" type="password" />
                    </Flex>

                    <Flex flexDir="column">
                        <Text fontSize="xl" fontWeight="semibold" w="100%">
                            Repeat Password:
                        </Text>
                        <Input placeholder="Password" type="password" />
                    </Flex>
                </Flex>
                <Flex flexDir="column" ml={{ base: 0, md: 8 }} w={72}>
                    <Flex flexDir="column">
                        <Text fontSize="xl" fontWeight="semibold" w={28}>
                            Name:
                        </Text>
                        <Input placeholder="user@email.com" type="text" />
                    </Flex>
                    <Flex flexDir="column">
                        <Text fontSize="xl" fontWeight="semibold" w={28}>
                            Image:
                        </Text>
                        <Input placeholder="user@email.com" type="file" />
                    </Flex>
                    <Flex>
                        <Button w="100%" mt={7} colorScheme="twitter">
                            Register
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Center>
    </Box>
);
export default ConsumerRegisterForm;
/* <VStack>
                <Center w="100%" h="100vh" m="auto">
                    <VStack>
                        <HStack>
                            <Text fontSize="xl" fontWeight="semibold">
                                Email:
                            </Text>
                            <Input placeholder="user@email.com" type="email" />
                        </HStack>
                        <HStack>
                            <Text fontSize="xl" fontWeight="semibold">
                                Password:
                            </Text>
                            <Input placeholder="user@email.com" type="password" />
                        </HStack>
                        <HStack>
                            <Text fontSize="xl" fontWeight="semibold">
                                Repeat Password:
                            </Text>
                            <Input placeholder="user@email.com" type="password" />
                        </HStack>
                        <HStack>
                            <Text fontSize="xl" fontWeight="semibold">
                                Name:
                            </Text>
                            <Input placeholder="user@email.com" type="text" />
                        </HStack>
                        <HStack>
                            <Text fontSize="xl" fontWeight="semibold">
                                Image:
                            </Text>
                            <Input placeholder="user@email.com" type="file" />
                        </HStack>
                    </VStack> 
                         </Center>
            </VStack>
                    */
