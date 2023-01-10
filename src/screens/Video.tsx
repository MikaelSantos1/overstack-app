import * as React from 'react';

import { Box, Flex, HStack, ScrollView, VStack } from 'native-base';
import { Button } from '@components/Button';
import { VideoPlayer } from '@components/VideoPlayer';
import { StarRating } from '@components/Stars';
import { LessonList } from '@components/LessonList';
const data = [{
    chapterTitle: 'Vencendo o medo de crescer no mercado digital',
    lessonTotalCount: 18,
    completedLessons: 2,
    lessons: [{
      id: 1,
      duration: '11:22',
      title: 'Aula de JS, React seila ',
      completed: true,
      
    },
    {
      id: 2,
      duration: '11:22',
      title: 'Aula asdde JS, React seila ',
      completed: false
    },
  
    {
      id: 3,
      duration: '11:22',
      title: 'Aasdasdoka ',
      completed: false
    },
    {
      id: 4,
      duration: '11:22',
      title: 'Aula de JS, Reasdaact seila ',
      completed: false
    },
    {
      id: 5,
      duration: '11:22',
      title: 'Aulaasdasd de JS, asda seila ',
      completed: false
    },
    ]
  }]
export default function App() {
    return (
        <Box  bg='gray.900' flex={1} >
            <VideoPlayer  />
            <ScrollView>
            <VStack px='20px' space='4'>
            <StarRating/>

          
        
            <LessonList data={data}/>
           
           </VStack>
           </ScrollView>
        </Box>
    );
}

