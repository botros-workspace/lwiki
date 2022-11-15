import { Search2Icon } from '@chakra-ui/icons';
import { Center, Flex, IconButton, Input } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { useColor } from '../../shared/hooks/use-color.hook';

const MainSearchBar: FunctionComponent = () => {
    const colors = useColor();
    return (
        <Center>
            <Flex
                w={{ base: '85%', sm: '60%', md: '35%' }}
                h={{ base: 10, md: 12 }}
                rounded="full"
                bg={colors.backgroundGrayColor}>
                <Input
                    m="auto"
                    w={{ base: '75%', sm: '80%', lg: '85%' }}
                    maxH="80%"
                    textColor={colors.textColor}
                    border="none"
                    rounded="full"
                    placeholder="Ex: Dominos pizza.."
                    _placeholder={{
                        color: colors.textColor,
                        fontSize: { base: 'sm', md: 'md' },
                    }}
                    _focus={{
                        boxShadow: 'none',
                        bg: colors.textOnHover,
                    }}
                />
                <IconButton
                    float="right"
                    w="7%"
                    m="auto"
                    p="auto"
                    maxH="80%"
                    rounded="full"
                    bg={colors.backgroundGrayColor}
                    icon={<Search2Icon fontSize={{ base: 'sm', md: 'xl' }} />}
                    _hover={{ bg: colors.textOnHover }}
                    _focus={{ borderRadius: 'full' }}
                    aria-label=""
                />
            </Flex>
        </Center>
    );
};

export default MainSearchBar;
