import { Flex, Menu } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { IoPersonAddOutline } from 'react-icons/io5';
import { BsInfoCircle, BsSearch } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import NavItem from './NavItem';
import BurgerMenu from './BurgerMenu';
import NavBarFooter from './NavBarFooter';
import { ABOUT_PAGE, LANDING_PAGE, LOGIN_PAGE, REGISTER_PAGE } from '../../shared/endpoints';

export const navItems = [
    { route: LANDING_PAGE, icon: BsSearch, tooltipLabel: 'Search' },
    { route: ABOUT_PAGE, icon: BsInfoCircle, tooltipLabel: 'About' },
    {
        route: REGISTER_PAGE,
        icon: IoPersonAddOutline,
        tooltipLabel: 'Register',
    },
    { route: LOGIN_PAGE, icon: BiLogIn, tooltipLabel: 'Login' },
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
