import { Box, Center, Checkbox, Divider, Flex, HStack, Image, ScrollView, Text, View, VStack } from "native-base";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Logo from '@assets/logo.svg'
import Bg from '@assets/background.png'
import { Input } from "@components/commons/Input";
import { InputPassword } from "@components/commons/InputPassword";
import { Button } from "@components/commons/Button";
import { BorderlessButton } from "react-native-gesture-handler";
import { BackButton } from "@components/commons/BackButton";
export function Register() {
    return (
        <ScrollView >

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
                <HStack w='100%' alignItems='center'>
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
                    fontWeight='bold'>Crie sua conta</Text>
            </Flex>
            <Flex px='16px'>
                <Input
                    placeholder="Insira seu nome completo"
                    label="Nome completo"
                    borderColor="orange.600"
                />
                <Input
                    placeholder="(99) 99999-9999"
                    label="Telefone"
                    borderColor="orange.600"
                />
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

                <Checkbox value="orange" colorScheme="orange" defaultIsChecked>
                    <Text
                        fontSize='xs'
                        textAlign='center'
                        color='white.900'
                        fontWeight='bold'>Aceito recerber taltaltal</Text>
                </Checkbox>

                <Button
                    mt='12'
                    title="Continuar"
                    bg='yellow.700'
                    variant='outline'
                    borderColor='yellow.700'
                />
                <Text
                    fontSize='xs'
                    textAlign='justify'
                    color='white.900'
                    fontWeight='bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium reprehenderit</Text>

<Text
mt='2'
                    fontSize='xs'
                    textAlign='justify'
                    color='white.900'
                    fontWeight='bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium reprehenderit</Text>

            </Flex>

        </ScrollView>
    )
}