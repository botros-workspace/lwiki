import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { PaymentMethodName } from '../enum/payment-method-types.enum';
import { PaymentMethodModel } from '../models/PaymentMethodModel';

const { persistAtom } = recoilPersist();
export interface Payment {
    id: string;
    name: PaymentMethodName;
}

export const paymentResponseState = atom({
    key: 'paymentResponse',
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const allPaymentsState = selector({
    key: 'allPayments',
    get: ({ get }) => {
        const paymentsResponse = get(paymentResponseState);
        if (paymentsResponse.length) {
            const payments: Array<Payment> = [];
            paymentsResponse.forEach((singlemethod: any) => {
                if (singlemethod.id && singlemethod.name) {
                    payments.push(PaymentMethodModel.fromPaymentsResponse(singlemethod.id, singlemethod.feature_type));
                }
            });
            return payments;
        }
        return [];
    },
});
