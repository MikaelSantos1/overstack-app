import { Flex, Text } from "native-base";
import Download from '@assets/download.svg'
export function Card() {
    return (
        <Flex 
        justify='center'
        align='center'
        flex={1}>
            <Download />
            <Text
                fontWeight='extrabold'
                color='white.900'>
                Compartilhar
            </Text>
        </Flex>
    )
}