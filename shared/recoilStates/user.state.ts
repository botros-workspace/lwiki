import secureLocalStorage from 'react-secure-storage';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { UserType } from '../enum/user-type.enum';

const { persistAtom: persistUserInfo } = recoilPersist({
    key: 'persist-userInfo',
    storage: secureLocalStorage as any,
});

export interface UserInfo {
    userType: UserType;
    userId: string | undefined;
}
export interface ConsumerData {
    name: string | undefined;
    image: string | undefined;
    followed_business: Array<string> | undefined;
    saved_products: Array<string> | undefined;
    purchased_recipes: Array<string> | undefined;
    consumer_reservations: Array<string> | undefined;
    reviews: Array<string> | undefined;
    allergies: Array<string> | undefined;
    phone_number: string | undefined;
    search_history: Array<string> | undefined;
    scanned_resturants: Array<string> | undefined;
    creation_date: string | undefined;
}

export const userInfoState = atom<UserInfo>({
    key: 'userInfo',
    default: { userType: UserType.UNDEFINED_USER, userId: undefined },
    effects_UNSTABLE: [persistUserInfo],
});
