import { InputGroup, Input as ChakraInput, Text } from "native-base";
import { useState } from 'react'

interface InputProps {
    placeholder: string
    leftIcon?: any
    rightIcon?: any
    borderColor?: string;
    label?: string;
}


export function Input({ leftIcon, rightIcon, placeholder, borderColor = 'white.900', label }: InputProps) {
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    function handleInputFocus() {
        setIsFocused(true)
    }
    function handleInputBloor() {
        setIsFocused(false)


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

                    onFocus={handleInputFocus}
                    onBlur={handleInputBloor}
                    w={'100%'} placeholder={placeholder}

                    InputLeftElement={leftIcon}
                    InputRightElement={rightIcon}
                    _focus={{ borderColor: borderColor, backgroundColor: 'gray.100' }}
                    borderColor='transparent'
                />

            </InputGroup>
        </>
    )
}