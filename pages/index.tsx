import React, { useCallback, useEffect, useState } from 'react';
import {
    Box,
    Center,
    Flex,
    Grid,
    GridItem,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
    Select,
    Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { RiMoneyDollarCircleLine, RiQuestionLine } from 'react-icons/ri';
import { useColor } from '../shared/hooks/use-color.hook';
import MainSearchBar from '../components/LandingPage/MainSearchBar';
import { FeatureName } from '../shared/enum/feature-types.enum';
import { capatalizeAndRemoveUnderScore } from '../shared/functions';
import TooltipTemplate from '../components/Shared/TooltipTemplate';

const Home: NextPage = () => {
    const colors = useColor();
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('Select region');
    const [averagePrice, setAveragePrice] = useState<Array<number>>([]);
    const [selectedFeatures, setSelectedFeatures] = useState<Array<FeatureName>>([]);
    const [allFeatures, setAllFeatures] = useState<Array<FeatureName>>([] as Array<FeatureName>);
    const handleSelectedFeature = useCallback(
        (feature: FeatureName) => {
            if (!selectedFeatures.includes(feature)) {
                setSelectedFeatures([...selectedFeatures, feature]);
                const index = allFeatures.findIndex((item) => item === feature);
                allFeatures.slice(index, 1);
            }
        },
        [allFeatures, selectedFeatures]
    );

    const handleAveragePriceChange = (val: any) => {
        setAveragePrice(val);
    };
    useEffect(() => {
        setAllFeatures(Object.keys(FeatureName) as Array<FeatureName>);
    }, []);
    return (
        <Grid
            templateRows="repeat(24, 1fr)"
            templateColumns="repeat(1, 1fr)"
            bg={colors.mainBackground}
            h="100vh"
            fontSize={{ base: 'xs', md: 'md' }}>
            <GridItem rowStart={9}>
                <MainSearchBar />
            </GridItem>
            <GridItem rowStart={11}>
                <Center>
                    <Flex w={48} flexDir="column" gap={4}>
                        <Flex alignSelf="center">
                            <Text fontWeight="bold">Average per person:</Text>
                            <TooltipTemplate
                                label={"The average price is always calculated in dollars so it's international"}
                                hasArrow
                                placement="bottom"
                                shouldWrapChildren={false}>
                                <Box h={4} w={4} m={1} _hover={{ color: colors.secondaryColor }} cursor="pointer">
                                    <RiQuestionLine />
                                </Box>
                            </TooltipTemplate>
                        </Flex>
                        <Flex
                            flexDir="row"
                            w="83%"
                            justifyContent="space-between"
                            alignSelf="center"
                            fontWeight="semibold">
                            <Flex>
                                <Text>Min: {averagePrice[0] || 0}$</Text>
                            </Flex>
                            <Flex>
                                <Text>Max: {averagePrice[1] || 20}$</Text>
                            </Flex>
                        </Flex>
                        <Flex>
                            <RangeSlider defaultValue={[0, 20]} onChange={handleAveragePriceChange} min={0} max={150}>
                                <RangeSliderTrack>
                                    <RangeSliderFilledTrack bg="tomato" />
                                </RangeSliderTrack>

                                <TooltipTemplate
                                    label={averagePrice[0]?.toString()}
                                    placement="bottom"
                                    hasArrow={false}
                                    shouldWrapChildren={false}>
                                    <RangeSliderThumb boxSize={6} index={0}>
                                        <Box color="tomato" as={RiMoneyDollarCircleLine} />
                                    </RangeSliderThumb>
                                </TooltipTemplate>

                                <TooltipTemplate
                                    label={averagePrice[1]?.toString()}
                                    placement="bottom"
                                    hasArrow={false}
                                    shouldWrapChildren={false}>
                                    <RangeSliderThumb boxSize={6} index={1}>
                                        <Box color="tomato" as={RiMoneyDollarCircleLine} />
                                    </RangeSliderThumb>
                                </TooltipTemplate>
                            </RangeSlider>
                        </Flex>
                    </Flex>
                </Center>
            </GridItem>
            <GridItem rowStart={13}>
                <Center>
                    <Flex flexDir={{ base: 'column', md: 'row' }} justifyContent="center" flex="auto" gap={2}>
                        <Flex
                            overflowX="hidden"
                            rounded="full"
                            alignSelf="center"
                            m={1}
                            p={1}
                            w={{ base: '70%', sm: '40%', md: '25%', lg: '20%' }}
                            h={8}
                            borderWidth={2}>
                            <CountryDropdown
                                value={country}
                                style={{
                                    width: '100%',
                                }}
                                onChange={(val) => {
                                    setCountry(val);
                                    setRegion('');
                                }}
                            />
                        </Flex>
                        <Flex
                            overflowX="clip"
                            rounded="full"
                            alignSelf="center"
                            m={1}
                            p={1}
                            w={{ base: '70%', sm: '40%', md: '25%', lg: '15%' }}
                            h={8}
                            borderWidth={2}>
                            <RegionDropdown
                                country={country}
                                value={region}
                                onChange={(val) => setRegion(val)}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Flex>
                    </Flex>
                </Center>
            </GridItem>

            <GridItem rowStart={15}>
                <Center>
                    <Select
                        w={{ base: '60%', sm: '30%', md: '30%', lg: '25%' }}
                        rounded="full"
                        placeholder="Select features"
                        _placeholder={{
                            color: 'red',
                            fontWeight: 'bold',
                        }}
                        onChange={(e) => handleSelectedFeature(e.target.value as FeatureName)}>
                        {allFeatures.map(
                            (name) =>
                                !selectedFeatures.includes(name) && (
                                    <option value={name}>{capatalizeAndRemoveUnderScore(name)}</option>
                                )
                        )}
                    </Select>
                </Center>
                <Center w="100%" h={40} overflowY="scroll">
                    <Flex flexDir="column">
                        {selectedFeatures.map((feature) => (
                            <Text>{feature}</Text>
                        ))}
                    </Flex>
                </Center>
            </GridItem>
        </Grid>
    );
};

export default Home;
