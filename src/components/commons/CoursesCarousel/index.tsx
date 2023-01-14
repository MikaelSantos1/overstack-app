import { Box, FlatList, Flex, HStack, Image, Text, VStack } from "native-base";

import { Dimensions, ImageSourcePropType } from "react-native";
import { ImageProps } from "react-native-svg";

interface Props {
    carouselTitle: string;
    data: {
        image: ImageSourcePropType
        couseId: number | string,
        title: string,
        author: string,
    }[]
}

export function CoursesCarousel({
    carouselTitle, data
}: Props) {

    const width = Dimensions.get('window').width;
    return (
        <Flex flex={1} width='100%' bg='black.700' px='10px'>
            <HStack w='100%'>
                <HStack justifyContent='space-between' w='100%' my='4'>


                    <Text color='white.900' fontWeight='bold' fontSize='md' >
                        {carouselTitle}
                    </Text>



                    <Box>
                        <Text color='white.900' fontWeight='bold' fontSize='md'>
                            Ver tudo
                        </Text>

                    </Box>
                </HStack>
            </HStack>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item, index }) => (
                    <VStack
                        mr='6'
                        alignItems='center'

                    >
                        <Flex w='200px'>
                            <Image
                                w='200px' h='100px'
                                source={item.image}
                            />
                            <Text color='white.900' fontWeight='bold' textAlign='left' mt='1'>
                                {item.title}
                            </Text>
                            <Text color='white.200' >
                                {item.author}
                            </Text>
                        </Flex>

                    </VStack>

                )}
            />

        </Flex>
    )
}