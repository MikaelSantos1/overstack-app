import { HStack } from "native-base";
import SearchIcon from '@assets/search.svg'
import Logo from '@assets/logo.svg'
import { useNavigation } from "@react-navigation/native";
import { Platform, TouchableOpacity} from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height";
export function Header() {
    const navigate = useNavigation()
    return (
        <HStack
        mt={Platform.OS==='ios'?getStatusBarHeight() :30}
            px='16px'
            alignItems='center'
            justifyContent='space-between'
            zIndex={2} bg='transparent'
            w='100%' >
            <Logo width={100} height={100} />
            <TouchableOpacity   onPress={() => navigate.navigate('Search')}>
            <SearchIcon
              
                fill='#FFF'
                width={20}
                height={20} />
                </TouchableOpacity>
        </HStack>
    )
}