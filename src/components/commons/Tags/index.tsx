
import { Box, Button, Flex, Text } from "native-base";

interface Props{
    tags:string
}

export function Tags({tags}:Props){
    return(
        <Flex px='20px'>
            <Text color='white.900' fontWeight='bold'># Tags</Text>
            <Box  
            maxW='100px' 
            bg='black.900' 
            borderColor='white.200' 
            borderWidth={1}
            borderRadius='sm'
            >
            
            <Text
            textAlign='center'
            fontWeight='bold' 
            textTransform='uppercase' 
            color='white.900'  
            fontSize='xs'>
               {tags}
            </Text>
       
            </Box>
        </Flex>
    )
}