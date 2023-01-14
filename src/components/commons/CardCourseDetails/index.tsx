import { HStack, Text } from "native-base";

interface CardCourseDetails{
    icon:React.ReactNode
    count:number;
    title:string
}

export function CardCourseDetails({count,icon,title}:CardCourseDetails){
    return(
        <HStack  w='100%' bg='gray.400' px='4' py='4'  >
            {icon}
            <Text color='white.900' fontWeight='bold' ml='8px'>
            {count}
            </Text>
            <Text color='white.900' fontWeight='bold' ml='8px'>
            {title}
            </Text>
           
        </HStack>
    )
}