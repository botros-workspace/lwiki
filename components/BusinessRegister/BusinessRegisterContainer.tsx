import React, { FunctionComponent, useCallback, useState } from 'react';
import { IoMdTimer } from 'react-icons/io';
import { IoInformation } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRecoilValue } from 'recoil';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbFlipHorizontal } from 'react-icons/tb';
import { FaRegStar } from 'react-icons/fa';
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

const BusinessRegisterContainer: FunctionComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(newBusinessResgisterFormSchema),
    });
    const [selectedLogo, setSelectedLogo] = useState<File>();
    const [newBusiness, setNewBusiness] = useState<BusinessRegisterationForm>();
    const [businessType, setBusinessType] = useState<BusinessTypeName>(BusinessTypeName.UNDEFINED_BUSINESS_TYPE);
    const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<Array<PaymentMethodName>>([]);
    const [selectedFeatures, setSelectedFeatures] = useState<Array<FeatureName>>([]);
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

    const onSubmitHandler = (data: any) => {
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
    };

    // const onSubmitHandler = useCallback(
    //     async (data: any) => {

    //         // const formData = new FormData();
    //         // formData.append('email', data.email);
    //         // formData.append('password', data.password);
    //         // formData.append('user_type', UserType.CONSUMER as string);
    //         // formData.append('name', data.name);
    //         // formData.append('image', data.image[0]);
    //         // try {
    //         //     const result: any = await handlePostRequest(axiosInstance, BACKEND_REGISTER_PAGE, formData);
    //         //     if (result) {
    //         //         Router.push('/login');
    //         //     }
    //         // } catch (serverErrors: any) {
    //         //     if (serverErrors !== undefined) {
    //         //         Object.keys(serverErrors).forEach((key, index) => {
    //         //             errorToast(Object.keys(serverErrors)[index], serverErrors[key].toString());
    //         //         });
    //         //     }
    //         // }
    //     },
    //     [
    //         businessType,
    //         continuousService,
    //         dressCode,
    //         features,
    //         isReservationRequired,
    //         openHours,
    //         paymentMethods,
    //         selectedBadges,
    //         selectedOrientations,
    //         userInfo.userId,
    //     ]
    // );

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
                    onSubmitHandler={handleSubmit(onSubmitHandler)}
                    selectedPaymentMethods={selectedPaymentMethods}
                    handlePaymentMethodSelection={handlePaymentMethodSelection}
                    newBusiness={newBusiness}
                    setBusinessType={setBusinessType}
                    businessType={businessType}
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
                    setContinuousService={() => setContinuousService(!continuousService)}
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

    return <StepsTemplate steps={businessRegisterSteps} color="linkedin" canResetSteps />;
};
export default BusinessRegisterContainer;
