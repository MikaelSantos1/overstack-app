import { Flex, HStack, Text } from "native-base";
import Certificate from '@assets/certificate.svg'
export function CertificateCard(){
    return(
        <HStack p='6' space='6' alignItems='center' bg='gray.400'>
            <Certificate/>
            <Flex>
                <Text color='white.900' fontWeight='bold'>
                    Conquiste seu certificado
                </Text>
                <Text color='white.900' maxW='200px' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </Text>
            </Flex>
        </HStack>
    )
}