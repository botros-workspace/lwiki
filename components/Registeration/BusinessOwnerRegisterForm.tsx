import React, { FunctionComponent, useCallback } from 'react';
import { Button, Center, Grid, GridItem, Flex, Text, Input } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Router from 'next/router';
import { UserType } from '../../shared/enum/user-type.enum';
import { axiosInstance } from '../../axios/axiosInstance';
import { useAxios } from '../../shared/hooks/use-axios.hook';
import { useErrorToast } from '../../shared/hooks/use-error-toast.hook';
import { BusinessOwnerRegisterFormAttribute } from '../../shared/interfaces/BusinessOwnerRegisterFormAttribute';
import { businessOwnerResgisterFormSchema } from '../../shared/yup/businessOwnerRegisterFormSchema';
import { BACKEND_REGISTER_PAGE, LOGIN_PAGE } from '../../shared/constants/endpoints';

type Props = {
    setUserType: (userType: UserType) => void;
};

const BusinessOwnerRegisterForm: FunctionComponent<Props> = ({ setUserType }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BusinessOwnerRegisterFormAttribute>({ resolver: yupResolver(businessOwnerResgisterFormSchema) });
    const { handlePostRequest } = useAxios();
    const errorToast = useErrorToast();

    const onSubmitHandler = useCallback(
        async (data: BusinessOwnerRegisterFormAttribute) => {
            const formData = new FormData();
            formData.append('email', data.email);
            formData.append('password', data.password);
            formData.append('user_type', UserType.BUSINESS_OWNER as string);
            formData.append('phone_number', data.phoneNumber);
            try {
                const result: any = await handlePostRequest(axiosInstance, BACKEND_REGISTER_PAGE, formData);
                if (result) {
                    Router.push(LOGIN_PAGE);
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
        <Grid templateRows="repeat(20, 1fr)" templateColumns="repeat(1, 1fr)">
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

            <GridItem colSpan={1} rowSpan={19}>
                <Center h="100%" m="auto">
                    <Flex gap={{ base: 4, lg: 44 }} flexDir={{ base: 'column', lg: 'row' }}>
                        <Flex h="100%" m="auto">
                            <Flex flexDir="column" w={{ base: '100%', md: 72 }}>
                                <Flex flexDir="column" h={24}>
                                    <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
                                        Private email:
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
                                <Flex flexDir="column" h={24}>
                                    <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
                                        Private phone number:
                                    </Text>
                                    <Input
                                        borderColor={errors.email?.message && 'red'}
                                        placeholder="+43677777777777"
                                        type="number"
                                        {...register('phoneNumber')}
                                    />
                                    <Text color="red" fontSize={{ base: 'xs', md: 'md' }}>
                                        {errors.phoneNumber?.message}
                                    </Text>
                                </Flex>

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
                                <Flex>
                                    <Button
                                        colorScheme="linkedin"
                                        w="100%"
                                        fontSize={{ base: 'xs', md: 'md' }}
                                        onClick={handleSubmit(onSubmitHandler)}>
                                        Register
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Center>
            </GridItem>
        </Grid>
    );
};
export default BusinessOwnerRegisterForm;

//  <Button
//      colorScheme="linkedin"
//      w={{ base: '30%', md: '20%' }}
//      fontSize={{ base: 'xs', md: 'md' }}
//      onClick={handleSubmit(onSubmitHandler)}>
//      Register
//  </Button>;

//    <Flex flexDir="column" w={{ base: '100%', md: 72 }}>
//        <Flex flexDir="column" h={24}>
//            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
//                Password:
//            </Text>
//            <Input
//                borderColor={errors.password?.message && 'red'}
//                placeholder="Password"
//                type="password"
//                {...register('password')}
//            />
//            <Text color="red" fontSize={{ base: 'xs', md: 'md' }}>
//                {errors.password?.message}
//            </Text>
//        </Flex>

//        <Flex flexDir="column" h={24}>
//            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
//                Repeat Password:
//            </Text>
//            <Input
//                borderColor={errors.confirmPassword?.message && 'red'}
//                placeholder="Password"
//                type="password"
//                {...register('confirmPassword')}
//            />
//            <Text color="red" fontSize={{ base: 'xs', md: 'md' }}>
//                {errors.confirmPassword?.message}
//            </Text>
//        </Flex>
//    </Flex>;

//    <Flex flexDir="column" h={24}>
//        <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
//            Email:
//        </Text>
//        <Input
//            borderColor={errors.email?.message && 'red'}
//            placeholder="user@email.com"
//            type="email"
//            {...register('email')}
//        />
//        <Text color="red" fontSize={{ base: 'xs', md: 'md' }}>
//            {errors.email?.message}
//        </Text>
//    </Flex>;

// <Box
//     position="relative"
//     w={{ base: 32, md: 40 }}
//     h={{ base: 32, md: 40 }}
//     borderBottomRadius="full"
//     data-group>
//     <Image
//         src={
//             selectedImage
//                 ? URL.createObjectURL(selectedImage)
//                 : '/images/defaultProfileImage.png'
//         }
//         w="100%"
//         h="100%"
//         borderRadius="full"
//     />

//     <Box
//         _groupHover={{ opacity: '0.6', background: 'black' }}
//         position="absolute"
//         opacity={0}
//         top="50%"
//         bottom={0}
//         left={0}
//         right={0}
//         borderBottomRadius="full">
//         <Box
//             position="absolute"
//             top="40%"
//             left="40%"
//             color="white"
//             fontSize={{ base: 'lg', md: '3xl' }}>
//             {selectedImage ? (
//                 <Tooltip p={3} borderRadius="xl" label="Delete" shouldWrapChildren hasArrow>
//                     <RiDeleteBin6Line
//                         onClick={() => setSelectedImage(undefined)}
//                         cursor="pointer"
//                         color="red"
//                     />
//                 </Tooltip>
//             ) : (
//                 <Tooltip p={3} borderRadius="xl" label="Upload" shouldWrapChildren hasArrow>
//                     <label
//                         htmlFor="image"
//                         onChange={(e: any) => setSelectedImage(e.target.files[0])}>
//                         <VisuallyHidden>
//                             <input
//                                 type="file"
//                                 id="image"
//                                 accept="image/png, image/jpg, image/jpeg"
//                                 {...register('image')}
//                             />
//                         </VisuallyHidden>
//                         <AiOutlineCloudUpload cursor="pointer" />
//                     </label>
//                 </Tooltip>
//             )}
//         </Box>
//     </Box>
// </Box>;
