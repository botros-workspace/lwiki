import React, { FunctionComponent } from 'react';
import { Image } from '@chakra-ui/react';
import { BadgeTitle } from '../shared/enum/badge-types.enum';

type Props = { badge: BadgeTitle };

const BadgeImage: FunctionComponent<Props> = ({ badge }) => {
    if (badge === BadgeTitle.HALAL) return <Image src="images/halalImage.webp" boxSize={{ base: 6, md: 16 }} />;
    if (badge === BadgeTitle.KOSHER) return <Image src="images/kosherImage.jpeg" boxSize={{ base: 6, md: 16 }} />;
    if (badge === BadgeTitle.PESCATARIAN)
        return <Image src="images/pescatarianImages.png" boxSize={{ base: 6, md: 16 }} />;
    if (badge === BadgeTitle.VEGAN) return <Image src="images/veganImage.png" boxSize={{ base: 6, md: 16 }} />;
    if (badge === BadgeTitle.VEGITARIAN)
        return <Image src="images/vegetarianImage.png" boxSize={{ base: 6, md: 16 }} />;

    return null;
};

export default BadgeImage;
