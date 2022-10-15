import React from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Global, css } from '@emotion/react';
import 'focus-visible/dist/focus-visible';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    const theme = extendTheme({
        components: {
            Steps,
        },
    });
    const GlobalStyles = css`
        .js-focus-visible :focus:not([data-focus-visible-added]) {
            outline: none;
            box-shadow: none;
        }
    `;
    return (
        <RecoilRoot>
            <ChakraProvider theme={theme}>
                <Global styles={GlobalStyles} />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </RecoilRoot>
    );
}

export default MyApp;
