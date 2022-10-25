import { FiClipboard, FiDollarSign, FiUser } from 'react-icons/fi';
import React from 'react';
import TestComponent from '../components/TestComponent';
import ResturantGeneralInfoForm from '../components/Registeration/Forms/Resturant/ResturantGeneralInfoForm';
import CafeGeneralInfoForm from '../components/Registeration/Forms/Cafe/CafeGenralInfoForm';

export const ResturantRegistertionSteps = [
    { label: 'Login', icon: FiUser, component: <ResturantGeneralInfoForm /> },
    { label: 'Verification', icon: FiClipboard, component: <TestComponent /> },
    { label: 'Muhi', icon: FiDollarSign, component: <TestComponent /> },
    { label: 'Pay', icon: FiDollarSign, component: <TestComponent /> },
];
export const CafeRegisterationSteps = [
    { label: 'Login', icon: FiUser, component: <CafeGeneralInfoForm /> },
    { label: 'Verification', icon: FiClipboard, component: <TestComponent /> },
    { label: 'Pay', icon: FiDollarSign, component: <TestComponent /> },
    { label: 'Pay', icon: FiDollarSign, component: <TestComponent /> },
];
