import Icon from '@chakra-ui/icon';
import React, { FunctionComponent } from 'react';
import { IconType } from 'react-icons';
import { useColor } from '../../shared/hooks/use-color.hook';
import TooltipTemplate from '../Shared/TooltipTemplate';

type Props = { tooltipLabel: string; icon: IconType; selected: boolean; onClick: () => void };

const MagicBarItem: FunctionComponent<Props> = ({ tooltipLabel, icon, selected, onClick }) => {
    const { primaryColor, backgroundGrayColor } = useColor();

    return (
        <TooltipTemplate label={tooltipLabel} placement="right" shouldWrapChildren hasArrow>
            <Icon
                borderRadius="md"
                p={{ base: 1, md: 2 }}
                mb={1}
                maxW="100%"
                _hover={{ backgroundColor: backgroundGrayColor }}
                onClick={onClick}
                bg={selected ? backgroundGrayColor : 'none'}
                as={icon}
                fontSize={['xl', '2xl', '4xl']}
                color={primaryColor}
                cursor="pointer"
            />
        </TooltipTemplate>
    );
};

export default MagicBarItem;
