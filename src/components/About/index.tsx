import { Flex, Text } from "native-base";

interface Props{
    description:string
}

export function About({description}:Props){
    return(
        <Flex>
            <Text color='white.900' fontWeight='bold' >Sobre</Text>
            <Text color='white.900' >{description}</Text>
        </Flex>
    )
}