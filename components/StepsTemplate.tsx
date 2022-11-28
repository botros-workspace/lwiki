import React, { FunctionComponent, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';

export interface StepComponent {
    label: string;
    icon: IconType;
    component: ReactNode;
}
type Props = {
    steps: StepComponent[];
    color: string;
    canResetSteps: boolean;
    redirectLink?: string;
    resultComponent: ReactNode;
    onFinishClick: () => void;
    onRegisterClick: () => void;
    canRegister: boolean;
};
const StepsTemplate: FunctionComponent<Props> = ({
    steps,
    color,
    canResetSteps = false,
    redirectLink,
    resultComponent,
    onFinishClick,
    onRegisterClick,
    canRegister,
}) => {
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    });

    return (
        <Flex flexDir="column" alignSelf="center" w="95%" h={{ base: 'auto', md: '95vh' }}>
            <Steps
                activeStep={activeStep}
                colorScheme={color}
                maxW="100%"
                alignSelf="center"
                size={{ base: 'sm', md: 'md' }}
                fontSize={{ base: 'sm', md: 'md' }}>
                {steps.map(({ label, icon, component }) => (
                    <Step label={label} key={label} icon={icon}>
                        <Box h={{ base: 'auto', md: '70vh' }} w="100%" overflowY="scroll">
                            {component}
                        </Box>
                    </Step>
                ))}
            </Steps>

            {activeStep === steps.length ? (
                <Flex px={4} py={4} flexDirection="column" h={{ base: 'auto', md: '81vh' }}>
                    <Box h={{ base: 'auto', md: '70vh' }}>{resultComponent}</Box>
                    <Flex alignSelf="center" mt={4} gap={4}>
                        {canResetSteps && (
                            <Button mx="auto" size="sm" onClick={reset} variant="ghost">
                                Edit
                            </Button>
                        )}
                        {!redirectLink && (
                            <Button size="sm" onClick={onRegisterClick} mr={4} disabled={!canRegister}>
                                Register
                            </Button>
                        )}
                    </Flex>
                </Flex>
            ) : (
                <Flex alignSelf="center" m={8}>
                    <Button isDisabled={activeStep === 0} mr={4} onClick={prevStep} size="sm" variant="ghost">
                        Prev
                    </Button>
                    <Button
                        size="sm"
                        onClick={() => (activeStep === steps.length - 1 ? (onFinishClick(), nextStep()) : nextStep())}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Flex>
            )}
        </Flex>
    );
};
export default StepsTemplate;
