import { Text, Flex, FormControl, FormLabel, Icon, Input } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import { MdAlternateEmail } from 'react-icons/md';
import { UseFormRegister, FieldValues } from 'react-hook-form';

type Props = { register: UseFormRegister<FieldValues>; errors: any };

const LinksContainer: FunctionComponent<Props> = ({ register, errors }) => (
    <Flex w="100%" h="100%" flexDir="column" justifyContent="center" gap={6} my={6}>
        <Flex mx="auto" gap={{ base: 2, md: 6 }} h={{ base: 14, md: 16 }}>
            <Icon as={FaFacebookSquare} fontSize={{ base: 'xl', md: '3xl' }} mt={{ base: 2, md: 1 }} />
            <FormControl variant="floating">
                <Input w={{ base: '100%', sm: 72, md: 96 }} type="text" {...register('facebook')} />
                <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                    Facebook link
                </FormLabel>
                {errors.facebook?.message && (
                    <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                        {errors.facebook?.message}
                    </Text>
                )}
            </FormControl>
        </Flex>

        <Flex mx="auto" gap={{ base: 2, md: 6 }} h={{ base: 14, md: 16 }}>
            <Icon as={BsInstagram} fontSize={{ base: 'xl', md: '3xl' }} mt={{ base: 2, md: 1 }} />
            <FormControl variant="floating">
                <Input w={{ base: '100%', sm: 72, md: 96 }} type="text" {...register('instagram')} />
                <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                    Instagram link
                </FormLabel>
                {errors.instagram?.message && (
                    <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                        {errors.instagram?.message}
                    </Text>
                )}
            </FormControl>
        </Flex>
        <Flex mx="auto" gap={{ base: 2, md: 6 }} h={{ base: 14, md: 16 }}>
            <Icon as={SiGooglemaps} fontSize={{ base: 'xl', md: '3xl' }} mt={{ base: 2, md: 1 }} />
            <FormControl variant="floating">
                <Input w={{ base: '100%', sm: 72, md: 96 }} type="text" {...register('google_maps')} />
                <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                    Google maps link
                </FormLabel>
                {errors.google_maps?.message && (
                    <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                        {errors.google_maps?.message}
                    </Text>
                )}
            </FormControl>
        </Flex>
        <Flex mx="auto" gap={{ base: 2, md: 6 }} h={{ base: 14, md: 16 }}>
            <Icon as={FaTwitter} fontSize={{ base: 'xl', md: '3xl' }} mt={{ base: 2, md: 1 }} />
            <FormControl variant="floating">
                <Input w={{ base: '100%', sm: 72, md: 96 }} type="text" {...register('twitter')} />
                <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                    Twitter link
                </FormLabel>
                {errors.twitter?.message && (
                    <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                        {errors.twitter?.message}
                    </Text>
                )}
            </FormControl>
        </Flex>
        <Flex mx="auto" gap={{ base: 2, md: 6 }} h={{ base: 14, md: 16 }}>
            <Icon as={MdAlternateEmail} fontSize={{ base: 'xl', md: '3xl' }} mt={{ base: 2, md: 1 }} />
            <FormControl variant="floating">
                <Input w={{ base: '100%', sm: 72, md: 96 }} type="text" {...register('website')} />
                <FormLabel rounded="full" fontSize={{ base: 'sm', xl: 'lg' }}>
                    Own website link
                </FormLabel>
                {errors.website?.message && (
                    <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                        {errors.website?.message}
                    </Text>
                )}
            </FormControl>
        </Flex>
    </Flex>
);

export default LinksContainer;
