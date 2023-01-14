import * as React from 'react';

import { Box, Flex, HStack, ScrollView, Text, VStack } from 'native-base';
import { Button } from '@components/commons/Button';
import { VideoPlayer } from '@components/commons/VideoPlayer';
import { StarRating } from '@components/commons/Stars';
import { LessonList } from '@components/pageComponents/LessonList';
import { TabViewExample } from '@components/commons/Tabs';
import { ComplementaryMaterial } from '@components/commons/ComplementaryMaterial';
import Folder from '@assets/folder.svg'
import { CertificateCard } from '@components/commons/CertificateCard';
const data = [{
  chapterTitle: 'Vencendo o medo de crescer no mercado digital',
  lessonTotalCount: 18,
  completedLessons: 2,
  lessons: [{
    id: 1,
    duration: '11:22',
    title: 'Aula de JS, React seila ',
    completed: true,
    description: 'asodkasodkasdpasçd´zxçc´açsd´~asd; adalpdlasdoj oasjdoasjd'
  },
  {
    id: 2,
    duration: '11:22',
    title: 'Aula asdde JS, React seila ',
    completed: false,
    description: 'asodkasodkasdpasçd´zxçc´açsd´~asd; adalpdlasdoj oasjdoasjd'
  },

  {
    id: 3,
    duration: '11:22',
    title: 'Aasdasdoka ',
    completed: false,
    description: 'asodkasodkasdpasçd´zxçc´açsd´~asd; adalpdlasdoj oasjdoasjd'
  },
  {
    id: 4,
    duration: '11:22',
    title: 'Aula de JS, Reasdaact seila ',
    completed: false,
    description: 'asodkasodkasdpasçd´zxçc´açsd´~asd; adalpdlasdoj oasjdoasjd'
  },
  {
    id: 5,
    duration: '11:22',
    title: 'Aulaasdasd de JS, asda seila ',
    completed: false
    , description: 'asodkasodkasdpasçd´zxçc´açsd´~asd; adalpdlasdoj oasjdoasjd'
  },
  ]
}]

const materialData = [{
  id:1,
  title:'Texto.pdf'
},
{
  id:2,
  title:'Texto.pdf'
},
{
  id:3,
  title:'Texto.pdf'
},
{
  id:4,
  title:'Texto.pdf'
}
]

const LessonTab = ({activeLesson}) => (
  <VStack px='20px' space='4' my='4'>
    <ScrollView>
      <StarRating />
      <LessonList data={data} activeLesson={activeLesson}/>
      <CertificateCard/>
    </ScrollView>

  </VStack>
)

const Description = ({ activeLesson }: any) => (
  <Text color='white.900' px='16px'>
    {data[0].lessons[activeLesson].description}
  </Text>
)
const Material = ({materialData}:any) => (
  <ScrollView>
  <VStack space='4' mt='4' px='16px'>
  {
    materialData.map((item)=>(
      <ComplementaryMaterial
    icon={<Folder />}
    title={item.title}
  />

    ))
  }
  </VStack>
  </ScrollView>
)
export default function VideoScreen() {
  const [activeLesson, setActiveLesson] = React.useState(1)
  return (
    <Box bg='gray.900' flex={1} >
      <VideoPlayer />


      <TabViewExample
        FirstTab={() =>
          <LessonTab  activeLesson={activeLesson}/>
        }
        SecondTab={() => <Description activeLesson={1} />}
        ThirdTab={()=><Material materialData={materialData}/>}
      />
    </Box>
  );
}

