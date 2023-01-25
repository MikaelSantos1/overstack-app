import { Box, Center, Divider, Flex, HStack, Image, Text, View, VStack } from "native-base";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Logo from '@assets/logo.svg'
import Bg from '@assets/background.png'
import { Input } from "@components/commons/Input";
import { InputPassword } from "@components/commons/InputPassword";
import { Button } from "@components/commons/Button";
import { BorderlessButton } from "react-native-gesture-handler";
import { BackButton } from "@components/commons/BackButton";
import { useNavigation } from "@react-navigation/native";
export function Login() {
    const navigation = useNavigation()
    return (
        <View >

            <Flex
                justifyItems='center'
                bg='black.900'
                mt={Platform.OS === 'ios' ? getStatusBarHeight() : 30}
                h='180px'

                justifyContent='space-between'
                zIndex={2}
                w='100%' >
                <Image

                    source={Bg}
                    alt=''
                    resizeMode="cover"
                    h='100%'
                    w='100%'
                    position='absolute' />
                <HStack w='100%'  alignItems='center'>
                    <BackButton />
                    <Flex mt='6' w='60%' alignItems='center'>
                        <Logo width={100} height={30} />
                    </Flex>
                </HStack>

                <Text
                    my='4'
                    textAlign='center'
                    fontSize='lg'
                    color='white.900'
                    fontWeight='bold'>Seja bem-vindo(a)</Text>
            </Flex>
            <Flex px='16px'>
                <Input
                    placeholder="Insira seu e-mail"
                    label="Email"
                    borderColor="orange.600"
                />

                <InputPassword
                    placeholder="Insira sua senha"
                    label="Senha"
                    borderColor="orange.600"
                />

                <Text
                    color='white.900'
                    fontWeight='bold'
                    textAlign='right'
                >Esqueceu sua senha?</Text>

                <Button
                    mt='12'
                    title="Acesse sua conta"
                    bg='yellow.700'
                    variant='outline'
                    borderColor='yellow.700'
                />
                <HStack
                    mt='6'
                    justifyContent='center'
                    alignItems='center'>
                    <Divider
                        w='20%'
                        bg='gray.300'
                    />
                    <Text
                        px='10px'
                        color='gray.300'
                        fontWeight='bold'
                        textAlign='right'
                    >Ainda não criou sua conta?</Text>
                    <Divider
                        bg='gray.300'
                        w='20%'
                    />
                </HStack>
                <Button
                    mt='6'
                    title="Criar conta"
                    onPress={()=>navigation.navigate('Register')}
                    variant='outline'

                />
            </Flex>

        </View>
    )
}