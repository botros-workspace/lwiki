import { SimpleGrid } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { OrientationName } from '../../shared/enum/orientation-types.enum';
import OrientationTemplate from '../OrientationTemplate';

type Props = {
    selectedOrientations: Array<OrientationName>;
    setSelectedOrientations: (orientations: OrientationName[]) => void;
};

const OrientationsContainer: FunctionComponent<Props> = ({ selectedOrientations, setSelectedOrientations }) => {
    const allOrientations: Array<OrientationName> = Object.values(OrientationName).filter(
        (orientation) => orientation !== OrientationName.UNDEFINED_ORIENTATION
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
            {allOrientations.map((orientation) => (
                <OrientationTemplate
                    orientation={orientation}
                    isSelected={selectedOrientations.includes(orientation)}
                    selectedOrientations={selectedOrientations}
                    setSelectedOrientations={setSelectedOrientations}
                />
            ))}
        </SimpleGrid>
    );
};

export default OrientationsContainer;
