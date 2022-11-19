import {
    Box,
    Center,
    Flex,
    Image,
    FormControl,
    Text,
    FormLabel,
    Grid,
    GridItem,
    Input,
    VisuallyHidden,
    Select,
    Badge,
    Icon,
} from '@chakra-ui/react';
import React, { FunctionComponent, useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { AiOutlineCloudUpload, AiOutlineStop } from 'react-icons/ai';
import { BsCheck2All } from 'react-icons/bs';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BadgeTitle } from '../../shared/enum/badge-types.enum';
import { BusinessTypeName } from '../../shared/enum/business-type.enum';
import { PaymentMethodName } from '../../shared/enum/payment-method-types.enum';
import { capatalizeAndRemoveUnderScore } from '../../shared/functions';
import { BusinessRegisterationForm } from '../../shared/interfaces/BusinessRegisterationForm';
import BadgeImage from '../BadgeImage';
import PaymentMethodImage from '../PaymentMethodImage';
import TooltipTemplate from '../Shared/TooltipTemplate';

type Props = {
    register: UseFormRegister<FieldValues>;
    errors: any;
    selectedLogo: File | undefined;
    setSelectedLogo: (logo: File | undefined) => void;
    onSubmitHandler: () => void;
    selectedPaymentMethods: Array<PaymentMethodName>;
    handlePaymentMethodSelection: (payemntMethod: PaymentMethodName) => void;
    newBusiness: BusinessRegisterationForm | undefined;
    setBusinessType: (businessType: BusinessTypeName) => void;
    businessType: BusinessTypeName;
    selectedBadges: Array<BadgeTitle>;
    handleBadgeSelection: (badge: BadgeTitle) => void;
    setIsReservationRequired: () => void;
    isReservationRequired: boolean;
};

const GeneralInformationContainer: FunctionComponent<Props> = ({
    register,
    errors,
    selectedLogo,
    setSelectedLogo,
    onSubmitHandler,
    setBusinessType,
    businessType,
    selectedPaymentMethods,
    handlePaymentMethodSelection,
    newBusiness,
    selectedBadges,
    handleBadgeSelection,
    setIsReservationRequired,
    isReservationRequired,
}) => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('Select region');
    const allPaymentMethods: Array<PaymentMethodName> = Object.values(PaymentMethodName).filter(
        (paymentMethod) => paymentMethod !== PaymentMethodName.UNDEFINED_METHOD
    );
    const allBadges: Array<BadgeTitle> = Object.values(BadgeTitle).filter(
        (badge) => badge !== BadgeTitle.UNDEFINED_BADGE
    );
    return (
        <Grid
            templateRows={{ base: 'repeat(5, 1fr)', md: 'repeat(10, 1fr)' }}
            templateColumns="repeat(1, 1fr)"
            w="100%"
            h="100%"
            overflowY="scroll">
            <GridItem rowSpan={{ base: 1, md: 3 }} mt={{ base: 2, md: 0 }}>
                <Center h="100%" w="100%" m="auto">
                    <Box
                        position="relative"
                        w={{ base: 32, md: 40 }}
                        h={{ base: 32, md: 40 }}
                        borderRadius="full"
                        borderWidth={4}
                        borderColor="gray.500"
                        data-group>
                        <Image
                            src={selectedLogo ? URL.createObjectURL(selectedLogo) : '/images/defaultLogoImage.png'}
                            w="100%"
                            h="100%"
                            borderRadius="full"
                        />
                        <Box
                            _groupHover={{ opacity: '0.6', background: 'black' }}
                            position="absolute"
                            opacity={0}
                            top="50%"
                            bottom={0}
                            left={0}
                            right={0}
                            borderBottomRadius="full">
                            <Box
                                position="absolute"
                                top="40%"
                                left="40%"
                                color="white"
                                fontSize={{ base: 'lg', md: '3xl' }}>
                                {selectedLogo ? (
                                    <TooltipTemplate label="Delete" hasArrow placement="bottom" shouldWrapChildren>
                                        <RiDeleteBin6Line
                                            onClick={() => setSelectedLogo(undefined)}
                                            cursor="pointer"
                                            color="red"
                                        />
                                    </TooltipTemplate>
                                ) : (
                                    <TooltipTemplate label="Upload" hasArrow placement="bottom" shouldWrapChildren>
                                        <label htmlFor="logo" onChange={(e: any) => setSelectedLogo(e.target.files[0])}>
                                            <VisuallyHidden>
                                                <input
                                                    type="file"
                                                    id="logo"
                                                    accept="image/png, image/jpg, image/jpeg"
                                                    {...register('logo')}
                                                />
                                            </VisuallyHidden>
                                            <AiOutlineCloudUpload cursor="pointer" />
                                        </label>
                                    </TooltipTemplate>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Center>
                <Center>
                    <Text color="red" fontSize={{ base: 'xs', md: 'md' }}>
                        {errors.logo?.message}
                    </Text>
                </Center>
            </GridItem>

            <GridItem rowSpan={{ base: 4, md: 7 }} m={1} mt={8}>
                <Flex flexDir={{ base: 'column', md: 'row' }} w={{ base: '90%', md: '60%' }} m="auto">
                    <Text
                        textAlign="center"
                        fontSize={{ base: 'md', md: 'xl' }}
                        fontWeight="bold"
                        w={{ base: '100%', md: '50%' }}
                        my="auto">
                        Business type:
                    </Text>
                    <Select
                        pt={{ base: 2, md: 0 }}
                        w={{ base: '100%', md: '60%' }}
                        m="auto"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value as BusinessTypeName)}>
                        {Object.keys(BusinessTypeName).map(
                            (itemType) =>
                                itemType !== BusinessTypeName.UNDEFINED_BUSINESS_TYPE && (
                                    <option value={itemType}>{capatalizeAndRemoveUnderScore(itemType)}</option>
                                )
                        )}
                    </Select>
                </Flex>
                <Flex flexDir={{ base: 'column', md: 'row' }} justifyContent="center" gap={{ base: 6, md: 16 }} mt={6}>
                    <Flex w={{ base: '90%', sm: '65%', md: '90%' }} m="auto" flexDir="column" gap={6}>
                        <FormControl variant="floating" isRequired>
                            <Input type="text" {...register('name')} />
                            <FormLabel rounded="full" fontSize={{ base: 'sm', md: 'lg' }}>
                                Name
                            </FormLabel>
                            {errors.name?.message && (
                                <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                                    {errors.name?.message}
                                </Text>
                            )}
                        </FormControl>
                        <Flex flexDir={{ base: 'column', lg: 'row' }} gap={6}>
                            <FormControl variant="floating" isRequired>
                                <Input type="text" {...register('street')} />
                                <FormLabel rounded="full" fontSize={{ base: 'sm', md: 'lg' }}>
                                    Street
                                </FormLabel>
                                {errors.street?.message && (
                                    <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                                        {errors.street?.message}
                                    </Text>
                                )}
                            </FormControl>
                            <FormControl variant="floating" id="building_number" isRequired>
                                <Input type="text" {...register('building_number')} />
                                <FormLabel rounded="full" w="94%" fontSize={{ base: 'sm', md: 'lg' }}>
                                    Building number
                                </FormLabel>
                                {errors.building_number?.message && (
                                    <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                                        {errors.building_number?.message}
                                    </Text>
                                )}
                            </FormControl>
                        </Flex>
                        <FormControl variant="floating" id="name" isRequired>
                            <Box
                                overflowX="hidden"
                                alignSelf="center"
                                borderRadius="md"
                                m={1}
                                p={1}
                                w="100%"
                                h={9}
                                borderWidth={1}>
                                <CountryDropdown
                                    style={{
                                        width: '100%',
                                        background: 'white',
                                    }}
                                    onChange={(val) => {
                                        setCountry(val);
                                        setRegion('');
                                    }}
                                />
                            </Box>
                            <FormLabel rounded="full" fontSize={{ base: 'sm', md: 'lg' }}>
                                Country
                            </FormLabel>
                            {errors.name?.message && (
                                <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                                    {errors.name?.message}
                                </Text>
                            )}
                        </FormControl>
                        <FormControl variant="floating" id="name" isRequired>
                            <Box
                                overflowX="hidden"
                                alignSelf="center"
                                borderRadius="md"
                                m={1}
                                p={1}
                                w="100%"
                                h={9}
                                borderWidth={1}>
                                <RegionDropdown
                                    country={country}
                                    value={region}
                                    onChange={(val) => setRegion(val)}
                                    style={{
                                        width: '100%',
                                        background: 'white',
                                    }}
                                />
                            </Box>
                            <FormLabel rounded="full" fontSize={{ base: 'sm', md: 'lg' }}>
                                Region
                            </FormLabel>
                            {errors.name?.message && (
                                <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                                    {errors.name?.message}
                                </Text>
                            )}
                        </FormControl>
                        <Center>
                            <Text
                                rounded="full"
                                fontWeight="bold"
                                fontSize={{ base: 'sm', md: 'lg' }}
                                textDecor="underline">
                                Badges
                            </Text>
                            {!selectedPaymentMethods.length && newBusiness && (
                                <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                                    Required!
                                </Text>
                            )}
                        </Center>

                        <Flex flexDir="row" justifyContent="space-evenly" w="100%" h={10}>
                            {allBadges.map((badge) => (
                                <Flex
                                    left={0}
                                    _hover={{ color: 'red' }}
                                    cursor="pointer"
                                    onClick={() => handleBadgeSelection(badge)}>
                                    <TooltipTemplate
                                        label={capatalizeAndRemoveUnderScore(badge.toString())}
                                        hasArrow
                                        placement="bottom"
                                        shouldWrapChildren>
                                        <Center color={selectedBadges.includes(badge) ? 'red.600' : 'gray.800'}>
                                            <BadgeImage badge={badge} />
                                        </Center>
                                        <Center>
                                            <Badge
                                                fontSize={{ base: 'xs', md: 'xl' }}
                                                variant="gohst"
                                                color={selectedBadges.includes(badge) ? 'gray.800' : 'blue.400'}>
                                                {selectedBadges.includes(badge) ? (
                                                    <RiDeleteBin6Line />
                                                ) : (
                                                    <IoMdAddCircleOutline />
                                                )}
                                            </Badge>
                                        </Center>
                                    </TooltipTemplate>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                    <Flex w={{ base: '90%', sm: '65%', md: '90%' }} m="auto" flexDir="column" gap={6}>
                        <FormControl variant="floating" id="street" isRequired>
                            <Input type="text" {...register('street')} />
                            <FormLabel rounded="full" fontSize={{ base: 'sm', md: 'lg' }}>
                                Phone number
                            </FormLabel>
                            {errors.street?.message && (
                                <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                                    {errors.street?.message}
                                </Text>
                            )}
                        </FormControl>
                        <FormControl variant="floating" id="street" isRequired>
                            <Input type="email" {...register('email')} />
                            <FormLabel rounded="full" fontSize={{ base: 'sm', md: 'lg' }}>
                                Business email
                            </FormLabel>
                            {errors.street?.message && (
                                <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                                    {errors.street?.message}
                                </Text>
                            )}
                        </FormControl>
                        <FormControl variant="floating" id="street" isRequired>
                            <Input type="number" {...register('street')} w="90%" /> $
                            <FormLabel rounded="full" fontSize={{ base: 'sm', md: 'lg' }}>
                                Average per person
                            </FormLabel>
                            {errors.street?.message && (
                                <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                                    {errors.street?.message}
                                </Text>
                            )}
                        </FormControl>
                        <Flex
                            flexDir="row"
                            justifyContent="flex-start"
                            w="90%"
                            h={10}
                            m="auto"
                            borderWidth={1}
                            borderRadius="md"
                            boxShadow={isReservationRequired ? '10px 10px 12px green' : '10px 10px 12px red'}
                            onClick={setIsReservationRequired}
                            cursor="pointer">
                            <Flex fontWeight="bold" m="auto" fontSize={{ base: 'xs', md: 'md' }}>
                                Reservation required:
                            </Flex>
                            <Flex m="auto">
                                <Icon
                                    color={isReservationRequired ? 'green.400' : 'red'}
                                    as={isReservationRequired ? BsCheck2All : AiOutlineStop}
                                    fontSize={{ base: 'xl', md: '3xl' }}
                                    mt={1}
                                />
                            </Flex>
                        </Flex>
                        <Center>
                            <Text
                                rounded="full"
                                fontWeight="bold"
                                fontSize={{ base: 'sm', md: 'lg' }}
                                textDecor="underline">
                                Accepted payment methods
                            </Text>
                            {!selectedPaymentMethods.length && newBusiness && (
                                <Text color="red" fontSize={{ base: 'xs', md: 'md' }} ml={2}>
                                    Required!
                                </Text>
                            )}
                        </Center>

                        <Flex flexDir="row" justifyContent="space-evenly" w="100%" h={10}>
                            {allPaymentMethods.map((selectedMethod) => (
                                <Flex
                                    left={0}
                                    _hover={{ color: 'red' }}
                                    cursor="pointer"
                                    onClick={() => handlePaymentMethodSelection(selectedMethod)}>
                                    <TooltipTemplate
                                        label={capatalizeAndRemoveUnderScore(selectedMethod.toString())}
                                        hasArrow
                                        placement="bottom"
                                        shouldWrapChildren>
                                        <Center
                                            color={
                                                selectedPaymentMethods.includes(selectedMethod) ? 'red.600' : 'gray.800'
                                            }>
                                            <PaymentMethodImage paymentMethod={selectedMethod} />
                                        </Center>
                                        <Badge
                                            fontSize={{ base: 'xs', md: 'xl' }}
                                            variant="gohst"
                                            color={
                                                selectedPaymentMethods.includes(selectedMethod)
                                                    ? 'gray.800'
                                                    : 'blue.400'
                                            }>
                                            {selectedPaymentMethods.includes(selectedMethod) ? (
                                                <RiDeleteBin6Line />
                                            ) : (
                                                <IoMdAddCircleOutline />
                                            )}
                                        </Badge>
                                    </TooltipTemplate>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                    {/* <Button onClick={onSubmitHandler} /> */}
                </Flex>
            </GridItem>
        </Grid>
    );
};
export default GeneralInformationContainer;
