import React, { FunctionComponent } from 'react';
import { Button, Center, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { UserType } from '../../shared/enum/user-type.enum';

type Props = {
    setUserType: (userType: UserType) => void;
};

const ConsumerRegisterForm: FunctionComponent<Props> = ({ setUserType }) => (
    <Grid templateRows="repeat(20, 1fr)" templateColumns="repeat(1, 1fr)">
        <GridItem rowSpan={1} bg="blue">
            <Button
                onClick={() => {
                    setUserType(UserType.UNDEFINED_USER);
                }}>
                Consumer
            </Button>
        </GridItem>

        <GridItem rowSpan={19} bg="red">
            <Center w="100%" h="100%" mt="50%" m="auto">
                <Menu>
                    {({ isOpen }) => (
                        <>
                            <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                                {isOpen ? 'Close' : 'Open'}
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>
            </Center>
        </GridItem>
    </Grid>
);
export default ConsumerRegisterForm;
