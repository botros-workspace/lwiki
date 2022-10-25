import { atom } from 'recoil';

export const loadingProgressBarState = atom<boolean>({
    key: 'loadingProgressBar',
    default: false,
});
