import React, { FunctionComponent } from 'react';
import { Box, Button, Center, Text, Flex, Input } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { UserType } from '../../shared/enum/user-type.enum';

type Props = {
    setUserType: (userType: UserType) => void;
};

const ChooseBusinessType: FunctionComponent<Props> = ({ setUserType }) => (
    // const businessTypesValues = Object.keys(BusinessType);

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
            <Flex flexDir="column">
                <Flex flexDir="column" w={72}>
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
                <Center>
                    <Button w="50%" mt={8} colorScheme="twitter">
                        Register
                    </Button>
                </Center>
            </Flex>
        </Center>
    </Box>
);
export default ChooseBusinessType;
