import secureLocalStorage from 'react-secure-storage';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ConsumerData } from './user.state';

const { persistAtom: persistConsumer } = recoilPersist({
    key: 'persist-consumer',
    storage: secureLocalStorage as any,
});

export const consumerDataState = atom({
    key: 'consumerData',
    default: undefined as any as ConsumerData,
    effects_UNSTABLE: [persistConsumer],
});
