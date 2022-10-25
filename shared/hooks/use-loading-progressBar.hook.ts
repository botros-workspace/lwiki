import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { loadingProgressBarState } from '../recoilStates/progressBar.state';

export type LoadingProgressBar = {
    showLoadingBar: () => void;
    hideLoadingBar: () => void;
    isLoadingBarActive: () => boolean;
};

export function useLoadingProgressBar(): LoadingProgressBar {
    const [loadingProgressBar, setLoadingProgressBar] = useRecoilState(loadingProgressBarState);

    return {
        showLoadingBar: useCallback(() => {
            setLoadingProgressBar(true);
        }, [setLoadingProgressBar]),
        hideLoadingBar: useCallback(() => {
            setLoadingProgressBar(false);
        }, [setLoadingProgressBar]),
        isLoadingBarActive: useCallback(() => loadingProgressBar, [loadingProgressBar]),
    };
}
