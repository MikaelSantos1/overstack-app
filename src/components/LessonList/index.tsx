import { Box, Flex, HStack, PlayIcon, Text, VStack } from "native-base";
import { useState} from 'react'
export function LessonList() {
    const [activeLesson,seActiveLesson]= useState()
    return (
        <VStack>
            <Flex bg='gray.300'>
                <VStack p='4' h='90px'>
                    <Text color='white.900' fontWeight='bold'>Titulo da cyruso</Text>
                    <Text color='white.900' fontWeight='bold'>0 de8 aulas concluidas</Text>
                </VStack>
            </Flex>
            <HStack bg='gray.400' 
            p='4' 
            justifyContent='space-around' 
            borderWidth={1}
            borderTopColor='white.200'
            borderBottomColor='white.200'
            alignItems='center'
            >
                <PlayIcon color='white.900' />
                <VStack >
                    <Text color='white.900' fontWeight='bold'> Trailer- que vamos aprender</Text>
                    <Text color='white.200' fontWeight='bold' fontSize='xs'> 01:13</Text>
                </VStack>

                <Box w='20px' h='20px' borderRadius='9999999px' bg='gray.300' />

               
            </HStack>
        </VStack>
    )
}