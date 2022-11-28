import { Grid, GridItem } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { FieldValues } from 'react-hook-form';
import { BadgeTitle } from '../../../shared/enum/badge-types.enum';
import { BusinessTypeName } from '../../../shared/enum/business-type.enum';
import { FeatureName } from '../../../shared/enum/feature-types.enum';
import { OrientationName } from '../../../shared/enum/orientation-types.enum';
import { PaymentMethodName } from '../../../shared/enum/payment-method-types.enum';
import { OpenHour } from '../../../shared/interfaces/OpenHour';
import FeaturesResult from './FeaturesResult';
import GeneralInformationResult from './GeneralInformationResult';
import LinksResult from './LinksResult';
import OpenHoursResult from './OpenHoursResult';
import OrientationsResult from './OrientationsResult';

type Props = {
    errors: any;
    watchAllFields: FieldValues;
    selectedLogo: File | undefined;
    businessType: BusinessTypeName;
    country: string;
    region: string;
    isReservationRequired: boolean;
    selectedPaymentMethods: Array<PaymentMethodName>;
    selectedFeatures: Array<FeatureName>;
    selectedBadges: Array<BadgeTitle>;
    selectedOrientations: Array<OrientationName>;
    openHours: Array<OpenHour>;
    continuousService: boolean;
    isGeneralInfoComplete: () => boolean;
    isOpenHoursComplete: () => boolean;
};

const FormResultContainer: FunctionComponent<Props> = ({
    errors,
    watchAllFields,
    selectedLogo,
    businessType,
    country,
    region,
    isReservationRequired,
    selectedPaymentMethods,
    selectedFeatures,
    selectedBadges,
    selectedOrientations,
    openHours,
    continuousService,
    isGeneralInfoComplete,
    isOpenHoursComplete,
}) => (
    <Grid templateColumns="repeat(1, 1fr)" w="100%" h="100%" overflowY="scroll">
        <GridItem mt={{ base: 2, md: 0 }} w="100%">
            <GeneralInformationResult
                errors={errors}
                selectedLogo={selectedLogo}
                watchAllFields={watchAllFields}
                businessType={businessType}
                country={country}
                region={region}
                isReservationRequired={isReservationRequired}
                selectedPaymentMethods={selectedPaymentMethods}
                selectedBadges={selectedBadges}
                isComplete={isGeneralInfoComplete()}
            />
        </GridItem>
        <GridItem mt={{ base: 2, md: 0 }}>
            <OpenHoursResult
                openHours={openHours}
                continuousService={continuousService}
                isComplete={isOpenHoursComplete()}
            />
        </GridItem>
        <GridItem mt={{ base: 2, md: 0 }}>
            <LinksResult errors={errors} watchAllFields={watchAllFields} />
        </GridItem>
        <GridItem mt={{ base: 2, md: 0 }}>
            <FeaturesResult selectedFeatures={selectedFeatures} />
        </GridItem>
        <GridItem mt={{ base: 2, md: 0 }}>
            <OrientationsResult selectedOrientations={selectedOrientations} />
        </GridItem>
    </Grid>
);

export default FormResultContainer;
