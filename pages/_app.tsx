import React from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Global, css } from '@emotion/react';
import 'focus-visible/dist/focus-visible';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    const activeLabelStyles = {
        transform: 'scale(0.85) translateY(-24px)',
    };
    const theme = extendTheme({
        components: {
            Steps,
            Form: {
                variants: {
                    floating: {
                        container: {
                            _focusWithin: {
                                label: {
                                    ...activeLabelStyles,
                                },
                            },
                            label: {
                                top: 0,
                                left: 0,
                                zIndex: 2,
                                position: 'absolute',
                                backgroundColor: 'white',
                                pointerEvents: 'none',
                                mx: 3,
                                px: 1,
                                my: 2,
                                transformOrigin: 'left top',
                            },
                        },
                    },
                },
            },
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
