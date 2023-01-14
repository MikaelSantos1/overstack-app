
import { Box, Button, Flex, Heading, HStack, Input, Text } from "native-base";
import { useState } from "react";
import Star from '@assets/star.svg'
import { TouchableOpacity } from "react-native-gesture-handler";
export function StarRating() {
    const [rating, setRating] = useState(0)
    const [ratingRange, setRatingRage] = useState([1, 2, 3, 4, 5])

    return (

        <Flex justify='center' align='center' bg='gray.400' p='2'>
            <Heading 
           textAlign='center'
            fontWeight='bold' 
            color='white.900'>Avalie essa aula</Heading>
            <HStack >

                {ratingRange.map((star, i) => {

                    return (

                        <Button
                        key={i}
                            onPress={() => setRating(star)}
                            variant='Unstyled'
                        >
                            <Star
                                fill={star <= rating ? "#ffff00" : 'transparent'}
                            />
                        </Button>

                    )
                })}

            </HStack>
        </Flex>
    )
}