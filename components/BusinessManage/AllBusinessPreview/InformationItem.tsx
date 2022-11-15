import { Flex, Text, Icon } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { BusinessPreviewInformationAttribute } from '../../../shared/interfaces/BusinessPreviewInformationItem';
import TooltipTemplate from '../../Shared/TooltipTemplate';

const PreviewInformationItem: FunctionComponent<BusinessPreviewInformationAttribute> = ({
    tooltipLabel,
    icon,
    text,
}) => (
    <Flex gap={2}>
        <TooltipTemplate label={tooltipLabel} hasArrow placement="bottom" shouldWrapChildren>
            <Icon as={icon} w={{ base: 3, sm: 4, md: 6 }} h={4} mt={{ base: 0, sm: 1 }} />
        </TooltipTemplate>
        <Text fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}>{text}</Text>
    </Flex>
);

export default PreviewInformationItem;
