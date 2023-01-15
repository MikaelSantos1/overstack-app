import { Box, FlatList, Flex, HStack, Image, PlayIcon, Stack, Text, VStack } from "native-base";
import Bg from '@assets/background.png'
import Bg2 from '@assets/bg.png'
import { Button } from "@components/commons/Button";
import { Dimensions, ImageBackground, Platform } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { useRef, useState, useCallback } from "react";
import { ItemClick } from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";
import { Bullet } from "@components/commons/Bullets";
import { useNavigation} from '@react-navigation/native'
export function MainCarousel() {
    const navigate = useNavigation()
    const image = { uri: "https://reactjs.org/logo-og.png" };
    const data = [{
        image: Bg,
        couseId: 0,
        title: 'JavaScript:programando a Orientação a Objetos'
    },
    {
        image: Bg2,
        couseId: 1,
        title: 'React'
    },
    {
        image: Bg,
        couseId: 2,
        title: 'Css'
    }
    ]
    const width = Dimensions.get('window').width;
    const [imageIndex, setImageIndex] = useState(0)

    const indexChanged = useRef((info:any) => {
      
        setImageIndex(info.viewableItems[0].index!)
    })
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })
    return (

        <FlatList
            minH='500px'
            h='100%'
            width={width}
            pagingEnabled
            keyExtractor={item => String(item.couseId)}
            data={data}
            showsHorizontalScrollIndicator={false}
            horizontal
            snapToOffsets={[...Array(data.length)].map((x, i) => i * (width))}
            scrollEventThrottle={16}
            decelerationRate='fast'
            onViewableItemsChanged={indexChanged.current}
            viewabilityConfig={viewConfigRef.current}
            renderItem={({ item, index }) => (
                <VStack
                    zIndex={2}
                    w={width}
                    alignItems='center'
                    bgColor='gray.900'
                >

                    <Image

                        source={item.image}
                        alt=''
                        resizeMode="cover"
                        h='100%'
                        w='100%'
                        position='absolute' />

                    <Flex flex={1} w='100%' justifyContent='flex-end'
                    >
                        <Text
                            color='white.900'
                            fontWeight='bold'
                            fontSize='2xl'
                            textAlign='center'
                            mb='2'
                        >
                            {item.title}
                        </Text>
                        <HStack space='10px' justifyContent='center' >
                            <Button
                            onPress={()=>navigate.navigate('VideoScreen')}
                                w='45%'
                                title="Assistir" 
                                icon={<PlayIcon color='black.900'/>}
                                />
                            <Button
                            onPress={()=>navigate.navigate('Details')}
                                variant='outline'
                                w='45%'
                                title="Mais detalhes" />
                        </HStack>
                    </Flex>
                    <Flex
                        flexDir='row'

                        w='100%'
                        py='6'
                        justify='center'
                        align='center'
                    >
                        {
                            data.map((item, i) => (
                                <Bullet

                                    key={item.couseId}
                                    active={i === imageIndex}
                                />
                            ))
                        }
                    </Flex>
                </VStack>

            )}
        />




    )
}