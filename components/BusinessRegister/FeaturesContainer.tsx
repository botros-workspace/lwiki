import { SimpleGrid } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { FeatureName } from '../../shared/enum/feature-types.enum';
import FeatureTemplate from '../FeatureTemplate';

type Props = { selectedFeatures: Array<FeatureName>; setSelectedFeatures: (features: FeatureName[]) => void };

const FeaturesContainer: FunctionComponent<Props> = ({ selectedFeatures, setSelectedFeatures }) => {
    const allFeatures: Array<FeatureName> = Object.values(FeatureName).filter(
        (feature) => feature !== FeatureName.UNDEFINED_FEATURE
    );

    return (
        <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            mt={8}
            columnGap={8}
            rowGap={8}
            w="100%"
            h="100%"
            justifyItems="center"
            mx="auto">
            {allFeatures.map((feature) => (
                <FeatureTemplate
                    feature={feature}
                    isSelected={selectedFeatures.includes(feature)}
                    selectedFeatures={selectedFeatures}
                    setSelectedFeatures={setSelectedFeatures}
                />
            ))}
        </SimpleGrid>
    );
};

export default FeaturesContainer;
