import React, { FunctionComponent } from 'react';
import { Icon, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';
import { useColor } from '../../shared/hooks/use_color_library.hook';

type Props = {
    route?: string;
    tooltipLabel: string;
    icon: IconType;
};

const NavItem: FunctionComponent<Props> = ({ route, tooltipLabel, icon }) => {
    const router = useRouter();
    const { primaryColor, backgroundGrayColor } = useColor();
    function changeRoute(e: any) {
        e.preventDefault();
        router.push(`${route}`, undefined, { shallow: true });
    }
    return (
        <Tooltip label={tooltipLabel} placement="right" shouldWrapChildren>
            <Icon
                borderRadius="md"
                p={{ base: 1, md: 2 }}
                mb={1}
                maxW="100%"
                _hover={{ backgroundColor: backgroundGrayColor }}
                onClick={(e) => changeRoute(e)}
                bg={router.pathname === route ? backgroundGrayColor : 'none'}
                as={icon}
                fontSize={['xl', '2xl', '4xl']}
                color={primaryColor}
                cursor="pointer"
            />
        </Tooltip>
    );
};

export default NavItem;
