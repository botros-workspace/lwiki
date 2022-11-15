import { Flex } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import BurgerMenuContainer from './BurgerMenuContainer';
import NavBarFooter from './NavBarFooter';
import MagicBarContainer from './MagicBarContainer';

const NavBar: FunctionComponent = () => (
    <Flex flexDir="column" justifyContent="space-between" h="100%">
        <Flex>
            <BurgerMenuContainer />
        </Flex>
        <Flex flexDir="column" w="100%" alignItems="center" overflowY="scroll">
            <MagicBarContainer />
        </Flex>
        <Flex flexDir="column" justifyContent="space-between" mb={1} maxW="100%">
            <NavBarFooter />
        </Flex>
    </Flex>
);

export default NavBar;
