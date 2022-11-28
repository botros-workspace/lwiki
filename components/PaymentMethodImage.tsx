import React, { FunctionComponent } from 'react';
import { BsCreditCard2Front } from 'react-icons/bs';
import { GrApple } from 'react-icons/gr';
import { FaCcMastercard } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';
import { RiVisaFill } from 'react-icons/ri';
import { GiCash } from 'react-icons/gi';
import { MdDashboardCustomize } from 'react-icons/md';
import { SiAmericanexpress } from 'react-icons/si';
import { PaymentMethodName } from '../shared/enum/payment-method-types.enum';

type Props = { paymentMethod: PaymentMethodName };

const PaymentMethodImage: FunctionComponent<Props> = ({ paymentMethod }) => {
    if (paymentMethod === PaymentMethodName.APPLE_PAY)
        return <Icon as={GrApple} fontSize={{ base: '3xl', lg: '5xl' }} />;
    if (paymentMethod === PaymentMethodName.CASH) return <Icon as={GiCash} fontSize={{ base: '3xl', lg: '5xl' }} />;
    if (paymentMethod === PaymentMethodName.CREDIT_CARD)
        return <Icon as={BsCreditCard2Front} fontSize={{ base: '3xl', lg: '5xl' }} />;
    if (paymentMethod === PaymentMethodName.MASTER_CARD)
        return <Icon as={FaCcMastercard} fontSize={{ base: '3xl', lg: '5xl' }} />;
    if (paymentMethod === PaymentMethodName.VISA) return <Icon as={RiVisaFill} fontSize={{ base: '3xl', lg: '5xl' }} />;
    if (paymentMethod === PaymentMethodName.AMERICAN_EXPRESS)
        return <Icon as={SiAmericanexpress} fontSize={{ base: '3xl', lg: '5xl' }} />;
    if (paymentMethod === PaymentMethodName.ALL)
        return <Icon as={MdDashboardCustomize} fontSize={{ base: '3xl', lg: '5xl' }} />;
    return null;
};

export default PaymentMethodImage;
