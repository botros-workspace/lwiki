import { Flex } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsTextareaT } from 'react-icons/bs';
import { MdShareLocation, MdEmail } from 'react-icons/md';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { GiShadowFollower } from 'react-icons/gi';
import { capatalizedText, capatalizeAndRemoveUnderScore } from '../../../shared/functions';
import { Business } from '../../../shared/interfaces/Business';
import { BusinessPreviewInformationAttribute } from '../../../shared/interfaces/BusinessPreviewInformationItem';
import InformationItem from './InformationItem';

type Props = {
    business: Business;
};

const PreviewInformation: FunctionComponent<Props> = ({ business }) => {
    const informationItems: BusinessPreviewInformationAttribute[] = [
        {
            tooltipLabel: 'Name',
            icon: BsTextareaT,
            text: capatalizedText(business.name),
        },
        {
            tooltipLabel: 'Business Type',
            icon: TiInfoLargeOutline,
            text: capatalizeAndRemoveUnderScore(business.businessType),
        },
        {
            tooltipLabel: 'Followers',
            icon: GiShadowFollower,
            text: business.followersCount.toString(),
        },
        {
            tooltipLabel: 'Location',
            icon: MdShareLocation,
            text: `${capatalizedText(business.street)}, ${business.buildingNumber}/ ${capatalizedText(
                business.region
            )}, ${capatalizedText(business.country)}`,
        },
        {
            tooltipLabel: 'Phone number',
            icon: AiOutlinePhone,
            text: business.phoneNumber,
        },
        {
            tooltipLabel: 'Email',
            icon: MdEmail,
            text: business.businessEmail,
        },
    ];
    return (
        <Flex flexDir="column" p={2} gap={2}>
            {informationItems.map((item) => (
                <InformationItem tooltipLabel={item.tooltipLabel} icon={item.icon} text={item.text} />
            ))}
        </Flex>
    );
};

export default PreviewInformation;
