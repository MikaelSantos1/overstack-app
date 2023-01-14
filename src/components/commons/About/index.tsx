import { Flex, Heading, Text } from "native-base";

interface Props{
    description:string
}

export function About({description}:Props){
    return(
        <Flex px='20px' my='6'>
            <Heading color='white.900' fontWeight='bold' fontSize='xl'>Sobre</Heading>
            <Text color='white.900' >{description}</Text>
        </Flex>
    )
}