import { FiClipboard, FiDollarSign, FiUser } from 'react-icons/fi';
import React from 'react';
import TestComponent from '../components/TestComponent';

const steps = [
    { label: 'Login', icon: FiUser, component: <TestComponent /> },
    { label: 'Verification', icon: FiClipboard, component: <TestComponent /> },
    { label: 'Pay', icon: FiDollarSign, component: <TestComponent /> },
    { label: 'Pay', icon: FiDollarSign, component: <TestComponent /> },
];
export default steps;
