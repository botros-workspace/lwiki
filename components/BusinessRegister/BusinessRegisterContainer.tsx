import React, { FunctionComponent, useCallback, useState } from 'react';
import { IoMdTimer } from 'react-icons/io';
import { IoInformation } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbFlipHorizontal } from 'react-icons/tb';
import { FaRegStar } from 'react-icons/fa';
import Router from 'next/router';
import StepsTemplate, { StepComponent } from '../StepsTemplate';
import GeneralInformationContainer from './GeneralInformationContainer';
import { newBusinessResgisterFormSchema } from '../../shared/yup/newBusinessRegisterFormSchema';
import { BusinessRegisterationForm } from '../../shared/interfaces/BusinessRegisterationForm';
import { userInfoState } from '../../shared/recoilStates/user.state';
import { BusinessTypeName } from '../../shared/enum/business-type.enum';
import { PaymentMethodName } from '../../shared/enum/payment-method-types.enum';
import { FeatureName } from '../../shared/enum/feature-types.enum';
import { OpenHour } from '../../shared/interfaces/OpenHour';
import { BadgeTitle } from '../../shared/enum/badge-types.enum';
import { OrientationName } from '../../shared/enum/orientation-types.enum';
import OpenHoursContainer from './OpenHoursContainer';
import { OpenHourTypes } from '../../shared/enum/open-hour-types.enum';
import LinksContainer from './LinksContainer';
import FeaturesContainer from './FeaturesContainer';
import OrientationsContainer from './OrienatationsContainer';
import FormResultContainer from './FormResultContainer';
import { axiosInstance } from '../../axios/axiosInstance';
import { BACKEND_BUSINESS_REGISTER_PAGE, MANAGE_ALL_BUSINESS_PAGE } from '../../shared/constants/endpoints';
import { useAxios } from '../../shared/hooks/use-axios.hook';
import { useErrorToast } from '../../shared/hooks/use-error-toast.hook';
import { BusinessResponse } from '../../shared/interfaces/Business';
import { allBusinessResponseState } from '../../shared/recoilStates/all-business.state';

const BusinessRegisterContainer: FunctionComponent = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(newBusinessResgisterFormSchema),
    });

    const watchAllFields = watch();
    const { handlePostRequest } = useAxios();
    const setAllBusinessState = useSetRecoilState<BusinessResponse[]>(allBusinessResponseState);
    const errorToast = useErrorToast();
    const [newBusiness, setNewBusiness] = useState<BusinessRegisterationForm>();
    const [selectedLogo, setSelectedLogo] = useState<File>();
    const [businessType, setBusinessType] = useState<BusinessTypeName>(BusinessTypeName.UNDEFINED_BUSINESS_TYPE);
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<Array<PaymentMethodName>>([]);
    const [selectedFeatures, setSelectedFeatures] = useState<Array<FeatureName>>([]);
    const [tempOpenHours, setTempOpenHours] = useState<Array<OpenHour>>([]);
    const [openHours, setOpenHours] = useState<Array<OpenHour>>([
        {
            day: 0,
            first_period_open: undefined,
            first_period_close: undefined,
            second_period_open: undefined,
            second_period_close: undefined,
        },
        {
            day: 1,
            first_period_open: undefined,
            first_period_close: undefined,
            second_period_open: undefined,
            second_period_close: undefined,
        },
        {
            day: 2,
            first_period_open: undefined,
            first_period_close: undefined,
            second_period_open: undefined,
            second_period_close: undefined,
        },
        {
            day: 3,
            first_period_open: undefined,
            first_period_close: undefined,
            second_period_open: undefined,
            second_period_close: undefined,
        },
        {
            day: 4,
            first_period_open: undefined,
            first_period_close: undefined,
            second_period_open: undefined,
            second_period_close: undefined,
        },

        {
            day: 5,
            first_period_open: undefined,
            first_period_close: undefined,
            second_period_open: undefined,
            second_period_close: undefined,
        },
        {
            day: 6,
            first_period_open: undefined,
            first_period_close: undefined,
            second_period_open: undefined,
            second_period_close: undefined,
        },
    ]);

    const [isReservationRequired, setIsReservationRequired] = useState<boolean>(false);
    const [continuousService, setContinuousService] = useState<boolean>(false);
    const [selectedBadges, setSelectedBadges] = useState<Array<BadgeTitle>>([]);
    const [selectedOrientations, setSelectedOrientations] = useState<Array<OrientationName>>([]);
    const userInfo = useRecoilValue(userInfoState);
    const handlePaymentMethodSelection = useCallback(
        (paymentMethod: PaymentMethodName) => {
            if (paymentMethod === PaymentMethodName.ALL) {
                const allMethods = [
                    PaymentMethodName.VISA,
                    PaymentMethodName.APPLE_PAY,
                    PaymentMethodName.CREDIT_CARD,
                    PaymentMethodName.CASH,
                    PaymentMethodName.MASTER_CARD,
                    PaymentMethodName.AMERICAN_EXPRESS,
                ];
                setSelectedPaymentMethods(allMethods);
            } else if (!selectedPaymentMethods.includes(paymentMethod)) {
                setSelectedPaymentMethods([...selectedPaymentMethods, paymentMethod]);
            } else if (selectedPaymentMethods.includes(paymentMethod)) {
                const index = selectedPaymentMethods.findIndex((method) => method === paymentMethod);
                selectedPaymentMethods.splice(index, 1);
                setSelectedPaymentMethods([...selectedPaymentMethods]);
            }
        },
        [selectedPaymentMethods]
    );
    const handleBadgeSelection = useCallback(
        (badge: BadgeTitle) => {
            if (!selectedBadges.includes(badge)) {
                setSelectedBadges([...selectedBadges, badge]);
            } else if (selectedBadges.includes(badge)) {
                const index = selectedBadges.findIndex((title) => title === badge);
                selectedBadges.splice(index, 1);
                setSelectedBadges([...selectedBadges]);
            }
        },
        [selectedBadges]
    );

    const handleOpenHourInput = useCallback(
        (day: number, shift: OpenHourTypes, value: string) => {
            const temp = openHours.map((item) => {
                if (item.day === day) {
                    if (shift === OpenHourTypes.FIRST_PERIOD_OPEN) {
                        return { ...item, first_period_open: value };
                    }
                    if (shift === OpenHourTypes.FIRST_PERIOD_CLOSE) {
                        return { ...item, first_period_close: value };
                    }
                    if (shift === OpenHourTypes.SECOND_PERIOD_OPEN) {
                        return { ...item, second_period_open: value };
                    }
                    if (shift === OpenHourTypes.SECOND_PERIOD_CLOSE) {
                        return { ...item, second_period_close: value };
                    }
                }
                return item;
            });
            setOpenHours(temp);
        },
        [openHours]
    );

    const onSubmitHandler = useCallback(
        (data: any) => {
            if (!userInfo.userId) return;
            setNewBusiness({
                business_owner_id: userInfo.userId,
                name: data.name,
                logo: data.logo,
                business_type: businessType,
                street: data.street,
                building_number: data.building_number,
                country: data.country,
                region: data.region,
                phone_number: data.phone_number,
                business_email: data.business_email,
                payment_methods: selectedPaymentMethods,
                facebook: data.facebook,
                instagram: data.instagram,
                twitter: data.twitter,
                google_maps: data.google_maps,
                website: data.website,
                features: selectedFeatures,
                open_hours: openHours,
                reservation_required: isReservationRequired,
                continuous_service: continuousService,
                badges: selectedBadges,
                average_per_person: data.average_per_person,
                orientations: selectedOrientations,
            });
        },
        [
            businessType,
            continuousService,
            isReservationRequired,
            openHours,
            selectedBadges,
            selectedFeatures,
            selectedOrientations,
            selectedPaymentMethods,
            userInfo.userId,
        ]
    );
    const handleNewBusinessSubmit = useCallback(async () => {
        if (!userInfo.userId || newBusiness === undefined || !selectedLogo || openHours === undefined) return;
        const formData = new FormData();
        formData.append('business_owner_id', userInfo.userId);
        formData.append('name', newBusiness.name);
        selectedOrientations.forEach((orientation) => {
            formData.append('orientations', orientation);
        });
        formData.append('business_type', businessType as string);
        formData.append('street', newBusiness.street);
        formData.append('building_number', newBusiness.building_number);
        formData.append('country', country);
        formData.append('region', region);
        formData.append('phone_number', newBusiness.phone_number);
        formData.append('business_email', newBusiness.business_email);
        formData.append('facebook', newBusiness.facebook);
        formData.append('instagram', newBusiness.instagram);
        formData.append('twitter', newBusiness.twitter);
        formData.append('google_maps', newBusiness.google_maps);
        formData.append('website', newBusiness.website);
        formData.append('logo', selectedLogo);
        formData.append('reservation_required', newBusiness.reservation_required.toString());
        formData.append('continuous_service', newBusiness.continuous_service.toString());
        openHours.forEach((singelday) => {
            if (
                singelday.first_period_close === undefined ||
                singelday.first_period_open === undefined ||
                singelday.second_period_close === undefined ||
                singelday.second_period_open === undefined
            )
                return;
            formData.append(`openhour_${singelday.day}`, singelday.first_period_open);
            formData.append(`openhour_${singelday.day}`, singelday.first_period_close);
            formData.append(`openhour_${singelday.day}`, singelday.second_period_open);
            formData.append(`openhour_${singelday.day}`, singelday.second_period_close);
        });
        formData.append('average_per_person', newBusiness.average_per_person);
        selectedPaymentMethods.forEach((method) => {
            formData.append('payment_methods', method);
        });
        selectedBadges.forEach((badge) => {
            formData.append('badges', badge);
        });
        selectedFeatures.forEach((feature) => {
            formData.append('features', feature);
        });

        try {
            const result: BusinessResponse[] = await handlePostRequest(
                axiosInstance,
                BACKEND_BUSINESS_REGISTER_PAGE,
                formData
            );
            if (result) {
                setAllBusinessState(result);
                Router.push(MANAGE_ALL_BUSINESS_PAGE);
            }
        } catch (serverErrors: any) {
            if (serverErrors !== undefined) {
                Object.keys(serverErrors).forEach((key, index) => {
                    errorToast(Object.keys(serverErrors)[index], serverErrors[key].toString());
                });
            }
        }
    }, [
        businessType,
        country,
        errorToast,
        handlePostRequest,
        newBusiness,
        openHours,
        region,
        selectedBadges,
        selectedFeatures,
        selectedLogo,
        selectedOrientations,
        selectedPaymentMethods,
        setAllBusinessState,
        userInfo.userId,
    ]);
    function isGeneralInfoComplete(): boolean {
        if (
            selectedLogo &&
            !errors.logo?.message &&
            !errors.name?.message &&
            businessType !== BusinessTypeName.UNDEFINED_BUSINESS_TYPE &&
            !errors.street?.message &&
            !errors.building_number?.message &&
            country &&
            region &&
            !errors.phone_number?.message &&
            !errors.business_email?.message &&
            !errors.average_per_person?.message &&
            selectedPaymentMethods.length >= 1
        )
            return true;
        return false;
    }
    function isOpenHoursComplete(): boolean {
        if (continuousService) return true;
        let complete = true;
        openHours.forEach((item) => {
            if (
                item.first_period_open === undefined ||
                item.first_period_open === '' ||
                item.first_period_close === undefined ||
                item.first_period_close === '' ||
                item.second_period_open === undefined ||
                item.second_period_open === '' ||
                item.second_period_close === undefined ||
                item.second_period_close === ''
            ) {
                complete = false;
            }
        });
        return complete;
    }
    const manageContinousServiceClick = () => {
        if (continuousService) {
            setOpenHours(tempOpenHours);
        } else if (!continuousService) {
            setTempOpenHours(openHours);
            setOpenHours([
                {
                    day: 0,
                    first_period_open: '00:00',
                    first_period_close: '00:00',
                    second_period_open: '00:00',
                    second_period_close: '00:00',
                },
                {
                    day: 1,
                    first_period_open: '00:00',
                    first_period_close: '00:00',
                    second_period_open: '00:00',
                    second_period_close: '00:00',
                },
                {
                    day: 2,
                    first_period_open: '00:00',
                    first_period_close: '00:00',
                    second_period_open: '00:00',
                    second_period_close: '00:00',
                },
                {
                    day: 3,
                    first_period_open: '00:00',
                    first_period_close: '00:00',
                    second_period_open: '00:00',
                    second_period_close: '00:00',
                },
                {
                    day: 4,
                    first_period_open: '00:00',
                    first_period_close: '00:00',
                    second_period_open: '00:00',
                    second_period_close: '00:00',
                },

                {
                    day: 5,
                    first_period_open: '00:00',
                    first_period_close: '00:00',
                    second_period_open: '00:00',
                    second_period_close: '00:00',
                },
                {
                    day: 6,
                    first_period_open: '00:00',
                    first_period_close: '00:00',
                    second_period_open: '00:00',
                    second_period_close: '00:00',
                },
            ]);
        }
        setContinuousService(!continuousService);
    };
    const businessRegisterSteps: StepComponent[] = [
        {
            label: 'General Info',
            icon: IoInformation,
            component: (
                <GeneralInformationContainer
                    register={register}
                    errors={errors}
                    selectedLogo={selectedLogo}
                    setSelectedLogo={setSelectedLogo}
                    setBusinessType={setBusinessType}
                    businessType={businessType}
                    country={country}
                    setCountry={setCountry}
                    region={region}
                    setRegion={setRegion}
                    selectedPaymentMethods={selectedPaymentMethods}
                    handlePaymentMethodSelection={handlePaymentMethodSelection}
                    newBusiness={newBusiness}
                    selectedBadges={selectedBadges}
                    handleBadgeSelection={handleBadgeSelection}
                    setIsReservationRequired={() => setIsReservationRequired(!isReservationRequired)}
                    isReservationRequired={isReservationRequired}
                />
            ),
        },
        {
            label: 'Open hours',
            icon: IoMdTimer,
            component: (
                <OpenHoursContainer
                    openHours={openHours}
                    handleOpenHourInput={handleOpenHourInput}
                    continuousService={continuousService}
                    setContinuousService={() => manageContinousServiceClick()}
                />
            ),
        },
        {
            label: 'Links',
            icon: HiOutlineExternalLink,
            component: <LinksContainer register={register} errors={errors} />,
        },
        {
            label: 'Features',
            icon: FaRegStar,
            component: (
                <FeaturesContainer selectedFeatures={selectedFeatures} setSelectedFeatures={setSelectedFeatures} />
            ),
        },
        {
            label: 'Orientations',
            icon: TbFlipHorizontal,
            component: (
                <OrientationsContainer
                    selectedOrientations={selectedOrientations}
                    setSelectedOrientations={setSelectedOrientations}
                />
            ),
        },
    ];

    return (
        <StepsTemplate
            steps={businessRegisterSteps}
            color="linkedin"
            canResetSteps
            onFinishClick={handleSubmit(onSubmitHandler)}
            onRegisterClick={handleNewBusinessSubmit}
            canRegister={
                isGeneralInfoComplete() &&
                isOpenHoursComplete() &&
                selectedOrientations.length > 0 &&
                selectedFeatures.length > 0
            }
            resultComponent={
                <FormResultContainer
                    errors={errors}
                    watchAllFields={watchAllFields}
                    selectedLogo={selectedLogo}
                    businessType={businessType}
                    country={country}
                    region={region}
                    isReservationRequired={isReservationRequired}
                    selectedPaymentMethods={selectedPaymentMethods}
                    selectedFeatures={selectedFeatures}
                    selectedBadges={selectedBadges}
                    selectedOrientations={selectedOrientations}
                    openHours={openHours}
                    continuousService={continuousService}
                    isGeneralInfoComplete={() => isGeneralInfoComplete()}
                    isOpenHoursComplete={() => isOpenHoursComplete()}
                />
            }
        />
    );
};
export default BusinessRegisterContainer;
