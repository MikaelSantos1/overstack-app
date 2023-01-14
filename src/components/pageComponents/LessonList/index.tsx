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
    activeLesson:number
}
export function LessonList({ data,activeLesson }: Props) {
   
    console.log(activeLesson)
    return (
        <View w='100%' mt='4'>
            <Flex bg='gray.300'>
                <VStack p='4' h='110px'>
                    <Text color='white.900' fontWeight='bold' fontSize='md'>
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
                    bg={activeLesson==item.id?'gray.400':'black.900'}
                    p='4'
                    h='80px'
                    
                    borderWidth={1}
                    borderTopColor='gray.100'
                    borderBottomColor='gray.100'
                    alignItems='center'
                >
                    <PlayIcon color='white.900' />
                    <VStack justifyContent='flex-start' alignItems='flex-start'  ml='6'>
                        <Text 
                        textAlign='left'
                        color='white.900' 
                        fontWeight='bold'>{item.title }</Text>
                        <Text color='white.200' fontWeight='bold' fontSize='xs'  textAlign='left'> {item.duration}</Text>
                    </VStack>

                    <Box w='20px' h='20px' borderRadius='9999999px' bg='gray.300' ml='auto' />


                </HStack>


            ))}


        </View>
    )
}