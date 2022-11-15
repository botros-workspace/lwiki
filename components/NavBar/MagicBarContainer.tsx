import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Menu } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { BiCategoryAlt, BiLinkExternal, BiLogIn } from 'react-icons/bi';
import { BsSearch, BsInfoCircle, BsCalendar2Event } from 'react-icons/bs';
import { IoMdTimer } from 'react-icons/io';
import { IoPersonAddOutline } from 'react-icons/io5';
import { MdOutlineFeaturedPlayList, MdOutlineLocalOffer, MdOutlineVisibility } from 'react-icons/md';
import { SiExpertsexchange } from 'react-icons/si';
import { TbBrandProducthunt, TbFlipHorizontal, TbMap2 } from 'react-icons/tb';
import { useRecoilValue } from 'recoil';
import {
    LANDING_PAGE,
    ABOUT_PAGE,
    REGISTER_PAGE,
    LOGIN_PAGE,
    MANAGE_SINGLE_BUSINESS_GENERALINFO_PAGE,
    MANAGE_SINGLE_BUSINESS_CATEGORIES_PAGE,
    MANAGE_SINGLE_BUSINESS_PRODUCTS_PAGE,
    MANAGE_SINGLE_BUSINESS_EVENTS_PAGE,
    MANAGE_SINGLE_BUSINESS_EXPERIENCES_PAGE,
    MANAGE_SINGLE_BUSINESS_FEATURES_PAGE,
    MANAGE_SINGLE_BUSINESS_LINKS_PAGE,
    MANAGE_SINGLE_BUSINESS_OFFERS_PAGE,
    MANAGE_SINGLE_BUSINESS_OPEN_HOURS_PAGE,
    MANAGE_SINGLE_BUSINESS_ORIENTATIONS_PAGE,
    MANAGE_SINGLE_BUSINESS_VISIBILITY_PAGE,
    MANAGE_ALL_BUSINESS_PAGE,
    EXPLORE_PAGE,
    LOGOUT_PAGE,
} from '../../shared/constants/endpoints';
import { UserType } from '../../shared/enum/user-type.enum';
import { MagicBarItemAttribute } from '../../shared/interfaces/MagicBarItemAttribute';
import { userInfoState } from '../../shared/recoilStates/user.state';
import MagicBarItem from './MagicBarItem';

const MagicBarContainer: FunctionComponent = () => {
    const router = useRouter();
    const businessUniqueId = router.query.businessId;
    const userInfo = useRecoilValue(userInfoState);
    const [userType, setUserType] = useState<UserType>(UserType.UNDEFINED_USER);
    const changeRoute = useCallback(
        (route: string) => {
            router.push(`${route}`, undefined, { shallow: true });
        },
        [router]
    );
    function isBusinessManagingRoute(): boolean {
        return (
            router.pathname === MANAGE_SINGLE_BUSINESS_GENERALINFO_PAGE ||
            router.pathname === MANAGE_SINGLE_BUSINESS_PRODUCTS_PAGE ||
            router.pathname === MANAGE_SINGLE_BUSINESS_CATEGORIES_PAGE ||
            router.pathname === MANAGE_SINGLE_BUSINESS_OPEN_HOURS_PAGE ||
            router.pathname === MANAGE_SINGLE_BUSINESS_EVENTS_PAGE ||
            router.pathname === MANAGE_SINGLE_BUSINESS_EXPERIENCES_PAGE ||
            router.pathname === MANAGE_SINGLE_BUSINESS_LINKS_PAGE ||
            router.pathname === MANAGE_SINGLE_BUSINESS_FEATURES_PAGE ||
            router.pathname === MANAGE_SINGLE_BUSINESS_OFFERS_PAGE ||
            router.pathname === MANAGE_SINGLE_BUSINESS_ORIENTATIONS_PAGE ||
            router.pathname === MANAGE_SINGLE_BUSINESS_VISIBILITY_PAGE
        );
    }
    function showBackButton(): boolean {
        return isBusinessManagingRoute() || router.pathname === REGISTER_PAGE || router.pathname === LOGIN_PAGE;
    }
    function getBackButtonRoute(): string {
        if (isBusinessManagingRoute()) return MANAGE_ALL_BUSINESS_PAGE;
        if (REGISTER_PAGE || LOGIN_PAGE) return LANDING_PAGE;
        return LANDING_PAGE;
    }

    const barItems: MagicBarItemAttribute[] = [
        {
            icon: ArrowLeftIcon as IconType,
            tooltipLabel: 'Back',
            show: showBackButton(),
            selected: false,
            onClick: () => changeRoute(getBackButtonRoute()),
        },
        {
            icon: BsSearch,
            tooltipLabel: 'Search',
            show: router.pathname === EXPLORE_PAGE || router.pathname === LOGOUT_PAGE,
            selected: router.pathname === LANDING_PAGE,
            onClick: () => changeRoute(LANDING_PAGE),
        },
        {
            icon: TbMap2,
            tooltipLabel: 'Explore',
            show: router.pathname === LANDING_PAGE || router.pathname === LOGOUT_PAGE,
            selected: router.pathname === EXPLORE_PAGE,
            onClick: () => changeRoute(EXPLORE_PAGE),
        },
        {
            icon: BsInfoCircle,
            tooltipLabel: 'About',
            show: false,
            selected: router.pathname === ABOUT_PAGE,
            onClick: () => changeRoute(ABOUT_PAGE),
        },
        {
            icon: BiLogIn,
            tooltipLabel: 'Login',
            show: userType === UserType.UNDEFINED_USER,
            selected: router.pathname === LOGIN_PAGE,
            onClick: () => changeRoute(LOGIN_PAGE),
        },
        {
            icon: IoPersonAddOutline,
            tooltipLabel: 'Register',
            show: userType === UserType.UNDEFINED_USER,
            selected: router.pathname === REGISTER_PAGE,
            onClick: () => changeRoute(REGISTER_PAGE),
        },
        {
            icon: BsInfoCircle,
            tooltipLabel: 'General Information',
            show: isBusinessManagingRoute(),
            selected: router.pathname === MANAGE_SINGLE_BUSINESS_GENERALINFO_PAGE,
            onClick: () => changeRoute(`/manage_business/${businessUniqueId}/general_information`),
        },
        {
            icon: IoMdTimer,
            tooltipLabel: 'Open hours',
            show: isBusinessManagingRoute(),
            selected: router.pathname === MANAGE_SINGLE_BUSINESS_OPEN_HOURS_PAGE,
            onClick: () => changeRoute(`/manage_business/${businessUniqueId}/open_hours`),
        },
        {
            icon: BiCategoryAlt,
            tooltipLabel: 'Categories',
            show: isBusinessManagingRoute(),
            selected: router.pathname === MANAGE_SINGLE_BUSINESS_CATEGORIES_PAGE,
            onClick: () => changeRoute(`/manage_business/${businessUniqueId}/categories`),
        },
        {
            icon: TbBrandProducthunt,
            tooltipLabel: 'Products',
            show: isBusinessManagingRoute(),
            selected: router.pathname === MANAGE_SINGLE_BUSINESS_PRODUCTS_PAGE,
            onClick: () => changeRoute(`/manage_business/${businessUniqueId}/products`),
        },
        {
            icon: BsCalendar2Event,
            tooltipLabel: 'Events',
            show: isBusinessManagingRoute(),
            selected: router.pathname === MANAGE_SINGLE_BUSINESS_EVENTS_PAGE,
            onClick: () => changeRoute(`/manage_business/${businessUniqueId}/events`),
        },
        {
            icon: SiExpertsexchange,
            tooltipLabel: 'Experiences',
            show: isBusinessManagingRoute(),
            selected: router.pathname === MANAGE_SINGLE_BUSINESS_EXPERIENCES_PAGE,
            onClick: () => changeRoute(`/manage_business/${businessUniqueId}/experiences`),
        },
        {
            icon: BiLinkExternal,
            tooltipLabel: 'Links',
            show: isBusinessManagingRoute(),
            selected: router.pathname === MANAGE_SINGLE_BUSINESS_LINKS_PAGE,
            onClick: () => changeRoute(`/manage_business/${businessUniqueId}/links`),
        },
        {
            icon: MdOutlineFeaturedPlayList,
            tooltipLabel: 'Features',
            show: isBusinessManagingRoute(),
            selected: router.pathname === MANAGE_SINGLE_BUSINESS_FEATURES_PAGE,
            onClick: () => changeRoute(`/manage_business/${businessUniqueId}/features`),
        },
        {
            icon: MdOutlineLocalOffer,
            tooltipLabel: 'Offers',
            show: isBusinessManagingRoute(),
            selected: router.pathname === MANAGE_SINGLE_BUSINESS_OFFERS_PAGE,
            onClick: () => changeRoute(`/manage_business/${businessUniqueId}/offers`),
        },
        {
            icon: TbFlipHorizontal,
            tooltipLabel: 'Orientations',
            show: isBusinessManagingRoute(),
            selected: router.pathname === MANAGE_SINGLE_BUSINESS_ORIENTATIONS_PAGE,
            onClick: () => changeRoute(`/manage_business/${businessUniqueId}/orientations`),
        },
        {
            icon: MdOutlineVisibility,
            tooltipLabel: 'Visibility',
            show: isBusinessManagingRoute(),
            selected: router.pathname === MANAGE_SINGLE_BUSINESS_VISIBILITY_PAGE,
            onClick: () => changeRoute(`/manage_business/${businessUniqueId}/visibility`),
        },
    ];
    useEffect(() => {
        setUserType(userInfo.userType);
    }, [userInfo]);
    return (
        <Menu>
            {barItems.map(
                (barItem) =>
                    barItem.show && (
                        <MagicBarItem
                            key={barItem.tooltipLabel}
                            icon={barItem.icon}
                            tooltipLabel={barItem.tooltipLabel}
                            selected={barItem.selected}
                            onClick={() => barItem.onClick()}
                        />
                    )
            )}
        </Menu>
    );
};

export default MagicBarContainer;
