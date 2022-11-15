/* eslint-disable camelcase */

import { PaymentMethodName } from '../enum/payment-method-types.enum';

export class PaymentMethodModel {
    constructor(public id: string, public name: PaymentMethodName) {}

    static fromPaymentsResponse(id: string, name: string) {
        let new_payment_name: PaymentMethodName = PaymentMethodName.UNDEFINED_METHOD;
        if (name === 'APPLE_PAY') {
            new_payment_name = PaymentMethodName.APPLE_PAY as PaymentMethodName;
        } else if (name === 'CASH') {
            new_payment_name = PaymentMethodName.CASH as PaymentMethodName;
        } else if (name === 'CREDIT_CARD') {
            new_payment_name = PaymentMethodName.CREDIT_CARD as PaymentMethodName;
        } else if (name === 'MASTER_CARD') {
            new_payment_name = PaymentMethodName.MASTER_CARD as PaymentMethodName;
        } else if (name === 'VISA') {
            new_payment_name = PaymentMethodName.VISA as PaymentMethodName;
        }
        return new PaymentMethodModel(id, new_payment_name);
    }
}
