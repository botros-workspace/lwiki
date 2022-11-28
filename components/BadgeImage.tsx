import React, { FunctionComponent } from 'react';
import { Image } from '@chakra-ui/react';
import { BadgeTitle } from '../shared/enum/badge-types.enum';

type Props = { badge: BadgeTitle };

const BadgeImage: FunctionComponent<Props> = ({ badge }) => {
    if (badge === BadgeTitle.HALAL) return <Image src="images/halalImage.webp" />;
    if (badge === BadgeTitle.KOSHER) return <Image src="images/kosherImage.jpeg" />;
    if (badge === BadgeTitle.PESCATARIAN) return <Image src="images/pescatarianImages.png" />;
    if (badge === BadgeTitle.VEGAN) return <Image src="images/veganImage.png" />;
    if (badge === BadgeTitle.VEGITARIAN) return <Image src="images/vegetarianImage.png" />;
    if (badge === BadgeTitle.MICHELIN) return <Image src="images/michelin.png" />;

    return null;
};

export default BadgeImage;
