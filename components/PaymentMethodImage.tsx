import React, { FunctionComponent } from 'react';
import { BsCreditCard2Front } from 'react-icons/bs';
import { GrApple } from 'react-icons/gr';
import { FaCcMastercard } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';
import { RiVisaFill } from 'react-icons/ri';
import { GiCash } from 'react-icons/gi';
import { MdDashboardCustomize } from 'react-icons/md';
import { PaymentMethodName } from '../shared/enum/payment-method-types.enum';

type Props = { paymentMethod: PaymentMethodName };

const PaymentMethodImage: FunctionComponent<Props> = ({ paymentMethod }) => {
    if (paymentMethod === PaymentMethodName.APPLE_PAY)
        return <Icon as={GrApple} fontSize={{ base: 'xl', md: '3xl' }} />;
    if (paymentMethod === PaymentMethodName.CASH) return <Icon as={GiCash} fontSize={{ base: 'xl', md: '3xl' }} />;
    if (paymentMethod === PaymentMethodName.CREDIT_CARD)
        return <Icon as={BsCreditCard2Front} fontSize={{ base: 'xl', md: '3xl' }} />;
    if (paymentMethod === PaymentMethodName.MASTER_CARD)
        return <Icon as={FaCcMastercard} fontSize={{ base: 'xl', md: '3xl' }} />;
    if (paymentMethod === PaymentMethodName.VISA) return <Icon as={RiVisaFill} fontSize={{ base: 'xl', md: '3xl' }} />;
    if (paymentMethod === PaymentMethodName.ALL)
        return <Icon as={MdDashboardCustomize} fontSize={{ base: 'xl', md: '3xl' }} />;
    return null;
};

export default PaymentMethodImage;
