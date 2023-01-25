import { Button } from "@components/commons/Button";
import { Carousel } from "@components/pageComponents/Carousel";
import { Center, Flex, HStack, View, VStack } from "native-base";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Logo from '@assets/logo.svg'
import { useNavigation } from "@react-navigation/native";
export function Onboarding() {
    const navigation = useNavigation()
    return (
        <View >
            <Center
                justifyItems='center'
                bg='black.900'
                mt={Platform.OS === 'ios' ? getStatusBarHeight() : 30}
                px='16px'
             
                justifyContent='space-between'
                zIndex={2} 
                w='100%' >
                <Logo width={100} height={100} />

            </Center>
            <Carousel />
            <VStack p='16px' space='4'>
                <Button
                    onPress={()=>navigation.navigate('Login')}
                    bg='orange.500'
                    title="Entrar"
                    variant='outline'
                    borderColor='orange.500'
                />
                <Button
                onPress={()=>navigation.navigate('Register')}
                    title="Criar conta"
                    variant='outline'
                    bg='black.900'
                />
            </VStack>

        </View>
    )
}