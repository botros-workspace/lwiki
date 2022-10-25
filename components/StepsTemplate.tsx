import React, { FunctionComponent, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { useRouter } from 'next/router';

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
};
const StepsTemplate: FunctionComponent<Props> = ({ steps, color, canResetSteps = false, redirectLink }) => {
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    });
    const router = useRouter();

    return (
        <Flex flexDir="column" alignSelf="center" w={{ base: '95%', md: '80%' }} h={{ base: 'auto', md: '95vh' }}>
            <Steps
                activeStep={activeStep}
                colorScheme={color}
                maxW="100%"
                alignSelf="center"
                size={{ base: 'sm', md: 'md' }}
                fontSize={{ base: 'sm', md: 'md' }}>
                {steps.map(({ label, icon, component }) => (
                    <Step label={label} key={label} icon={icon}>
                        <Box alignSelf="center" h={{ base: 'auto', md: '70vh' }} w="100%" overflowY="scroll">
                            <Center>{component}</Center>
                        </Box>
                    </Step>
                ))}
            </Steps>

            {activeStep === steps.length ? (
                <Flex px={4} py={4} flexDirection="column" h={{ base: 'auto', md: '81vh' }}>
                    <Box h={{ base: 'auto', md: '70vh' }}>
                        <Heading fontSize="xl" textAlign="center">
                            Woohoo! All steps completed!
                        </Heading>
                    </Box>
                    <Flex alignSelf="center" mt={4}>
                        {canResetSteps && (
                            <Button mx="auto" size="sm" onClick={reset}>
                                Reset
                            </Button>
                        )}
                        {redirectLink && (
                            <Button onClickCapture={() => router.push(redirectLink)} size="sm" onClick={reset} mr={4}>
                                Redirect
                            </Button>
                        )}
                    </Flex>
                </Flex>
            ) : (
                <Flex alignSelf="center" m={8}>
                    <Button isDisabled={activeStep === 0} mr={4} onClick={prevStep} size="sm" variant="ghost">
                        Prev
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Flex>
            )}
        </Flex>
    );
};
export default StepsTemplate;