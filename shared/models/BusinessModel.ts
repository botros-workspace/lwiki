/* eslint-disable camelcase */
import { BusinessType } from '../enum/business-type.enum';

export interface BusinessResponse {
    business_id: string;
    business_owner_id: string;
    name: string;
    logo: string;
    business_type: string;
    street: string;
    building_number: string;
    country: string;
    region: string;
    phone_number: string;
    business_email: string;
    payment_methods: Array<string>;
    average_per_person: string;
    orientation: Array<string>;
    menu_categories: Array<string>;
    products: Array<string>;
    links: Array<string>;
    consumer_reviews: Array<string>;
    events: Array<string>;
    features: Array<string>;
    open_hours: Array<string>;
    food_experience: string;
    place_experience: string;
    drink_experience: string;
    delivery_experience: string;
    dress_code: Array<string>;
    dress_code_description: string;
    business_reservations: Array<string>;
    reservation_required: string;
    continuous_service: string;
    saved_count: string;
    is_published: string;
    offers: Array<string>;
    creation_date: string;
}
export interface Business {
    business_id: string;
    business_owner_id: string;
    name: string;
    logo: string;
    business_type: BusinessType;
    street: string;
    building_number: string;
    country: string;
    region: string;
    phone_number: string;
    business_email: string;
    payment_methods: Array<string>;
    average_per_person: number;
    orientation: Array<string>;
    menu_categories: Array<string>;
    products: Array<string>;
    links: Array<string>;
    consumer_reviews: Array<string>;
    events: Array<string>;
    features: Array<string>;
    open_hours: Array<string>;
    food_experience: string;
    place_experience: string;
    drink_experience: string;
    delivery_experience: string;
    dress_code: Array<string>;
    dress_code_description: string;
    business_reservations: Array<string>;
    reservation_required: boolean;
    continuous_service: boolean;
    saved_count: number;
    is_published: boolean;
    offers: Array<string>;
    creation_date: string;
}

export class BusinessModel {
    constructor(
        public business_id: string,
        public business_owner_id: string,
        public name: string,
        public logo: string,
        public business_type: BusinessType,
        public street: string,
        public building_number: string,
        public country: string,
        public region: string,
        public phone_number: string,
        public business_email: string,
        public payment_methods: Array<string>,
        public average_per_person: number,
        public orientation: Array<string>,
        public menu_categories: Array<string>,
        public products: Array<string>,
        public links: Array<string>,
        public consumer_reviews: Array<string>,
        public events: Array<string>,
        public features: Array<string>,
        public open_hours: Array<string>,
        public food_experience: string,
        public place_experience: string,
        public drink_experience: string,
        public delivery_experience: string,
        public dress_code: Array<string>,
        public dress_code_description: string,
        public business_reservations: Array<string>,
        public reservation_required: boolean,
        public continuous_service: boolean,
        public saved_count: number,
        public is_published: boolean,
        public offers: Array<string>,
        public creation_date: string
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
        average_per_person: string,
        orientation: Array<string>,
        menu_categories: Array<string>,
        products: Array<string>,
        links: Array<string>,
        consumer_reviews: Array<string>,
        events: Array<string>,
        features: Array<string>,
        open_hours: Array<string>,
        food_experience: string,
        place_experience: string,
        drink_experience: string,
        delivery_experience: string,
        dress_code: Array<string>,
        dress_code_description: string,
        business_reservations: Array<string>,
        reservation_required: string,
        continuous_service: string,
        saved_count: string,
        is_published: string,
        offers: Array<string>,
        creation_date: string
    ) {
        let new_business_type: BusinessType = BusinessType.UNDEFINED_BUSINESS;
        const newAverage: number = parseInt(average_per_person, 10);
        const newSaved: number = parseInt(saved_count, 10);
        let newReservationRequired = false;
        let newContinuousService = false;
        let newIsPublished = true;
        if (business_type === 'RESTURANT') {
            new_business_type = BusinessType.RESTURANT as BusinessType;
        } else if (business_type === 'BAR') {
            new_business_type = BusinessType.BAR as BusinessType;
        } else if (business_type === 'BEACH_BAR') {
            new_business_type = BusinessType.BEACH_BAR as BusinessType;
        } else if (business_type === 'BEACH_RESTURANT') {
            new_business_type = BusinessType.BEACH_RESTURANT as BusinessType;
        } else if (business_type === 'BEACH_RESTURANT_BAR') {
            new_business_type = BusinessType.BEACH_RESTURANT_BAR as BusinessType;
        } else if (business_type === 'CAFE') {
            new_business_type = BusinessType.CAFE as BusinessType;
        } else if (business_type === 'CAFE_BAR') {
            new_business_type = BusinessType.CAFE_BAR as BusinessType;
        } else if (business_type === 'CATERING_COMPANY') {
            new_business_type = BusinessType.CATERING_COMPANY as BusinessType;
        } else if (business_type === 'DRINK_CART') {
            new_business_type = BusinessType.DRINK_CART as BusinessType;
        } else if (business_type === 'FOOD_CART') {
            new_business_type = BusinessType.FOOD_CART as BusinessType;
        } else if (business_type === 'VENDING_MACHINE') {
            new_business_type = BusinessType.VENDING_MACHINE as BusinessType;
        }
        if (reservation_required === 'false') {
            newReservationRequired = false;
        } else if (reservation_required === 'true') {
            newReservationRequired = true;
        }
        if (continuous_service === 'false') {
            newContinuousService = false;
        } else if (continuous_service === 'true') {
            newContinuousService = true;
        }
        if (is_published === 'false') {
            newIsPublished = false;
        } else if (is_published === 'true') {
            newIsPublished = true;
        }
        return new BusinessModel(
            business_id,
            business_owner_id,
            name,
            logo,
            new_business_type,
            street,
            building_number,
            country,
            region,
            phone_number,
            business_email,
            payment_methods,
            newAverage,
            orientation,
            menu_categories,
            products,
            links,
            consumer_reviews,
            events,
            features,
            open_hours,
            food_experience,
            place_experience,
            drink_experience,
            delivery_experience,
            dress_code,
            dress_code_description,
            business_reservations,
            newReservationRequired,
            newContinuousService,
            newSaved,
            newIsPublished,
            offers,
            creation_date
        );
    }
}
