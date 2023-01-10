import * as React from 'react';

import { Box, Flex, HStack, VStack } from 'native-base';
import { Button } from '@components/Button';
import { VideoPlayer } from '@components/VideoPlayer';
import { StarRating } from '@components/Stars';
import { LessonList } from '@components/LessonList';
export default function App() {
    return (
        <Flex flex={1} bg='gray.900'>
            <VideoPlayer />
            <VStack px='20px' space='4'>
            <StarRating/>

            
           
           <LessonList/>
           </VStack>
        </Flex>
    );
}

