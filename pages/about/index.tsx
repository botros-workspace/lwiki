import React, { useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const About: NextPage = () => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');

    return (
        <Box borderWidth={2} borderColor="red" w="100%" minH="100%">
            <Center>
                <CountryDropdown
                    value={country}
                    onChange={(val) => {
                        setCountry(val);
                        setRegion('');
                    }}
                />
                <RegionDropdown country={country} value={region} onChange={(val) => setRegion(val)} />
            </Center>
        </Box>
    );
};

export default About;
