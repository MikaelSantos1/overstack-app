import { Box, Divider, Flex, Heading, HStack, Image, ScrollView, Text, VStack } from "native-base";
import Bg from '@assets/background.png'
import Clock from '@assets/clock.svg'
import Css from '@assets/css.png'
import ReactSvg from '@assets/react.png'
import Folder from '@assets/folder.svg'
import { Button } from "@components/commons/Button";
import { Card } from "@components/commons/Card";
import { CardCourseDetails } from "@components/commons/CardCourseDetails";
import { About } from "@components/commons/About";
import { Tags } from "@components/commons/Tags";
import { LessonCard } from "@components/commons/LessonCard";
import { ComplementaryMaterial } from "@components/commons/ComplementaryMaterial";
import { CertificateCard } from "@components/commons/CertificateCard";
import { BackButton } from "@components/commons/BackButton";
export function Details() {
    return (
        <Flex
            flex={1}
            bgColor='gray.900'

        >
            <ScrollView >
               
                <Box h='450px' w='100%' >
                <BackButton pl={'10px'}/>
                    <Image
                        source={Bg}
                        alt=''
                        resizeMode="cover"
                        h='100%'
                        w='100%'
                        position='absolute' />

                    <Flex flex={1}
                        px='20px'
                        w='100%'
                        justifyContent='flex-end'

                    >
                    <Heading color='white.900' fontWeight='bold' fontSize='2xl' my='6'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cum!
                        </Heading>
                        <Button
                            title="Continuar"
                            border={true}
                        />

                    </Flex>
                </Box>
                <HStack
                    justifyContent='space-around'
                    px='10px'
                    mt='10'
                >
                    <Card />
                    <Card />
                </HStack>

                <Flex bg='gray.400' mx='20px' my='6'>
                    <CardCourseDetails

                        count={1}
                        icon={<Clock />}
                        title='Hora de aula'
                    />
                    <CardCourseDetails
                        count={1}
                        icon={<Clock />}
                        title='Hora de aula'
                    />
                    <CardCourseDetails
                        count={1}
                        icon={<Clock />}
                        title='Hora de aula'
                    />
                    <CardCourseDetails
                        count={1}
                        icon={<Clock />}
                        title='Hora de aula'
                    />
                </Flex>

                <About
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet vitae debitis qui aut modi fuga facere eaque nisi, perferendis, in voluptatibus, natus officiis vel voluptatum eveniet necessitatibus explicabo illum! Quia."
                />
                <Tags
                    tags="programação"
                />
                <HStack px='20px' mt='4'>
                    <Heading color='white.900' fontWeight='bold' fontSize='xl'>Aulas</Heading>
                </HStack>
                <LessonCard
                    duration="05:31"
                    lessonTitle="Aula 1"
                    title="Aula de css"
                    thumbnail={Css}
                />
                   <LessonCard
                    duration="05:31"
                    lessonTitle="Aula 1"
                    title="Aula de css"
                    thumbnail={Css}
                />
                   <LessonCard
                    duration="05:31"
                    lessonTitle="Aula 1"
                    title="Aula de css"
                    thumbnail={Css}
                />
                <LessonCard
                    duration="05:31"
                    lessonTitle="Aula 2"
                    title="Aula de React"
                    thumbnail={ReactSvg}
                />
                <LessonCard
                    duration="05:31"
                    lessonTitle="Aula 2"
                    title="Aula de React"
                    thumbnail={ReactSvg}
                />
                 <LessonCard
                    duration="05:31"
                    lessonTitle="Aula 2"
                    title="Aula de React"
                    thumbnail={ReactSvg}
                />
                 <LessonCard
                    duration="05:31"
                    lessonTitle="Aula 2"
                    title="Aula de React"
                    thumbnail={ReactSvg}
                />
                 <LessonCard
                    duration="05:31"
                    lessonTitle="Aula 2"
                    title="Aula de React"
                    thumbnail={ReactSvg}
                />
                <Divider color='gray.100' />
                <Flex px='20px' my='6'>
                    <HStack space='2' mb='2'>
                        <Folder />
                        <Heading color='white.900' fontWeight='bold' fontSize='xl'>Material complementar</Heading>
                    </HStack>
                    <ComplementaryMaterial
                        icon={<Folder />}
                        title='arquivo para baixar.PDF'
                    />
                </Flex>
                <Flex px='20px' >
                    <CertificateCard />
                </Flex>

                <HStack space='2' my='6' px='20px'>
                    <Folder />
                    <Heading color='white.900' fontWeight='bold' fontSize='xl'>Avaliação</Heading>
                </HStack>
                <VStack bg='gray.400' mx='20px' space='2' p='6'>
                <Text
                        textTransform='capitalize'
                        fontWeight='bold'
                        color='white.900'
                    >Avalie este curso </Text>
                    <Text
                        textTransform='capitalize'
                        fontWeight='bold'
                        color='white.900'
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit. </Text>
                </VStack>
            </ScrollView>
        </Flex>
    )
}