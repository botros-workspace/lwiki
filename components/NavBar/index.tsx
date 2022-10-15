import { Flex, Menu } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { BsInfoCircle, BsSearch } from 'react-icons/bs';
import NavItem from './NavItem';
import BurgerMenu from './BurgerMenu';
import NavBarFooter from './NavBarFooter';

export const navItems = [
    { route: '/', icon: BsSearch, tooltipLabel: 'Search' },
    { route: '/about', icon: BsInfoCircle, tooltipLabel: 'About' },
    {
        route: '/register',
        icon: BiLogIn,
        tooltipLabel: 'Register',
    },
    { route: '/login', icon: BiLogIn, tooltipLabel: 'Login' },
];
const NavBar: FunctionComponent = () => (
    <Flex flexDir="column" justifyContent="space-between" h="100%">
        <Flex>
            <BurgerMenu />
        </Flex>
        <Flex flexDir="column" w="100%" alignItems="center">
            <Menu>
                {navItems.map((navItem) => (
                    <NavItem
                        key={navItem.tooltipLabel}
                        route={navItem.route}
                        icon={navItem.icon}
                        tooltipLabel={navItem.tooltipLabel}
                    />
                ))}
            </Menu>
        </Flex>
        <NavBarFooter />
    </Flex>
);

export default NavBar;
