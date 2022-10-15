import React, { FunctionComponent } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import steps from '../../utils/UserResgisterationSteps';
import RegisterationStepsDialog from './RegisterationStepsDialog';
import { BusinessType } from '../../shared/enum/business-type.enum';

type Props = {
    setBusinessType: (businessType: BusinessType) => void;
};

const BusinessFormsContainer: FunctionComponent<Props> = ({ setBusinessType }) => (
    <Flex flexDir="column" w="100%" minH="100vh">
        <Flex flexDir="column">
            <Button
                w="10%"
                onClick={() => {
                    setBusinessType(BusinessType.UNDEFINED_BUSINESS);
                }}>
                Back
            </Button>
            <RegisterationStepsDialog steps={steps} />
        </Flex>
    </Flex>
);
export default BusinessFormsContainer;
