import { Box, Flex, HStack, PlayIcon, FlatList, Text, VStack, View } from "native-base";
import { useState } from 'react'
import { TouchableOpacity } from "react-native";

interface PropsData {
    chapterTitle: string
    lessonTotalCount: number
    completedLessons: number

    lessons: {
        id: number,
        duration: string
        title: string
        completed: boolean
    }[]
}
interface Props {
    data: PropsData[]
}
export function LessonList({ data }: Props) {
    const [activeLesson, setActiveLesson] = useState()
    console.log(data)
    return (
        <View w='100%'>
            <Flex bg='gray.300'>
                <VStack p='4' h='90px'>
                    <Text color='white.900' fontWeight='bold'>
                        {data?.map((item) => item.chapterTitle)}
                    </Text>
                    <Text color='white.900' fontWeight='bold'>
                        {data?.map((item) => item.completedLessons)} de {data?.map((item) => item.lessonTotalCount)} aulas concluidas

                    </Text>
                </VStack>
            </Flex>

            {data[0].lessons.map((item) => (

                <HStack

                    w='100%'
                    bg='gray.400'
                    p='4'
                    justifyContent='space-around'
                    borderWidth={1}
                    borderTopColor='white.200'
                    borderBottomColor='white.200'
                    alignItems='center'
                >
                    <PlayIcon color='white.900' />
                    <VStack >
                        <Text color='white.900' fontWeight='bold'>{item.title}</Text>
                        <Text color='white.200' fontWeight='bold' fontSize='xs'> {item.duration}</Text>
                    </VStack>

                    <Box w='20px' h='20px' borderRadius='9999999px' bg='gray.300' />


                </HStack>


            ))}


        </View>
    )
}