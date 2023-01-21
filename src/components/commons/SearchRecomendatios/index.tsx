import { Box, Flex, HStack, Image, Progress, Text } from "native-base";
import Css from '@assets/css.png'
import { ImageSourcePropType } from "react-native";

interface LessonCardProps {
    title: string;
    courseId: number
    lessontitle: string
    thumbnail: ImageSourcePropType
    author: string
}
interface Props {
    data: LessonCardProps
}
export function SearchRecomendations({ data }: Props) {
    return (
        <HStack flex={1} space='4'  py='4'>
            <Flex>
                <Image
                    resizeMode="contain"
                    w='100px'
                    h='60px'
                    source={data.thumbnail}
                />
                <Box
                    bg='gray.400'
                    maxW='40px'
                    position='absolute'
                    right={0} bottom='0'
                    h='20px'
                >

                </Box>
               
            </Flex>
            <Flex flex={1}>

                <Text
                    flexShrink={1}

                    textAlign='left'
                    mt='2'
                    color='white.900'
                    fontWeight='bold'

                >
                    {data.lessontitle}
                </Text>

               
                <Text
                    mt='2'
                    color='white.200'
                    fontSize='xs'
                    >
                    {data.author}
                </Text>
            </Flex>
        </HStack>
    )
}