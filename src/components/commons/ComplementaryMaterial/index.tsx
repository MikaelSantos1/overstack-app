import { HStack, Text } from "native-base";

interface ComplementaryMaterial{
    icon:React.ReactNode
    title:string
}


export function ComplementaryMaterial({icon,title}:ComplementaryMaterial){
    return(
        <HStack bg='gray.400' p='20px' space='6'>
            {icon}
            <Text
            textTransform='capitalize' 
            fontWeight='bold'
            color='white.900'
            >{title}</Text>
        </HStack>
    )
}