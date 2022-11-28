import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { Business } from '../../../shared/interfaces/Business';
import { allBusinessState } from '../../../shared/recoilStates/all-business.state';
import { BusinessTypeName } from '../../../shared/enum/business-type.enum';
import { BadgeTitle } from '../../../shared/enum/badge-types.enum';
import { PaymentMethodName } from '../../../shared/enum/payment-method-types.enum';

export interface generalInformationAttributes {
    logo: string;
    businessType: BusinessTypeName;
    name: string;
    street: string;
    buildingNumber: string;
    country: string;
    region: string;
    phoneNumber: string;
    businessEmail: string;
    averagePerPerson: number;
    isReservationRequired: boolean;
    badges: Array<BadgeTitle>;
    paymentMethods: Array<PaymentMethodName>;
}

const ManageGeneralInformation: NextPage = () => {
    const allBusiness = useRecoilValue(allBusinessState);
    const [business, setBusiness] = useState<Business>();
    const [currentGeneralInformation, setCurrentGeneralInformation] = useState<generalInformationAttributes>();
    const [newGeneralInformation, setNewGeneralInformation] = useState<generalInformationAttributes>();
    const router = useRouter();
    const businessUniqueId = router.query.businessId;
    useEffect(() => {
        setBusiness(allBusiness.find((b) => b.shortId === businessUniqueId));
        if (!business) return;
        setCurrentGeneralInformation({
            logo: business.logo,
            businessType: business.businessType,
            name: business.name,
            street: business.street,
            buildingNumber: business.buildingNumber,
            country: business.country,
            region: business.region,
            phoneNumber: business.phoneNumber,
            businessEmail: business.businessEmail,
            averagePerPerson: business.averagePerPerson,
            isReservationRequired: business.reservationRequired,
            badges: business.badges,
            paymentMethods: business.paymentMethods,
        });
        setNewGeneralInformation({
            logo: business.logo,
            businessType: business.businessType,
            name: business.name,
            street: business.street,
            buildingNumber: business.buildingNumber,
            country: business.country,
            region: business.region,
            phoneNumber: business.phoneNumber,
            businessEmail: business.businessEmail,
            averagePerPerson: business.averagePerPerson,
            isReservationRequired: business.reservationRequired,
            badges: business.badges,
            paymentMethods: business.paymentMethods,
        });
    }, [allBusiness, business, business?.shortId, businessUniqueId]);

    return (
        <Box w="100%" h="100%" justifyContent="center">
            <Flex flexDir="column" gap={8}>
                <Flex gap={8}>
                    <Flex>Current</Flex>
                    <Flex>{currentGeneralInformation?.name}</Flex>
                </Flex>
                <Flex>
                    {currentGeneralInformation?.name !== newGeneralInformation?.name ? (
                        <Button
                            onClick={() => {
                                if (!newGeneralInformation || !currentGeneralInformation) return;
                                setNewGeneralInformation({
                                    ...newGeneralInformation,
                                    name: currentGeneralInformation.name,
                                });
                            }}
                            colorScheme="red">
                            Remove
                        </Button>
                    ) : (
                        <Button
                            onClick={() => {
                                if (!newGeneralInformation) return;
                                setNewGeneralInformation({ ...newGeneralInformation, name: '' });
                            }}
                            colorScheme="red">
                            Edit
                        </Button>
                    )}
                </Flex>
                <Flex>
                    {currentGeneralInformation?.name !== newGeneralInformation?.name && (
                        <Input
                            type="text"
                            value={newGeneralInformation?.name}
                            onChange={(e) => {
                                if (!newGeneralInformation || !currentGeneralInformation) return;
                                setNewGeneralInformation({
                                    ...newGeneralInformation,
                                    name: e.target.value,
                                });
                            }}
                        />
                    )}
                </Flex>
                <Flex>
                    {currentGeneralInformation?.name !== newGeneralInformation?.name && (
                        <Text>{newGeneralInformation?.name}</Text>
                    )}
                </Flex>
            </Flex>
            <Button disabled={JSON.stringify(currentGeneralInformation) === JSON.stringify(newGeneralInformation)}>
                Save
            </Button>
        </Box>
    );
};

export default ManageGeneralInformation;
