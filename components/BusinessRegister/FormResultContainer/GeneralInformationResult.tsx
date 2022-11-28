import { Flex, Center, Box, Image, Text, Icon, SimpleGrid } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { FieldValues } from 'react-hook-form';
import { AiOutlineStop } from 'react-icons/ai';
import { BsCheck2All } from 'react-icons/bs';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { TiWarningOutline } from 'react-icons/ti';
import { BadgeTitle } from '../../../shared/enum/badge-types.enum';
import { BusinessTypeName } from '../../../shared/enum/business-type.enum';
import { PaymentMethodName } from '../../../shared/enum/payment-method-types.enum';
import { capatalizeAndRemoveUnderScore } from '../../../shared/functions';
import BadgeImage from '../../BadgeImage';
import PaymentMethodImage from '../../PaymentMethodImage';
import TooltipTemplate from '../../Shared/TooltipTemplate';

type Props = {
    errors: any;
    watchAllFields: FieldValues;
    selectedLogo: File | undefined;
    businessType: BusinessTypeName;
    country: string;
    region: string;
    isReservationRequired: boolean;
    selectedPaymentMethods: Array<PaymentMethodName>;
    selectedBadges: Array<BadgeTitle>;
    isComplete: boolean;
};

const GeneralInformationResult: FunctionComponent<Props> = ({
    errors,
    watchAllFields,
    selectedLogo,
    businessType,
    country,
    region,
    isReservationRequired,
    selectedPaymentMethods,
    selectedBadges,
    isComplete,
}) => (
    <Flex h="100%" w="100%" mx="auto" flexDir="column" gap={{ base: 8, md: 12 }}>
        <Flex w="100%" flexDir="column" textAlign="center">
            <Flex justifyContent="center" gap={2}>
                <Flex>
                    <Text fontWeight="bold" fontSize={{ base: 'md', md: '2xl' }} m={1}>
                        General Information
                    </Text>
                </Flex>

                <Flex>
                    {isComplete ? (
                        <TooltipTemplate label="Complete" hasArrow placement="bottom" shouldWrapChildren>
                            <Icon
                                m="auto"
                                mt={2}
                                as={IoCheckmarkDoneCircleOutline}
                                fontSize={{ base: 'xl', md: '3xl' }}
                                color="green.400"
                            />
                        </TooltipTemplate>
                    ) : (
                        <TooltipTemplate label="Not complete" hasArrow placement="bottom" shouldWrapChildren>
                            <Icon as={TiWarningOutline} fontSize={{ base: 'xl', md: '3xl' }} color="red" mt={1} />
                        </TooltipTemplate>
                    )}
                </Flex>
            </Flex>
            <Box h={1} bg="tomato" w="100%" />
        </Flex>
        <Flex flexDir="column" w="100%" m="auto" h="auto">
            <Flex>
                <Box
                    position="relative"
                    w={{ base: 32, md: 40 }}
                    h={{ base: 32, md: 40 }}
                    borderRadius="full"
                    borderWidth={4}
                    borderColor="gray.500"
                    m="auto"
                    data-group>
                    <Image
                        src={selectedLogo ? URL.createObjectURL(selectedLogo) : '/images/defaultLogoImage.png'}
                        w="100%"
                        h="100%"
                        borderRadius="full"
                    />
                </Box>
            </Flex>
            <Flex h={2} mt={2}>
                {!selectedLogo && (
                    <Center w="100%" m="auto">
                        <Text color="red" fontWeight="semibold" fontSize={{ base: 'xs', md: 'md' }}>
                            {errors.logo?.message}
                        </Text>
                    </Center>
                )}
            </Flex>
        </Flex>
        <Flex flexDir={{ base: 'column', lg: 'row' }} gap={4} m="auto">
            <Flex flexDir="column" gap={4}>
                <Flex flexDir={{ base: 'column', sm: 'row' }} justifyContent="flex-start" gap={{ base: 2, md: 8 }}>
                    <Flex w={48} m={{ base: 'auto', sm: 0 }}>
                        <Text
                            fontWeight="bold"
                            fontSize={{ base: 'xs', md: 'xl' }}
                            textDecor="underline"
                            m={{ base: 'auto', sm: 0 }}>
                            Business type
                        </Text>
                    </Flex>
                    <Flex textAlign="center" justifyContent="center" overflowWrap="break-word">
                        {businessType !== BusinessTypeName.UNDEFINED_BUSINESS_TYPE ? (
                            <Text fontSize={{ base: 'xs', md: 'xl' }}>
                                {capatalizeAndRemoveUnderScore(businessType)}
                            </Text>
                        ) : (
                            <Text fontWeight="semibold" textColor="red" fontSize={{ base: 'xs', md: 'xl' }}>
                                Required!
                            </Text>
                        )}
                    </Flex>
                </Flex>
                <Flex flexDir={{ base: 'column', sm: 'row' }} gap={{ base: 2, md: 8 }} justifyContent="flex-start">
                    <Flex w={48} m={{ base: 'auto', sm: 0 }}>
                        <Text
                            fontWeight="bold"
                            fontSize={{ base: 'xs', md: 'xl' }}
                            textDecor="underline"
                            m={{ base: 'auto', sm: 0 }}>
                            Name
                        </Text>
                    </Flex>
                    <Flex textAlign="center" justifyContent="center" overflowWrap="break-word">
                        {watchAllFields.name && !errors.name?.message ? (
                            <Text fontSize={{ base: 'xs', md: 'xl' }}>{watchAllFields.name}</Text>
                        ) : (
                            <Text fontWeight="semibold" textColor="red" fontSize={{ base: 'xs', md: 'xl' }}>
                                {errors.name?.message}
                            </Text>
                        )}
                    </Flex>
                </Flex>
                <Flex flexDir={{ base: 'column', sm: 'row' }} gap={{ base: 2, md: 8 }} justifyContent="flex-start">
                    <Flex w={48} m={{ base: 'auto', sm: 0 }}>
                        <Text
                            fontWeight="bold"
                            fontSize={{ base: 'xs', md: 'xl' }}
                            textDecor="underline"
                            m={{ base: 'auto', sm: 0 }}>
                            Address
                        </Text>
                    </Flex>
                    <Flex textAlign="center" overflowWrap="break-word">
                        {watchAllFields.street &&
                        watchAllFields.building_number &&
                        country &&
                        region &&
                        !errors.street?.message &&
                        !errors.building_number?.message ? (
                            <Text fontSize={{ base: 'xs', md: 'xl' }}>
                                {watchAllFields.street}, {watchAllFields.building_number}, {country}, {region}
                            </Text>
                        ) : (
                            <Flex
                                flexDir="column"
                                textAlign={{ base: 'center', sm: 'left' }}
                                fontSize={{ base: 'xs', md: 'lg' }}
                                textColor="red"
                                m="auto"
                                fontWeight="semibold">
                                {errors.street?.message && <Text>-Street is required!</Text>}
                                {errors.building_number?.message && <Text>-Building number is required!</Text>}
                                {!country && <Text>-Country is required!</Text>}
                                {!region && <Text>-Region is required!</Text>}
                            </Flex>
                        )}
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDir="column" gap={4}>
                <Flex flexDir={{ base: 'column', sm: 'row' }} justifyContent="flex-start" gap={{ base: 2, md: 8 }}>
                    <Flex w={48} m={{ base: 'auto', sm: 0 }}>
                        <Text
                            fontWeight="bold"
                            fontSize={{ base: 'xs', md: 'xl' }}
                            textDecor="underline"
                            m={{ base: 'auto', sm: 0 }}>
                            Phone number:
                        </Text>
                    </Flex>
                    <Flex textAlign="center" justifyContent="center" overflowWrap="break-word">
                        {watchAllFields.phone_number && !errors.phone_number?.message ? (
                            <Text fontSize={{ base: 'xs', md: 'xl' }}>{watchAllFields.phone_number}</Text>
                        ) : (
                            <Text fontWeight="semibold" textColor="red" fontSize={{ base: 'xs', md: 'xl' }}>
                                {errors.phone_number?.message}
                            </Text>
                        )}
                    </Flex>
                </Flex>
                <Flex flexDir={{ base: 'column', sm: 'row' }} justifyContent="flex-start" gap={{ base: 2, md: 8 }}>
                    <Flex w={48} m={{ base: 'auto', sm: 0 }}>
                        <Text
                            fontWeight="bold"
                            fontSize={{ base: 'xs', md: 'xl' }}
                            textDecor="underline"
                            m={{ base: 'auto', sm: 0 }}>
                            Email:
                        </Text>
                    </Flex>
                    <Flex textAlign="center" justifyContent="center" overflowWrap="break-word">
                        {watchAllFields.business_email && !errors.business_email?.message ? (
                            <Text fontSize={{ base: 'xs', md: 'xl' }}>{watchAllFields.business_email}</Text>
                        ) : (
                            <Text fontWeight="semibold" textColor="red" fontSize={{ base: 'xs', md: 'xl' }}>
                                {errors.business_email?.message}
                            </Text>
                        )}
                    </Flex>
                </Flex>
                <Flex flexDir={{ base: 'column', sm: 'row' }} justifyContent="flex-start" gap={{ base: 2, md: 8 }}>
                    <Flex w={48} m={{ base: 'auto', sm: 0 }}>
                        <Text
                            fontWeight="bold"
                            fontSize={{ base: 'xs', md: 'xl' }}
                            textDecor="underline"
                            m={{ base: 'auto', sm: 0 }}>
                            Average per person:
                        </Text>
                    </Flex>
                    <Flex textAlign="center" justifyContent="center" overflowWrap="break-word">
                        {watchAllFields.average_per_person && !errors.average_per_person?.message ? (
                            <Text fontSize={{ base: 'xs', md: 'xl' }}>{watchAllFields.average_per_person} $</Text>
                        ) : (
                            <Text
                                fontWeight="semibold"
                                textAlign="left"
                                textColor="red"
                                fontSize={{ base: 'xs', md: 'xl' }}>
                                {errors.average_per_person?.message}
                            </Text>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        <Flex>
            <Flex
                flexDir="row"
                justifyContent="flex-start"
                w={{ base: '80%', md: '40%' }}
                h={10}
                m="auto"
                borderWidth={1}
                borderRadius="md"
                boxShadow={isReservationRequired ? '10px 10px 12px green' : '10px 10px 12px red'}>
                <Flex fontWeight="bold" m="auto" fontSize={{ base: 'xs', md: 'md' }}>
                    Reservation required:
                </Flex>
                <Flex m="auto">
                    <Icon
                        color={isReservationRequired ? 'green.400' : 'red'}
                        as={isReservationRequired ? BsCheck2All : AiOutlineStop}
                        fontSize={{ base: 'xl', md: '3xl' }}
                    />
                </Flex>
            </Flex>
        </Flex>
        <Flex flexDir={{ base: 'column', sm: 'row' }} justifyContent="flex-start" gap={{ base: 2, md: 8 }}>
            <Flex m="auto" flexDir={{ base: 'column', lg: 'row' }} gap={4} w="100%" h="100%">
                <Flex w="100%">
                    <Text
                        fontWeight="semibold"
                        w={{ base: 'auto', lg: 72 }}
                        fontSize={{ base: 'xs', md: 'xl' }}
                        textDecor="underline"
                        m="auto">
                        {selectedPaymentMethods.length} Selected payment{' '}
                        {selectedPaymentMethods.length === 1 ? 'method' : 'methods'}:
                    </Text>
                </Flex>
                <SimpleGrid minChildWidth="70px" spacing="20px" alignContent="center" w="100%" h="100%">
                    {selectedPaymentMethods.length > 0 ? (
                        selectedPaymentMethods.map((singelMethod) => (
                            <Flex flexDir="column" m="auto">
                                <Flex m="auto">
                                    <PaymentMethodImage paymentMethod={singelMethod} />
                                </Flex>
                                <Text textAlign="center" fontSize={{ base: 'xs', md: 'md' }}>
                                    {capatalizeAndRemoveUnderScore(singelMethod)}
                                </Text>
                            </Flex>
                        ))
                    ) : (
                        <Text
                            w="100%"
                            fontWeight="semibold"
                            textColor="red"
                            fontSize={{ base: 'xs', md: 'xl' }}
                            textAlign="center">
                            At least one method is needed!
                        </Text>
                    )}
                </SimpleGrid>
            </Flex>
        </Flex>
        <Flex flexDir={{ base: 'column', sm: 'row' }} gap={{ base: 2, md: 8 }}>
            <Flex m="auto" flexDir={{ base: 'column', lg: 'row' }} gap={4} w="100%" h="100%">
                <Flex w="100%">
                    <Text
                        fontWeight="semibold"
                        w={{ base: 'auto', lg: 72 }}
                        fontSize={{ base: 'xs', md: 'xl' }}
                        textDecor="underline"
                        m="auto">
                        {selectedBadges.length} Selected {selectedBadges.length === 1 ? 'badge' : 'badges'}:
                    </Text>
                </Flex>
                <SimpleGrid minChildWidth="70px" spacing="20px" w="100%" h="100%">
                    {selectedBadges.map((singelBadge) => (
                        <Flex flexDir="column" m="auto">
                            <Flex m="auto" w={20} h={20}>
                                <BadgeImage badge={singelBadge} />
                            </Flex>
                            <Text textAlign="center" fontSize={{ base: 'xs', md: 'md' }}>
                                {capatalizeAndRemoveUnderScore(singelBadge)}
                            </Text>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Flex>
        </Flex>
    </Flex>
);

export default GeneralInformationResult;
