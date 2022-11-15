/* eslint-disable camelcase */
import { BadgeTitle } from '../enum/badge-types.enum';
import { BusinessTypeName } from '../enum/business-type.enum';
import { DressCode } from '../enum/dress-code-types.enum';
import { FeatureName } from '../enum/feature-types.enum';
import { OrientationName } from '../enum/orientation-types.enum';
import { PaymentMethodName } from '../enum/payment-method-types.enum';
import { Experience } from '../interfaces/Experience';
import { Link } from '../interfaces/Link';
import { MenuCategory } from '../interfaces/MenuCategory';
import { Offer } from '../interfaces/Offer';
import { OpenHour } from '../interfaces/OpenHour';
import { PrivateEvent } from '../interfaces/PrivateEvent';
import { Product } from '../interfaces/Product';
import { PublicEvent } from '../interfaces/PublicEvent';

export class BusinessModel {
    constructor(
        public businessId: string,
        public shortId: string,
        public businessOwnerId: string,
        public name: string,
        public logo: string,
        public businessType: BusinessTypeName,
        public street: string,
        public buildingNumber: string,
        public country: string,
        public region: string,
        public phoneNumber: string,
        public businessEmail: string,
        public paymentMethods: Array<PaymentMethodName>,
        public menuCategories: Array<MenuCategory>,
        public products: Array<Product>,
        public links: Array<Link>,
        public consumerReviews: Array<string>,
        public private_events: Array<PrivateEvent>,
        public public_events: Array<PublicEvent>,
        public features: Array<FeatureName>,
        public openHours: Array<OpenHour>,
        public foodExperience: Experience,
        public placeExperience: Experience,
        public drinkExperience: Experience,
        public deliveryExperience: Experience,
        public dressCode: Array<DressCode>,
        public dressCodeDescription: string,
        public businessReservations: Array<string>,
        public reservationRequired: boolean,
        public continuousService: boolean,
        public followersCount: number,
        public isPublished: boolean,
        public isReservationSystemActive: boolean,
        public badges: Array<BadgeTitle>,
        public offers: Array<Offer>,
        public averagePerPerson: number,
        public orientations: Array<OrientationName>,
        public creationDate: string
    ) {}

    static fromBusinessResponse(
        business_id: string,
        business_owner_id: string,
        name: string,
        logo: string,
        business_type: string,
        street: string,
        building_number: string,
        country: string,
        region: string,
        phone_number: string,
        business_email: string,
        payment_methods: Array<string>,
        menu_categories: Array<string>,
        products: Array<string>,
        links: Array<string>,
        consumer_reviews: Array<string>,
        private_events: Array<string>,
        public_events: Array<string>,
        features: Array<string>,
        open_hours: Array<string>,
        food_experience: Array<string>,
        place_experience: Array<string>,
        drink_experience: Array<string>,
        delivery_experience: Array<string>,
        dress_code: Array<string>,
        dress_code_description: string,
        business_reservations: Array<string>,
        reservation_required: string,
        continuous_service: string,
        followers_count: string,
        is_published: string,
        is_reservation_system_active: string,
        badges: Array<string>,
        offers: Array<string>,
        average_per_person: string,
        orientations: Array<string>,
        creation_date: string
    ) {
        const allFeatures: Array<FeatureName> = [];
        const allPaymentMethods: Array<PaymentMethodName> = [];
        const allBadges: Array<BadgeTitle> = [];
        const allOffers: Array<Offer> = [];
        const menuCategories: Array<MenuCategory> = [];
        const newProducts: Array<Product> = [];
        const newOrientations: Array<OrientationName> = [];
        const newLinks: Array<Link> = [];
        const privateEvents: Array<PrivateEvent> = [];
        const publicEvents: Array<PublicEvent> = [];
        const openHours: Array<OpenHour> = [];
        let businessType = BusinessTypeName.UNDEFINED_BUSINESS_TYPE;
        const foodExperience: Experience = {
            id: '',
            caption: '',
            media: [],
        };
        const drinkExperience: Experience = {
            id: '',
            caption: '',
            media: [],
        };
        const placeExperience: Experience = {
            id: '',
            caption: '',
            media: [],
        };
        const deliveryExperience: Experience = {
            id: '',
            caption: '',
            media: [],
        };
        const allDressCode: Array<DressCode> = [];
        let continuousService = false;
        let isPublished = false;
        let reservationRequired = false;
        let isReservationSystemActive = false;
        if (Object.keys(BusinessTypeName).includes(business_type)) {
            businessType = business_type as BusinessTypeName;
        }
        const followersCount: number = parseInt(followers_count, 10);
        const averagePerPerson: number = parseInt(average_per_person, 10);
        open_hours.forEach((singelOpenHour: any) => {
            const day: OpenHour = {
                id: singelOpenHour.id,
                day: singelOpenHour.day,
                first_period_open: singelOpenHour.first_period_open,
                first_period_close: singelOpenHour.first_period_close,
                second_period_open: singelOpenHour.second_period_open,
                second_period_close: singelOpenHour.second_period_close,
            };
            openHours.push(day);
        });
        features.forEach((feature) => {
            if (Object.keys(FeatureName).includes(feature)) {
                allFeatures.push(feature as FeatureName);
            } else {
                allFeatures.push(FeatureName.UNDEFINED_FEATURE);
            }
        });
        payment_methods.forEach((payment_method) => {
            if (Object.keys(PaymentMethodName).includes(payment_method)) {
                allPaymentMethods.push(payment_method as PaymentMethodName);
            } else {
                allPaymentMethods.push(PaymentMethodName.UNDEFINED_METHOD);
            }
        });
        dress_code.forEach((single_code) => {
            if (Object.keys(DressCode).includes(single_code)) {
                allDressCode.push(single_code as DressCode);
            } else {
                allDressCode.push(DressCode.UNDEFINED_DRESS_CODE);
            }
        });
        badges.forEach((badge) => {
            if (Object.keys(BadgeTitle).includes(badge)) {
                allBadges.push(badge as BadgeTitle);
            } else {
                allBadges.push(BadgeTitle.UNDEFINED_BADGE);
            }
        });
        orientations.forEach((orientation) => {
            if (Object.keys(OrientationName).includes(orientation)) {
                newOrientations.push(orientation as OrientationName);
            } else {
                newOrientations.push(OrientationName.UNDEFINED_ORIENTATION);
            }
        });
        if (continuous_service === 'false') {
            continuousService = false;
        } else if (continuous_service === 'true') {
            continuousService = true;
        }
        if (is_published === 'false') {
            isPublished = false;
        } else if (is_published === 'true') {
            isPublished = true;
        }
        if (reservation_required === 'false') {
            reservationRequired = false;
        } else if (reservation_required === 'true') {
            reservationRequired = true;
        }
        if (is_reservation_system_active === 'false') {
            isReservationSystemActive = false;
        } else if (is_reservation_system_active === 'true') {
            isReservationSystemActive = true;
        }

        return new BusinessModel(
            business_id,
            business_id.slice(0, 6),
            business_owner_id,
            name,
            logo,
            businessType,
            street,
            building_number,
            country,
            region,
            phone_number,
            business_email,
            allPaymentMethods,
            menuCategories,
            newProducts,
            newLinks,
            consumer_reviews,
            privateEvents,
            publicEvents,
            allFeatures,
            openHours,
            foodExperience,
            drinkExperience,
            placeExperience,
            deliveryExperience,
            allDressCode,
            dress_code_description,
            business_reservations,
            reservationRequired,
            continuousService,
            followersCount,
            isPublished,
            isReservationSystemActive,
            allBadges,
            allOffers,
            averagePerPerson,
            newOrientations,
            creation_date
        );
    }
}
