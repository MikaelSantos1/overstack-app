import { Button, FlatList, Heading, HStack, Input, InputGroup, InputLeftAddon, InputRightAddon, Text, View } from "native-base";
import SearchIcon from '@assets/search.svg'
import Close from '@assets/close.svg'
import { useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView,  } from "react-native";
import Bg from '@assets/react.png'
import Bg2 from '@assets/css.png'
import { SearchRecomendations } from "@components/commons/SearchRecomendatios";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback,TouchableOpacity } from "react-native-gesture-handler";


const coursesData = [{
    thumbnail: Bg,
    courseId: 0,
    lessontitle: 'JavaScript:programando a Orientação a Objetos',
    author: 'kaio geglio',
    title: 'Overstack'

},
{
    thumbnail: Bg2,
    courseId: 0,
    lessontitle: 'Flexbox ',
    author: 'kaio geglio',
    title: 'Overstack'
},
{
    thumbnail: Bg2,
    courseId: 0,
    lessontitle: 'Flexbox ',
    author: 'kaio geglio',
    title: 'Overstack'
},
{
    thumbnail: Bg2,
    courseId: 0,
    lessontitle: 'Flexbox ',
    author: 'kaio geglio',
    title: 'Overstack'
},
{
    thumbnail: Bg2,
    courseId: 0,
    lessontitle: 'Flexbox ',
    author: 'kaio geglio',
    title: 'Overstack'
},
{
    thumbnail: Bg2,
    courseId: 0,
    lessontitle: 'Flexbox ',
    author: 'kaio geglio',
    title: 'Overstack'
},
{
    thumbnail: Bg2,
    courseId: 0,
    lessontitle: 'Flexbox ',
    author: 'kaio geglio',
    title: 'Overstack'
},
{
    thumbnail: Bg2,
    courseId: 0,
    lessontitle: 'Flexbox ',
    author: 'kaio geglio',
    title: 'Overstack'
},
{
    thumbnail: Bg2,
    courseId: 0,
    lessontitle: 'Flexbox ',
    author: 'kaio geglio',
    title: 'Overstack'
},
{
    thumbnail: Bg2,
    courseId: 0,
    lessontitle: 'Flexbox ',
    author: 'kaio geglio',
    title: 'Overstack'
},
{
    thumbnail: Bg2,
    courseId: 0,
    lessontitle: 'Flexbox ',
    author: 'kaio geglio',
    title: 'Overstack'
},

{
    thumbnail: Bg2,
    courseId: 0,
    lessontitle: 'Flexbox ',
    author: 'kaio geglio',
    title: 'Overstack'
},

]
export function Search() {
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    function handleInputFocus() {
        setIsFocused(true)
    }
    function handleInputBloor() {
        setIsFocused(false)

        Keyboard.dismiss()
    }
    const {navigate,goBack}= useNavigation()
    return (
        <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
      
            <View w='100%' h='100%' px='16px' mt='8' >
                  
                  <View w='100%' h='100%' px='16px' mt='8'>
                <HStack justifyContent='space-between' my='30px'>
                    <Heading color='white.900'>
                        Buscar
                    </Heading>
                    <TouchableOpacity onPress={()=>navigate('Home')}>
                    <Text color='white.900' >
                        Cancelar
                    </Text>
                    </TouchableOpacity>
                </HStack>
                <InputGroup w='100%'  bg='gray.100' mb='30px'>

                    <Input
                        color='white.900'
                        onFocus={handleInputFocus}
                        onBlur={handleInputBloor}
                        w={'100%'} placeholder="nativebase"
                   
                        InputLeftElement={<SearchIcon
                            width={20}
                            height={20}
                            fill='#FFF' />


                        }
                        InputRightElement={
                            <Close
                                width={20}
                                height={20}
                                fill='#FFF' />
                        }
                        _focus={{ borderColor: 'white.900' }}
                        borderColor='transparent'
                    />

                </InputGroup>
                <FlatList
                flex={1}
                    data={coursesData}
                    renderItem={({ item }) =>
                        <SearchRecomendations
                            data={item}
                        />

                    }
                />
                </View >
              
            </View >
            </TouchableWithoutFeedback>

        
    )
}