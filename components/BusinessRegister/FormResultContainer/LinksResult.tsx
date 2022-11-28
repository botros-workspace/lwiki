import { Flex, Box, Text, Icon, Center } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { FieldValues } from 'react-hook-form';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import TooltipTemplate from '../../Shared/TooltipTemplate';

type Props = {
    errors: any;
    watchAllFields: FieldValues;
};

const LinksResult: FunctionComponent<Props> = ({ errors, watchAllFields }) => (
    <Flex h="100%" w="100%" flexDir="column" gap={{ base: 2, md: 12 }} mt={{ base: 4, md: 12 }}>
        <Flex w="100%" flexDir="column" textAlign="center">
            <Text fontWeight="bold" fontSize={{ base: 'md', md: '2xl' }} m={1}>
                Links
            </Text>
            <Box h={1} bg="tomato" w="100%" />
        </Flex>
        <Flex flexDir="column" gap={{ base: 4, md: 6 }} mt={4} justifyContent="center">
            <TooltipTemplate label="Facebook link" hasArrow placement="top" shouldWrapChildren={false}>
                <Flex
                    flexDir={{ base: 'column', lg: 'row' }}
                    gap={4}
                    justifyContent="center"
                    m="auto"
                    borderWidth={2}
                    borderRadius="lg"
                    p={2}>
                    <Center>
                        <Icon as={FaFacebookSquare} fontSize={{ base: 'xl', md: '3xl' }} />
                    </Center>

                    {errors.facebook?.message ? (
                        <Text
                            fontWeight="bold"
                            textColor="red"
                            fontSize={{ base: 'xs', md: 'xl' }}
                            w={{ base: 44, sm: 72, md: 96 }}
                            textAlign="center">
                            {errors.facebook?.message}
                        </Text>
                    ) : (
                        <Text textAlign="center" fontSize={{ base: 'xs', md: 'xl' }} w={{ base: 44, sm: 72, md: 96 }}>
                            {watchAllFields?.facebook}
                        </Text>
                    )}
                </Flex>
            </TooltipTemplate>
            <TooltipTemplate label="Instagram link" hasArrow placement="top" shouldWrapChildren={false}>
                <Flex
                    flexDir={{ base: 'column', lg: 'row' }}
                    gap={4}
                    justifyContent="center"
                    m="auto"
                    borderWidth={2}
                    borderRadius="lg"
                    p={2}>
                    <Center>
                        <Icon as={BsInstagram} fontSize={{ base: 'xl', md: '3xl' }} />
                    </Center>

                    {errors.instagram?.message ? (
                        <Text
                            fontWeight="bold"
                            textColor="red"
                            fontSize={{ base: 'xs', md: 'xl' }}
                            w={{ base: 44, sm: 72, md: 96 }}
                            textAlign="center">
                            {errors.instagram?.message}
                        </Text>
                    ) : (
                        <Text textAlign="center" fontSize={{ base: 'xs', md: 'xl' }} w={{ base: 44, sm: 72, md: 96 }}>
                            {watchAllFields?.instagram}
                        </Text>
                    )}
                </Flex>
            </TooltipTemplate>
            <TooltipTemplate label="Google maps link" hasArrow placement="top" shouldWrapChildren={false}>
                <Flex
                    flexDir={{ base: 'column', lg: 'row' }}
                    gap={4}
                    justifyContent="center"
                    m="auto"
                    borderWidth={2}
                    borderRadius="lg"
                    p={2}>
                    <Center>
                        <Icon as={SiGooglemaps} fontSize={{ base: 'xl', md: '3xl' }} />
                    </Center>

                    {errors.google_maps?.message ? (
                        <Text
                            fontWeight="bold"
                            textColor="red"
                            fontSize={{ base: 'xs', md: 'xl' }}
                            w={{ base: 44, sm: 72, md: 96 }}
                            textAlign="center">
                            {errors.google_maps?.message}
                        </Text>
                    ) : (
                        <Text textAlign="center" fontSize={{ base: 'xs', md: 'xl' }} w={{ base: 44, sm: 72, md: 96 }}>
                            {watchAllFields?.google_maps}
                        </Text>
                    )}
                </Flex>
            </TooltipTemplate>
            <TooltipTemplate label="Twitter link" hasArrow placement="top" shouldWrapChildren={false}>
                <Flex
                    flexDir={{ base: 'column', lg: 'row' }}
                    gap={4}
                    justifyContent="center"
                    m="auto"
                    borderWidth={2}
                    borderRadius="lg"
                    p={2}>
                    <Center>
                        <Icon as={FaTwitter} fontSize={{ base: 'xl', md: '3xl' }} />
                    </Center>

                    {errors.twitter?.message ? (
                        <Text
                            fontWeight="bold"
                            textColor="red"
                            fontSize={{ base: 'xs', md: 'xl' }}
                            w={{ base: 44, sm: 72, md: 96 }}
                            textAlign="center">
                            {errors.twitter?.message}
                        </Text>
                    ) : (
                        <Text textAlign="center" fontSize={{ base: 'xs', md: 'xl' }} w={{ base: 44, sm: 72, md: 96 }}>
                            {watchAllFields?.twitter}
                        </Text>
                    )}
                </Flex>
            </TooltipTemplate>
            <TooltipTemplate label="Website link" hasArrow placement="top" shouldWrapChildren={false}>
                <Flex
                    flexDir={{ base: 'column', lg: 'row' }}
                    gap={4}
                    justifyContent="center"
                    m="auto"
                    borderWidth={2}
                    borderRadius="lg"
                    p={2}>
                    <Center>
                        <Icon as={MdAlternateEmail} fontSize={{ base: 'xl', md: '3xl' }} />
                    </Center>

                    {errors.website?.message ? (
                        <Text
                            fontWeight="bold"
                            textColor="red"
                            fontSize={{ base: 'xs', md: 'xl' }}
                            w={{ base: 44, sm: 72, md: 96 }}
                            textAlign="center">
                            {errors.website?.message}
                        </Text>
                    ) : (
                        <Text textAlign="center" fontSize={{ base: 'xs', md: 'xl' }} w={{ base: 44, sm: 72, md: 96 }}>
                            {watchAllFields?.website}
                        </Text>
                    )}
                </Flex>
            </TooltipTemplate>
        </Flex>
    </Flex>
);

export default LinksResult;
