import React, { FunctionComponent } from 'react';
import { Box, Button, Center, HStack, Text, Select, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { BusinessType } from '../../shared/enum/business-type.enum';
import { UserType } from '../../shared/enum/user-type.enum';

type Props = {
    setUserType: (userType: UserType) => void;
    setBusinessType: (businessType: BusinessType) => void;
};

const ChooseBusinessType: FunctionComponent<Props> = ({ setUserType, setBusinessType }) => {
    const businessTypesValues = Object.keys(BusinessType);

    return (
        <Box w="100%" h="100vh" m="auto">
            <Center h="100%">
                <Box w={{ base: '90%', md: '40%' }}>
                    <Flex flexDir="column">
                        <Flex>
                            <Button
                                onClick={() => {
                                    setUserType(UserType.UNDEFINED_USER);
                                }}
                                float="left"
                                variant="gohst"
                                _active={{ background: 'none' }}
                                mb={4}>
                                <ChevronLeftIcon fontSize={{ base: '2xl', md: '3xl' }} />
                            </Button>
                        </Flex>
                        <Flex alignSelf="center">
                            <HStack>
                                <Text
                                    fontWeight="bold"
                                    fontSize={{ base: 'xs', sm: 'md' }}
                                    w={{ base: '75%', sm: '65%' }}>
                                    Choose business:
                                </Text>
                                <Select
                                    placeholder="eg: Beach bar"
                                    size={{ base: 'xs', sm: 'md' }}
                                    borderRadius="full"
                                    onChange={(e) => setBusinessType(e.target.value as BusinessType)}>
                                    {businessTypesValues.map(
                                        (type) =>
                                            type !== BusinessType.UNDEFINED_BUSINESS && (
                                                <option value={type}>{type.replace('_', ' ')}</option>
                                            )
                                    )}
                                </Select>
                            </HStack>
                        </Flex>
                    </Flex>
                </Box>
            </Center>
        </Box>
    );
};
export default ChooseBusinessType;
