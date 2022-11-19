import { BadgeTitle } from '../enum/badge-types.enum';
import { BusinessTypeName } from '../enum/business-type.enum';
import { FeatureName } from '../enum/feature-types.enum';
import { OrientationName } from '../enum/orientation-types.enum';
import { PaymentMethodName } from '../enum/payment-method-types.enum';
import { OpenHour } from './OpenHour';

export interface BusinessRegisterationForm {
    business_owner_id: string;
    name: string;
    logo: string;
    business_type: BusinessTypeName;
    street: string;
    building_number: string;
    country: string;
    region: string;
    phone_number: string;
    business_email: string;
    payment_methods: Array<PaymentMethodName>;
    facebook: string;
    instagram: string;
    twitter: string;
    google_maps: string;
    website: string;
    features: Array<FeatureName>;
    open_hours: Array<OpenHour>;
    reservation_required: boolean;
    continuous_service: boolean;
    badges: Array<BadgeTitle>;
    average_per_person: string;
    orientations: Array<OrientationName>;
}
