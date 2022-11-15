import React, { useState } from 'react';
import { Box, Image, Center, Text, HStack, Link, VisuallyHidden, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { BsFillHeartFill } from 'react-icons/bs';

const ManageFeatures: NextPage = () => {
    // const [images, setImages] = useState<File[]>([]);
    const [selectedImages, setSelectedImages] = useState<Blob[]>([]);
    const imageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            Object.values(e.target.files as Blob[]).forEach((file: Blob) => {
                setSelectedImages([...selectedImages, file]);
            });

            // e.target.files.forEach((image: Blob) => {
            //     selectedImages?.push(image);
            // });
        }
    };
    // const changeHandler = (e: any) => {
    //     e.preventDefault();
    //     const { files } = e.target;

    //     Object.values(files).forEach((file: any) => {
    //         setImages([...images, file]);
    //         console.log(file);
    //     });

    //     // const validImageFiles = [];
    //     // for (let i = 0; i < files.length; i++) {
    //     //     const file = files[i];
    //     //     if (file.type.match(imageTypeRegex)) {
    //     //         validImageFiles.push(file);
    //     //     }
    //     // }
    //     // if (validImageFiles.length) {
    //     //     setImageFiles(validImageFiles);
    //     //     return;
    //     // }
    //     // alert('Selected images are not of valid type!');
    // };
    const removeSelectedImage = () => {
        setSelectedImages([]);
    };
    return (
        <Box w="100%" minH="100%">
            {/* <Center>
                <Flex bg="red" borderRadius="full" w={20} alignContent="center">
                    <Flex>
                        <label htmlFor="file">
                            <VisuallyHidden>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={imageChange}
                                    accept="image/png, image/jpg, image/jpeg"
                                    multiple
                                />
                            </VisuallyHidden>
                            Upload
                        </label>
                    </Flex>
                </Flex>
            </Center>
            <Center h="100vh">
                {selectedImages &&
                    selectedImages.map((image) => (
                        <>
                            <Center>
                                <Box position="relative" w={40} h={40} borderBottomRadius="full" data-group>
                                    <Image src={URL.createObjectURL(image)} w="100%" h="100%" borderRadius="full" />

                                    <Box
                                        _groupHover={{ opacity: '0.6', background: 'black' }}
                                        position="absolute"
                                        opacity={0}
                                        top="50%"
                                        bottom={0}
                                        left={0}
                                        right={0}
                                        borderBottomRadius="full">
                                        <Box position="absolute" top="45%" left="30%" color="white">
                                            <HStack onClick={removeSelectedImage}>
                                                <Link href="/about">
                                                    <BsFillHeartFill />
                                                </Link>
                                                <Text> Remove</Text>
                                            </HStack>
                                        </Box>
                                    </Box>
                                </Box>
                            </Center>
                        </>
                    ))}
            </Center> */}
        </Box>
    );
};

export default ManageFeatures;
