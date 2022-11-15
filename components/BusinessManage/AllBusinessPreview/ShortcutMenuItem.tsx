import { Flex, IconButton } from '@chakra-ui/react';
import router from 'next/router';
import React, { FunctionComponent, useCallback } from 'react';
import { useColor } from '../../../shared/hooks/use-color.hook';
import { BusinessPreviewShortcutItem } from '../../../shared/interfaces/BusinessPreviewShortcutItem';
import TooltipTemplate from '../../Shared/TooltipTemplate';

const BusinessPreviewShortcutMenuItem: FunctionComponent<BusinessPreviewShortcutItem> = ({
    tooltipLabel,
    icon,
    route,
}) => {
    const colors = useColor();
    const changeRoute = useCallback(
        (e: any) => {
            e.stopPropagation();
            router.push(`${route}`, undefined, { shallow: true });
        },
        [route]
    );
    return (
        <Flex onClick={changeRoute}>
            <TooltipTemplate label={tooltipLabel} hasArrow placement="bottom" shouldWrapChildren={false}>
                <IconButton
                    size={{ base: 'xs', md: 'sm' }}
                    variant="ghost"
                    _hover={{
                        background: 'none',
                        borderBottomWidth: 2,
                        borderColor: colors.primaryColor,
                        borderRadius: 'none',
                        size: 'md',
                    }}
                    _focus={{
                        background: 'none',
                    }}
                    borderColor={colors.textOnHover}
                    borderBottomWidth={2}
                    borderRadius="none"
                    color={colors.primaryColor}
                    w="100%"
                    h="100%"
                    icon={icon}
                    aria-label={tooltipLabel}
                />
            </TooltipTemplate>
        </Flex>
    );
};

export default BusinessPreviewShortcutMenuItem;
