import secureLocalStorage from 'react-secure-storage';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { Business, BusinessResponse } from '../interfaces/Business';
import { BusinessModel } from '../models/BusinessModel';

const { persistAtom: persistAllBusiness } = recoilPersist({
    key: 'persist-all-business',
    storage: secureLocalStorage as any,
});

export const allBusinessResponseState = atom<BusinessResponse[]>({
    key: 'allBusinessResponse',
    default: [],
    effects_UNSTABLE: [persistAllBusiness],
});

export const allBusinessState = selector({
    key: 'allBusiness',
    get: ({ get }): Array<Business> => {
        const allBusinessResponse = get(allBusinessResponseState);
        if (allBusinessResponse) {
            const allBusiness: Array<Business> = [];
            allBusinessResponse.forEach((singleBusiness: BusinessResponse) =>
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
                        singleBusiness.menu_categories,
                        singleBusiness.products,
                        singleBusiness.links,
                        singleBusiness.consumer_reviews,
                        singleBusiness.private_events,
                        singleBusiness.public_events,
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
                        singleBusiness.followers_count,
                        singleBusiness.is_published,
                        singleBusiness.is_reservation_system_active,
                        singleBusiness.badges,
                        singleBusiness.offers,
                        singleBusiness.average_per_person,
                        singleBusiness.orientations,
                        singleBusiness.creation_date
                    )
                )
            );
            return allBusiness;
        }
        return [];
    },
});
