import React, { FunctionComponent } from 'react';
import { useDisclosure, Modal, ModalBody, ModalContent, ModalOverlay, Center, VStack, Icon } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { HiOutlineViewGridAdd, HiStar } from 'react-icons/hi';
import { AiOutlineStop } from 'react-icons/ai';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import { SiOpenstreetmap } from 'react-icons/si';
import { TiThListOutline } from 'react-icons/ti';
import { IoPersonAddOutline } from 'react-icons/io5';
import { TbMap2 } from 'react-icons/tb';
import { useColor } from '../../shared/hooks/use-color-library.hook';
import MenuItem from './MenuItem';
import { userInfoState } from '../../shared/recoilStates/user.state';
import { UserType } from '../../shared/enum/user-type.enum';
import {
    ABOUT_PAGE,
    ALLERGIES_PAGE,
    BUSINESS_REGISTER_PAGE,
    EXPLORE_PAGE,
    LANDING_PAGE,
    LOGIN_PAGE,
    LOGOUT_PAGE,
    MANAGE_BUSINESS_PAGE,
    REGISTER_PAGE,
    SAVED_PAGE,
} from '../../shared/endpoints';

const BurgerMenu: FunctionComponent = () => {
    const { primaryColor, secondaryColor, backgroundGrayColor } = useColor();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const user = useRecoilValue(userInfoState);
    const menuItems = [
        { route: LANDING_PAGE, icon: SiOpenstreetmap, text: 'Search', show: true },
        { route: EXPLORE_PAGE, icon: TbMap2, text: 'Explore', show: true },
        { route: ABOUT_PAGE, icon: BsInfoCircle, text: 'About', show: user.userType === UserType.UNDEFINED_USER },
        {
            route: REGISTER_PAGE,
            icon: IoPersonAddOutline,
            text: 'Register',
            show: user.userType === UserType.UNDEFINED_USER,
        },
        { route: LOGIN_PAGE, icon: BiLogIn, text: 'Login', show: user.userType === UserType.UNDEFINED_USER },
        {
            route: SAVED_PAGE,
            icon: HiStar,
            text: 'Saved',
            show: user.userType === UserType.CONSUMER,
            iconColor: 'yellow.400',
        },
        {
            route: BUSINESS_REGISTER_PAGE,
            icon: HiOutlineViewGridAdd,
            text: 'Register Business',
            show: user.userType === UserType.BUSINESS_OWNER,
        },
        {
            route: MANAGE_BUSINESS_PAGE,
            icon: TiThListOutline,
            text: 'Manage Business',
            show: user.userType === UserType.BUSINESS_OWNER,
        },
        { route: ALLERGIES_PAGE, icon: AiOutlineStop, text: 'Allergies', show: user.userType === UserType.CONSUMER },
        { route: LOGOUT_PAGE, icon: BiLogOut, text: 'Logout', show: user.userType !== UserType.UNDEFINED_USER },
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
                                {menuItems.map((item) => (
                                    <>
                                        {item.show && (
                                            <MenuItem
                                                route={item.route}
                                                icon={item.icon}
                                                text={item.text}
                                                closeModal={onClose}
                                                iconColor={item.iconColor}
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
