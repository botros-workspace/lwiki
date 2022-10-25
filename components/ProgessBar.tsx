import React, { FunctionComponent } from 'react';
import { Progress, useColorMode } from '@chakra-ui/react';
import { useLoadingProgressBar } from '../shared/hooks/use-loading-progressBar.hook';

export const ProgressBar: FunctionComponent = () => {
    const { isLoadingBarActive } = useLoadingProgressBar();
    const { colorMode } = useColorMode();
    if (isLoadingBarActive()) {
        return (
            <Progress
                size="xs"
                pos="sticky"
                top={0}
                isIndeterminate
                colorScheme={colorMode === 'light' ? 'twitter' : 'teal'}
            />
        );
    }
    return <Progress size="xs" value={0} background={colorMode === 'light' ? 'white' : 'gray.800'} />;
};

export default ProgressBar;
