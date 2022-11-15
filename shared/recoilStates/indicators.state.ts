import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { FeatureName } from '../enum/feature-types.enum';
import { PaymentMethodName } from '../enum/payment-method-types.enum';
import { FeatureModel } from '../models/FeatureModel';
import { PaymentMethodModel } from '../models/PaymentMethodModel';

const { persistAtom } = recoilPersist();
export interface Feature {
    id: string;
    feature_type: FeatureName;
}
export interface Payment {
    id: string;
    name: PaymentMethodName;
}

export const indicatorsResponseState = atom({
    key: 'indicatorsResponse',
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const allFeaturesState = selector({
    key: 'allFeatures',
    get: ({ get }) => {
        const indicatorsResponse = get(indicatorsResponseState);
        if (indicatorsResponse.features?.length) {
            const features: Array<Feature> = [];
            indicatorsResponse.features.forEach((singleFeature: any) => {
                if (singleFeature.id && singleFeature.feature_type) {
                    features.push(FeatureModel.fromFeatureResponse(singleFeature.id, singleFeature.feature_type));
                }
            });
            return features;
        }
        return [];
    },
});
export const allPaymentMethodsState = selector({
    key: 'allPaymentMethods',
    get: ({ get }) => {
        const indicatorsResponse = get(indicatorsResponseState);
        if (indicatorsResponse.payment_methodes?.length) {
            const paymentMethods: Array<Payment> = [];
            indicatorsResponse.payment_methodes.forEach((singlePayment: any) => {
                if (singlePayment.id && singlePayment.name) {
                    paymentMethods.push(PaymentMethodModel.fromPaymentsResponse(singlePayment.id, singlePayment.name));
                }
            });
            return paymentMethods;
        }
        return [];
    },
});
