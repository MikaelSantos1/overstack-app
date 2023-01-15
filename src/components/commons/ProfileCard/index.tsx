import { Box, HStack, Image, Text } from "native-base";
import ArrowRight from '@assets/arrow-right.svg'
import Bg from '@assets/bg.png'
export function ProfileCard({ title, icon }) {

    return (
        <HStack  alignItems='center'>
          {icon}
            <Text color='white.900' fontWeight='bold' ml='5'>
                {title}
            </Text>
            <Box ml='auto'>
            <ArrowRight width={10} height={10} />
            </Box>
        </HStack>
    )
}