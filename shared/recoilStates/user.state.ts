import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { UserType } from '../enum/user-type.enum';
import { Business, BusinessModel, BusinessResponse } from '../models/BusinessModel';

const { persistAtom } = recoilPersist();

export interface UserInfo {
    userType: UserType;
    userId: string | undefined;
}
export interface ConsumerData {
    name: string | undefined;
    image: string | undefined;
    saved_business: Array<string> | undefined;
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
export interface BusinessOwnerData {
    all_reservations: Array<string> | undefined;
    all_business: Array<BusinessResponse> | undefined;
}

export const userInfoState = atom<UserInfo>({
    key: 'userInfo',
    default: { userType: UserType.UNDEFINED_USER, userId: undefined },
    effects_UNSTABLE: [persistAtom],
});
export const consumerDataState = atom<ConsumerData>({
    key: 'consumerData',
    default: undefined as ConsumerData | undefined,
    effects_UNSTABLE: [persistAtom],
});
export const businessOwnerDataState = atom<BusinessOwnerData>({
    key: 'businessOwnerData',
    default: undefined,
    effects_UNSTABLE: [persistAtom],
});

export const allBusinessState = selector({
    key: 'allBusiness',
    get: ({ get }): Array<Business> => {
        const businessOwnerData = get(businessOwnerDataState);
        if (businessOwnerData?.all_business?.length) {
            const allBusiness: Array<Business> = [];
            businessOwnerData.all_business.forEach((singleBusiness: BusinessResponse) =>
                allBusiness.push(
                    BusinessModel.fromBusinessResponse(
                        singleBusiness.business_id,
                        singleBusiness.business_owner_id,
                        singleBusiness.name,
                        singleBusiness.logo,
                        singleBusiness.business_type,
                        singleBusiness.street,
                        singleBusiness.building_number,
                        singleBusiness.country,
                        singleBusiness.region,
                        singleBusiness.phone_number,
                        singleBusiness.business_email,
                        singleBusiness.payment_methods,
                        singleBusiness.average_per_person,
                        singleBusiness.orientation,
                        singleBusiness.menu_categories,
                        singleBusiness.products,
                        singleBusiness.links,
                        singleBusiness.consumer_reviews,
                        singleBusiness.events,
                        singleBusiness.features,
                        singleBusiness.open_hours,
                        singleBusiness.food_experience,
                        singleBusiness.place_experience,
                        singleBusiness.drink_experience,
                        singleBusiness.delivery_experience,
                        singleBusiness.dress_code,
                        singleBusiness.dress_code_description,
                        singleBusiness.business_reservations,
                        singleBusiness.reservation_required,
                        singleBusiness.continuous_service,
                        singleBusiness.saved_count,
                        singleBusiness.is_published,
                        singleBusiness.offers,
                        singleBusiness.creation_date
                    )
                )
            );
            return allBusiness;
        }
        return [];
    },
});
