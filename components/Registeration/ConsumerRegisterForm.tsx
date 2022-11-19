import React, { FunctionComponent, useCallback, useState } from 'react';
import { Box, Button, Center, Image, Grid, GridItem, Flex, Text, VisuallyHidden, Input } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Router from 'next/router';
import { UserType } from '../../shared/enum/user-type.enum';
import { ConsumerRegisterFormAttribute } from '../../shared/interfaces/ConsumerRegisterFormAttribute';
import { consumerResgisterFormSchema } from '../../shared/yup/consumerResgisterFormSchema';
import { axiosInstance } from '../../axios/axiosInstance';
import { useAxios } from '../../shared/hooks/use-axios.hook';
import { useErrorToast } from '../../shared/hooks/use-error-toast.hook';
import { BACKEND_REGISTER_PAGE } from '../../shared/constants/endpoints';
import TooltipTemplate from '../Shared/TooltipTemplate';

type Props = {
    setUserType: (userType: UserType) => void;
};

const ConsumerRegisterForm: FunctionComponent<Props> = ({ setUserType }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ConsumerRegisterFormAttribute>({ resolver: yupResolver(consumerResgisterFormSchema) });
    const [selectedImage, setSelectedImage] = useState<File>();
    const { handlePostRequest } = useAxios();
    const errorToast = useErrorToast();

    const onSubmitHandler = useCallback(
        async (data: ConsumerRegisterFormAttribute) => {
            const formData = new FormData();
            formData.append('email', data.email);
            formData.append('password', data.password);
            formData.append('user_type', UserType.CONSUMER as string);
            formData.append('name', data.name);
            formData.append('image', data.image[0]);

            try {
                const result: any = await handlePostRequest(axiosInstance, BACKEND_REGISTER_PAGE, formData);
                if (result) {
                    Router.push('/login');
                }
            } catch (serverErrors: any) {
                if (serverErrors !== undefined) {
                    Object.keys(serverErrors).forEach((key, index) => {
                        errorToast(Object.keys(serverErrors)[index], serverErrors[key].toString());
                    });
                }
            }
        },
        [errorToast, handlePostRequest]
    );

    return (
        <Grid templateRows="repeat(24, 1fr)" templateColumns="repeat(1, 1fr)">
            <GridItem colSpan={1} rowSpan={1}>
                <Button
                    variant="gohst"
                    _active={{ background: 'none' }}
                    onClick={() => {
                        setUserType(UserType.UNDEFINED_USER);
                    }}>
                    <ArrowLeftIcon float="left" fontSize={{ base: 'xs', md: 'xl' }} />
                </Button>
            </GridItem>

            <GridItem colSpan={1} rowSpan={23}>
                <Grid minH="80vh" templateRows="repeat(7, 1fr)" templateColumns="repeat(1, 1fr)">
                    <GridItem colSpan={1} rowSpan={2}>
                        <Center h="100%" w="100%" m="auto">
                            <Box
                                position="relative"
                                w={{ base: 32, md: 40 }}
                                h={{ base: 32, md: 40 }}
                                borderBottomRadius="full"
                                data-group>
                                <Image
                                    src={
                                        selectedImage
                                            ? URL.createObjectURL(selectedImage)
                                            : '/images/defaultProfileImage.png'
                                    }
                                    w="100%"
                                    h="100%"
                                    borderRadius="full"
                                />

                                <Box
                                    _groupHover={{ opacity: '0.6', background: 'black' }}
                                    position="absolute"
                                    opacity={0}
                                    top="50%"
                                    bottom={0}
                                    left={0}
                                    right={0}
                                    borderBottomRadius="full">
                                    <Box
                                        position="absolute"
                                        top="40%"
                                        left="40%"
                                        color="white"
                                        fontSize={{ base: 'lg', md: '3xl' }}>
                                        {selectedImage ? (
                                            <TooltipTemplate
                                                label="Delete"
                                                hasArrow
                                                placement="bottom"
                                                shouldWrapChildren>
                                                <RiDeleteBin6Line
                                                    onClick={() => setSelectedImage(undefined)}
                                                    cursor="pointer"
                                                    color="red"
                                                />
                                            </TooltipTemplate>
                                        ) : (
                                            <TooltipTemplate
                                                label="Upload"
                                                hasArrow
                                                placement="bottom"
                                                shouldWrapChildren>
                                                <label
                                                    htmlFor="image"
                                                    onChange={(e: any) => setSelectedImage(e.target.files[0])}>
                                                    <VisuallyHidden>
                                                        <input
                                                            type="file"
                                                            id="image"
                                                            accept="image/png, image/jpg, image/jpeg"
                                                            {...register('image')}
                                                        />
                                                    </VisuallyHidden>
                                                    <AiOutlineCloudUpload cursor="pointer" />
                                                </label>
                                            </TooltipTemplate>
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        </Center>
                    </GridItem>

                    <GridItem colSpan={1} rowSpan={4}>
                        <Center h="100%" m="auto">
                            <form>
                                <Flex flexDir={{ base: 'column', md: 'row' }} gap={{ base: 0, md: 16 }}>
                                    <Flex flexDir="column" w={{ base: '100%', md: 72 }}>
                                        <Flex flexDir="column" h={24}>
                                            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
                                                Name:
                                            </Text>
                                            <Input
                                                borderColor={errors.name?.message && 'red'}
                                                placeholder="user@email.com"
                                                type="text"
                                                {...register('name')}
                                            />
                                            <Text color="red" fontSize={{ base: 'xs', md: 'md' }}>
                                                {errors.name?.message}
                                            </Text>
                                        </Flex>
                                        <Flex flexDir="column" h={24}>
                                            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
                                                Email:
                                            </Text>
                                            <Input
                                                borderColor={errors.email?.message && 'red'}
                                                placeholder="user@email.com"
                                                type="email"
                                                {...register('email')}
                                            />
                                            <Text color="red" fontSize={{ base: 'xs', md: 'md' }}>
                                                {errors.email?.message}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                    <Flex flexDir="column" w={{ base: '100%', md: 72 }}>
                                        <Flex flexDir="column" h={24}>
                                            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
                                                Password:
                                            </Text>
                                            <Input
                                                borderColor={errors.password?.message && 'red'}
                                                placeholder="Password"
                                                type="password"
                                                {...register('password')}
                                            />
                                            <Text color="red" fontSize={{ base: 'xs', md: 'md' }}>
                                                {errors.password?.message}
                                            </Text>
                                        </Flex>

                                        <Flex flexDir="column" h={24}>
                                            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
                                                Repeat Password:
                                            </Text>
                                            <Input
                                                borderColor={errors.confirmPassword?.message && 'red'}
                                                placeholder="Password"
                                                type="password"
                                                {...register('confirmPassword')}
                                            />
                                            <Text color="red" fontSize={{ base: 'xs', md: 'md' }}>
                                                {errors.confirmPassword?.message}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </form>
                        </Center>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Center>
                            <Button
                                colorScheme="linkedin"
                                w={{ base: '30%', md: '20%' }}
                                fontSize={{ base: 'xs', md: 'md' }}
                                onClick={handleSubmit(onSubmitHandler)}>
                                Register
                            </Button>
                        </Center>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    );
};
export default ConsumerRegisterForm;
