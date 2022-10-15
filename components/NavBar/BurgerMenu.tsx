import React, { FunctionComponent } from 'react';
import { useDisclosure, Modal, ModalBody, ModalContent, ModalOverlay, Center, VStack, Icon } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { AiFillHome } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { useColor } from '../../shared/hooks/use_color_library.hook';
import MenuItem from './MenuItem';

export const menuItems = [
    { route: '/', icon: <AiFillHome />, text: 'Home' },
    { route: '/about', icon: <BsInfoCircle />, text: 'About' },
    { route: '/register', icon: <BiLogIn />, text: 'Register' },
    { route: '/login', icon: <BiLogIn />, text: 'Login' },
];

const BurgerMenu: FunctionComponent = () => {
    const { primaryColor, secondaryColor, backgroundGrayColor } = useColor();
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                <ModalContent bg="none" boxShadow="none" mt={['70%', '40%', '15%']}>
                    <ModalBody m="auto">
                        <Center>
                            <VStack>
                                {menuItems.map((item) => (
                                    <MenuItem
                                        route={item.route}
                                        icon={item.icon}
                                        text={item.text}
                                        closeModal={onClose}
                                    />
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
