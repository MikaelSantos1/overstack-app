import { Box, Flex, HStack, Image, ScrollView, Text, VStack } from "native-base";
import Bg from '@assets/background.png'
import Clock from '@assets/clock.svg'
import Ep from '@assets/ep.svg'
import Folder from '@assets/folder.svg'
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { CardCourseDetails } from "@components/CardCourseDetails";
import { About } from "@components/About";
export function Details() {
    return (
        <Flex
            flex={1}
            bgColor='gray.900'
        >
            <ScrollView >
            <Box h='450px' w='100%' >
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
                    <Text
                        color='white.900'
                        fontSize='xl'
                        fontWeight='extrabold'
                        my='6'
                    >
                        Como escalar enegoicso as lpadçãsçd
                    </Text>
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
      
               <Flex bg='red.500' >
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
        </ScrollView>
        </Flex>
    )
}