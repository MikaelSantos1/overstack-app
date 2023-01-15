import { ProfileCard } from "@components/commons/ProfileCard";
import { Divider, Heading, HStack, Text, View, VStack } from "native-base";
import Body from '@assets/body.svg'
export function Profile() {
    return (
        <View flex={1} >
            <Heading color='white.900' mt='32' mb='6' px='16px'>
                Ajustes
            </Heading>

            <VStack space='2'>
                <Text

                    p='16px'
                    fontWeight='bold'
                    color='white.200'
                    fontSize='sm'
                >
                    CONTA
                </Text>
                <Divider bg='gray.100' />
                <VStack px='16px' space='8'>
                    <ProfileCard
                        icon={<Body width={30} height={30} />}
                        title='Dados pessoais'
                    />
                    <ProfileCard
                        icon={<Body width={30} height={30} />}
                        title='Certificados'
                    />
                    <ProfileCard
                        icon={<Body width={30} height={30} />}
                        title='Conta'
                    />

                    <ProfileCard
                        icon={<Body width={30} height={30} />}
                        title='Senha de acesso'
                    />
                </VStack>
                <Divider bg='gray.100' />
                <Text
                    py='4'
                    px='16px'
                    fontWeight='bold'
                    color='white.200'
                    fontSize='sm'
                >
                    AJUSTES
                </Text>
                <Divider bg='gray.100' />
                <VStack px='16px' space='5'>
                    <ProfileCard
                        icon={<Body width={30} height={30} />}
                        title='Dados pessoais'
                    />

                </VStack>

                <Divider bg='gray.100' />
                <Text
                    py='4'
                    px='16px'
                    fontWeight='bold'
                    color='white.200'
                    fontSize='sm'
                >
                    MAIS
                </Text>
                <Divider bg='gray.100' />
                <VStack px='16px' space='5'>
                    <ProfileCard
                        icon={<Body width={30} height={30} />}
                        title='Dados pessoais'
                    />

                </VStack>

            </VStack>
        </View>
    )
}