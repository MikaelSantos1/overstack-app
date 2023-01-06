import { Box, Flex, HStack, Image, Progress, Text } from "native-base";
import Css from '@assets/css.png'
import { ImageSourcePropType } from "react-native";

interface LessonCardProps{
    title:string;
    duration:string
    lessonTitle:string
    thumbnail:ImageSourcePropType 
}

export function LessonCard({duration,lessonTitle,thumbnail,title}:LessonCardProps) {
    return (
        <HStack flex={1} space='4' px='20px' py='4'>
            <Flex>
                <Image
                resizeMode="contain"
                    w='100px'
                    h='60px'
                    source={thumbnail}
                />
                 <Box 
                 bg='gray.400' 
                 maxW='40px' 
                 position='absolute' 
                 right={0} bottom='0'
                 h='20px'
                 >
                    <Text 
                    textAlign='center'
                    fontSize='8px'
                    fontWeight='bold'
                    color='white.900'>
                       {duration}
                    </Text>
                </Box>
                <Progress size='xs' rounded={0} value={50}/>
            </Flex>
            <Flex>
                <Box bg='gray.400' maxW='40px'>
                    <Text 
                    textAlign='center'
                    fontSize='xs'
                    color='white.200'>
                       {lessonTitle}
                    </Text>
                </Box>
                <Text
                mt='2' 
                color='white.900' 
                fontWeight='bold'>
                   {title}
                    </Text>
            </Flex>
        </HStack>
    )
}