import { Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent, ReactElement } from 'react';
import { useColor } from '../../shared/hooks/use_color_library.hook';

type Props = {
    route: string;
    icon: ReactElement;
    text: string;
    closeModal: () => void;
};

const MenuItem: FunctionComponent<Props> = ({ route, icon, text, closeModal }) => {
    const { textColor, textOnHover } = useColor();
    const router = useRouter();

    const changeRoute = (direction: string) => {
        closeModal();
        router.push(`${direction}`, undefined, { shallow: true });
    };

    return (
        <Flex>
            <Link href={route}>
                <Button
                    w={{ base: 22, md: 44 }}
                    size={{ base: 'sm', md: 'lg' }}
                    onClick={() => {
                        changeRoute(route);
                    }}
                    leftIcon={icon}
                    _hover={{ color: textColor }}
                    _focus={{ background: 'none' }}
                    _active={{ background: 'none' }}
                    background="none"
                    color={router.pathname === route ? textColor : textOnHover}>
                    {text}
                </Button>
            </Link>
        </Flex>
    );
};
export default MenuItem;
