import { InputGroup, Input as ChakraInput, Text } from "native-base";
import { useState } from 'react'
import Password from '@assets/password.svg'
import PasswordOcult from '@assets/password-ocult.svg'
import { BorderlessButton } from "react-native-gesture-handler";
interface InputProps {
    placeholder: string
    leftIcon?: any
    rightIcon?: any
    borderColor?: string;
    label?: string;
}


export function InputPassword({ leftIcon, rightIcon, placeholder, borderColor = 'white.900', label }: InputProps) {
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    function handleInputFocus() {
        setIsFocused(true)
    }
    function handleInputBloor() {
        setIsFocused(false)


    }
    function handlePasswordVisibilityChange(){
        setIsPasswordVisible(prevState=>!prevState)
      }
    return (
        <>
            {
                label &&
                <Text
                    mb='5px'
                    color='white.900'
                    fontWeight='bold'>{label}</Text>
            }
            <InputGroup w='100%' bg='gray.100' mb='30px'>


                <ChakraInput
               
                    color='white.900'
                    onFocus={handleInputFocus}
                    onBlur={handleInputBloor}
                    w={'100%'} placeholder={placeholder}
                    secureTextEntry={!isPasswordVisible}
                    InputLeftElement={leftIcon}
                    InputRightElement={<BorderlessButton onPress={handlePasswordVisibilityChange} style={{marginRight:10}}>

                        {!isPasswordVisible ? <Password width={20} height={20} />: <PasswordOcult width={20} height={20} />}
                        
                        </BorderlessButton>}
                    _focus={{ borderColor: borderColor, backgroundColor: 'gray.100' }}
                    borderColor='transparent'

                />

            </InputGroup>
        </>
    )
}