import { Flex } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { BiCategoryAlt, BiLinkExternal } from 'react-icons/bi';
import { BsInfoCircle, BsCalendar2Event } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';
import { IoMdTimer } from 'react-icons/io';
import { MdOutlineFeaturedPlayList, MdOutlineLocalOffer, MdOutlineVisibility } from 'react-icons/md';
import { TbBrandProducthunt, TbFlipHorizontal } from 'react-icons/tb';
import { Business } from '../../../shared/interfaces/Business';
import { BusinessPreviewShortcutItem } from '../../../shared/interfaces/BusinessPreviewShortcutItem';
import ShortcutMenuItem from './ShortcutMenuItem';

type Props = { business: Business };

const ShortcutMenuContainer: FunctionComponent<Props> = ({ business }) => {
    const shortcutMenuItem: BusinessPreviewShortcutItem[] = [
        {
            tooltipLabel: 'General Information',
            icon: <BsInfoCircle />,
            route: `/manage_business/${business.shortId}/general_information`,
        },
        {
            tooltipLabel: 'Open hours',
            icon: <IoMdTimer />,
            route: `/manage_business/${business.shortId}/open_hours`,
        },
        {
            tooltipLabel: 'Categories',
            icon: <BiCategoryAlt />,
            route: `/manage_business/${business.shortId}/categories`,
        },
        {
            tooltipLabel: 'Products',
            icon: <TbBrandProducthunt />,
            route: `/manage_business/${business.shortId}/products`,
        },
        {
            tooltipLabel: 'Events',
            icon: <BsCalendar2Event />,
            route: `/manage_business/${business.shortId}/events`,
        },
        {
            tooltipLabel: 'Links',
            icon: <BiLinkExternal />,
            route: `/manage_business/${business.shortId}/links`,
        },
        {
            tooltipLabel: 'Features',
            icon: <FaRegStar />,
            route: `/manage_business/${business.shortId}/features`,
        },
        {
            tooltipLabel: 'Offers',
            icon: <MdOutlineLocalOffer />,
            route: `/manage_business/${business.shortId}/offers`,
        },
        {
            tooltipLabel: 'Orientations',
            icon: <TbFlipHorizontal />,
            route: `/manage_business/${business.shortId}/orientations`,
        },
        {
            tooltipLabel: 'Visibility',
            icon: <MdOutlineVisibility />,
            route: `/manage_business/${business.shortId}/visibility`,
        },
    ];
    return (
        <Flex
            flexDir={{ base: 'row', md: 'column' }}
            justifyContent="space-between"
            h={{ base: 12, md: '100%' }}
            p={2}
            gap={2}>
            {shortcutMenuItem.map((shortcutItem) => (
                <ShortcutMenuItem
                    tooltipLabel={shortcutItem.tooltipLabel}
                    icon={shortcutItem.icon}
                    route={shortcutItem.route}
                />
            ))}
        </Flex>
    );
};

export default ShortcutMenuContainer;
