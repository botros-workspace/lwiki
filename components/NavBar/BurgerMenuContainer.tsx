import React, { FunctionComponent, useCallback } from 'react';
import { useDisclosure, Modal, ModalBody, ModalContent, ModalOverlay, Center, VStack, Icon } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { HiOutlineViewGridAdd, HiStar } from 'react-icons/hi';
import { AiOutlineStop } from 'react-icons/ai';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { SiOpenstreetmap } from 'react-icons/si';
import { TiThListOutline } from 'react-icons/ti';
import { IoPersonAddOutline } from 'react-icons/io5';
import { TbMap2 } from 'react-icons/tb';
import { useRouter } from 'next/router';
import { useColor } from '../../shared/hooks/use-color.hook';
import BurgerMenuItem from './BurgerMenuItem';
import { ConsumerData, UserInfo, userInfoState } from '../../shared/recoilStates/user.state';
import { UserType } from '../../shared/enum/user-type.enum';
import {
    ABOUT_PAGE,
    ALLERGIES_PAGE,
    BACKEND_LOGOUT_PAGE,
    BUSINESS_REGISTER_PAGE,
    EXPLORE_PAGE,
    LANDING_PAGE,
    LOGIN_PAGE,
    LOGOUT_PAGE,
    MANAGE_ALL_BUSINESS_PAGE,
    REGISTER_PAGE,
    FOLLOWED_PAGE,
} from '../../shared/constants/endpoints';
import { axiosInstance } from '../../axios/axiosInstance';
import { useAxios } from '../../shared/hooks/use-axios.hook';
import { useErrorToast } from '../../shared/hooks/use-error-toast.hook';
import { BurgerMenuItemComponent } from '../../shared/interfaces/BurgerMenuItemComponent';
import { consumerDataState } from '../../shared/recoilStates/consumer.state';
import { BusinessResponse } from '../../shared/interfaces/Business';
import { allBusinessResponseState } from '../../shared/recoilStates/all-business.state';

const BurgerMenu: FunctionComponent = () => {
    const { primaryColor, secondaryColor, backgroundGrayColor } = useColor();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [userInfo, setUserInfo] = useRecoilState<UserInfo>(userInfoState);
    const setConsumerData = useSetRecoilState<ConsumerData>(consumerDataState);
    const setAllBusinessState = useSetRecoilState<BusinessResponse[]>(allBusinessResponseState);
    const { handlePostRequest } = useAxios();
    const errorToast = useErrorToast();
    const router = useRouter();

    const changeRoute = useCallback(
        (route: string) => {
            router.push(`${route}`, undefined, { shallow: true });
            onClose();
        },
        [onClose, router]
    );
    const handleLogout = useCallback(
        async (route: string) => {
            if (userInfo.userId !== undefined && userInfo.userType !== undefined) {
                try {
                    const result: any = await handlePostRequest(axiosInstance, BACKEND_LOGOUT_PAGE, {
                        user_type: userInfo.userType.toString(),
                        user_id: userInfo.userId,
                    });
                    if (result) {
                        axiosInstance.defaults.headers.Authorization = ``;
                        if (userInfo.userType === UserType.CONSUMER) {
                            setConsumerData({
                                name: undefined,
                                image: undefined,
                                followed_business: undefined,
                                saved_products: undefined,
                                purchased_recipes: undefined,
                                consumer_reservations: undefined,
                                reviews: undefined,
                                allergies: undefined,
                                phone_number: undefined,
                                search_history: undefined,
                                scanned_resturants: undefined,
                                creation_date: undefined,
                            });
                        }
                        if (userInfo.userType === UserType.BUSINESS_OWNER) {
                            setAllBusinessState([]);
                        }
                        setUserInfo({ userType: UserType.UNDEFINED_USER, userId: undefined });
                    }
                } catch (errors: any) {
                    if (errors !== undefined) {
                        Object.keys(errors).forEach((key, index) => {
                            errorToast(Object.keys(errors)[index], errors[key]);
                        });
                        setUserInfo({ userType: UserType.UNDEFINED_USER, userId: undefined });
                    }
                }
                changeRoute(route);
            }
        },
        [
            changeRoute,
            errorToast,
            handlePostRequest,
            setAllBusinessState,
            setConsumerData,
            setUserInfo,
            userInfo.userId,
            userInfo.userType,
        ]
    );
    const menuItems: BurgerMenuItemComponent[] = [
        {
            route: LANDING_PAGE,
            icon: SiOpenstreetmap,
            text: 'Search',
            show: true,
            changeRoute,
            isActive: router.pathname === LANDING_PAGE,
        },
        {
            route: EXPLORE_PAGE,
            icon: TbMap2,
            text: 'Explore',
            show: true,
            changeRoute,
            isActive: router.pathname === EXPLORE_PAGE,
        },
        {
            route: ABOUT_PAGE,
            icon: BsInfoCircle,
            text: 'About',
            show: userInfo.userType === UserType.UNDEFINED_USER,
            changeRoute,
            isActive: router.pathname === ABOUT_PAGE,
        },
        {
            route: REGISTER_PAGE,
            icon: IoPersonAddOutline,
            text: 'Register',
            show: userInfo.userType === UserType.UNDEFINED_USER,
            changeRoute,
            isActive: router.pathname === REGISTER_PAGE,
        },
        {
            route: LOGIN_PAGE,
            icon: BiLogIn,
            text: 'Login',
            show: userInfo.userType === UserType.UNDEFINED_USER,
            changeRoute,
            isActive: router.pathname === LOGIN_PAGE,
        },
        {
            route: FOLLOWED_PAGE,
            icon: HiStar,
            text: 'Followed',
            show: userInfo.userType === UserType.CONSUMER,
            iconColor: 'yellow.400',
            changeRoute,
            isActive: router.pathname === FOLLOWED_PAGE,
        },
        {
            route: BUSINESS_REGISTER_PAGE,
            icon: HiOutlineViewGridAdd,
            text: 'Register Business',
            show: userInfo.userType === UserType.BUSINESS_OWNER,
            changeRoute,
            isActive: router.pathname === BUSINESS_REGISTER_PAGE,
        },
        {
            route: MANAGE_ALL_BUSINESS_PAGE,
            icon: TiThListOutline,
            text: 'Manage Business',
            show: userInfo.userType === UserType.BUSINESS_OWNER,
            changeRoute,
            isActive: router.pathname === MANAGE_ALL_BUSINESS_PAGE,
        },
        {
            route: ALLERGIES_PAGE,
            icon: AiOutlineStop,
            text: 'Allergies',
            show: userInfo.userType === UserType.CONSUMER,
            changeRoute,
            isActive: router.pathname === ALLERGIES_PAGE,
        },
        {
            route: LOGOUT_PAGE,
            icon: BiLogOut,
            text: 'Logout',
            show: userInfo.userType !== UserType.UNDEFINED_USER,
            changeRoute: handleLogout,
            isActive: router.pathname === LOGOUT_PAGE,
        },
    ];

    return (
        <>
            <Icon
                _hover={{ color: secondaryColor }}
                _focus={{ background: 'none' }}
                _active={{ background: 'none' }}
                background="none"
                mt={1}
                fontSize={['lg', 'xl', '3xl']}
                onClick={onOpen}
                color={primaryColor}
                w="100%"
                cursor="pointer">
                <HamburgerIcon />
            </Icon>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg={backgroundGrayColor}>
                    <Icon
                        _focus={{ background: 'none' }}
                        _active={{ background: 'none' }}
                        background="none"
                        color={secondaryColor}
                        left={[2, 3, 2, 3]}
                        top={1}
                        fontSize={['lg', 'xl', '3xl']}
                        pos="fixed">
                        <HamburgerIcon />
                    </Icon>
                </ModalOverlay>
                <ModalContent bg="none" boxShadow="none" mt={['50%', '20%', '15%']}>
                    <ModalBody m="auto">
                        <Center>
                            <VStack>
                                {menuItems.map((item: BurgerMenuItemComponent) => (
                                    <>
                                        {item.show && (
                                            <BurgerMenuItem
                                                route={item.route}
                                                icon={item.icon}
                                                text={item.text}
                                                changeRoute={item.changeRoute}
                                                iconColor={item.iconColor}
                                                isActive={item.isActive}
                                            />
                                        )}
                                    </>
                                ))}
                            </VStack>
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default BurgerMenu;

// <Flex flexDir="column" w="100%" alignItems="center">
//     <Box>
//         <IconButton
//             aria-label="Menu"
//             fontSize={['lg', 'xl', '3xl']}
//             variant="ghost"
//             _hover={{ color: secondaryColor }}
//             _focus={{ background: 'none' }}
//             zIndex="99"
//             background="none"
//             onClick={setIsOpen.toggle}
//             color={isOpen ? secondaryColor : primaryColor}
//             icon={<HamburgerIcon />}
//             maxW="100%"
//         />
//         <Flex>
//             <Flex
//                 pos="fixed"
//                 hidden={!isOpen}
//                 minW="100%"
//                 minH="100%"
//                 bg={backgroundGrayColor}
//                 align="center"
//                 top={0}
//                 left={0}
//                 zIndex="98">
//                 <Flex flexDir="column" m="auto">
//                     {menuItems.map((item) => (
//                         <MenuItem route={item.route} icon={item.icon} text={item.text} setIsOpen={setIsOpen} />
//                     ))}
//                 </Flex>
//             </Flex>
//         </Flex>
//     </Box>
// </Flex>
